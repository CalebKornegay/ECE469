# Imports
import IPython.display as ipd 
import librosa
import pandas as pd
import os
import numpy as np
from tqdm import tqdm


from sklearn.model_selection import train_test_split 
from sklearn.preprocessing import LabelEncoder

# Set up working data directory
data_dir= './data/'
text_file= data_dir+"audioMNIST_meta.txt"

if not os.path.exists(data_dir):
    print('Please download the data dir from the google drive. It is required to run this.')
    exit()

# Tensorflow keras loads lazily so you will have an include error here
# Run it and it will work
import tensorflow as tf
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense , Activation , Dropout


# open the text file 
f = open(text_file, "r")

# read the file data
data=f.read()
print(data)

# list of all the folder id
folder_id=list(range(1,60))

# list to store all the gender
gender_list=[]

# looping for each data in the text
for i in range(len(data)-6):
    
    # finding the word gender in the data
    if data[i:i+6]=="gender":
        
        # extracting the affiliated gender 
        txt=data[i+10:i+16]
        
        # since male and female have different count of alphabets
        # preprocessing the data to get the actual text 
        if txt[-2]=='"':
            txt=txt[:len(txt)-2]
        
        # appending the gender into the list
        gender_list.append(txt.split(","))

# creating a dictonary that keeps track of folder id and associated gender
folder_dict=dict(zip(folder_id,gender_list))
print(folder_dict)

# save file names
file_names=[]

# sabe all gender of file names
gender=[]

# save all file id and gender
for dirname, _, filenames in os.walk(data_dir):
    for filename in filenames:
        if filename == '.DS_STORE':
            continue
        file_origin=filename[2:4]
        if file_origin=='di':
            pass
        elif int(file_origin) in folder_dict:
            file_names.append(filename)
            gender.append(folder_dict[int(file_origin)])
        else:
            pass

#print(file_names)

import pandas as pd
import numpy
# create na new dataframe
meta_data = pd.DataFrame(gender,columns=['class'])
meta_data["file_name"]=file_names

meta_data.head()

from tqdm import tqdm
import librosa
# do feature extraction using librosa
def features_extract(file):
    # load the audio file
    audio,sample_rate = librosa.load(file_name,res_type='kaiser_fast')
    
    # extract the features
    feature = librosa.feature.mfcc(y=audio,sr=sample_rate,n_mfcc=50)
    
    # feature scaling
    scaled_feature = np.mean(feature.T,axis=0)
    
    # return the scaled features
    return scaled_feature

# list containg all the features
extracted = []

# for each row in the csv
for index_num,row in tqdm(meta_data.iterrows()):
    
    # get the file 
    file_name = os.path.join(os.path.abspath(data_dir),row['file_name'][2:4]+'/',str(row['file_name']))

    # get file label
    final_class_labels = row['class']
    
    # extract feature
    data= features_extract(file_name)
    
    # store it in a list
    extracted.append([data,final_class_labels])

# create na new dataframe
extracted_df = pd.DataFrame(extracted,columns=['feature','class'])

# get the data as a list and send it to np.array() 
# function to convert it into an array 
x = np.array(extracted_df['feature'].tolist())
y = np.array(extracted_df['class'].tolist())

# label encoding to get encoding
le = LabelEncoder()

# transform each category with it's respected label
Y = to_categorical(le.fit_transform(y))

# split the data to train and test set
x_train, x_test, y_train, y_test = train_test_split(x, Y, test_size=0.2, random_state = 42)

# print the details
print("Number of training samples = ", x_train.shape[0])
print("Number of testing samples = ",x_test.shape[0])

# Construct model 
num_labels = Y.shape[1]
model = Sequential()

model.add(Dense(256, input_shape=(50,)))
model.add(Activation('relu'))
model.add(Dropout(0.5))

model.add(Dense(256))
model.add(Activation('relu'))
model.add(Dropout(0.5))
model.add(Dense(256))
model.add(Activation('relu'))
model.add(Dropout(0.5))
model.add(Dense(128))

model.add(Dense(num_labels))
model.add(Activation('softmax'))
model.summary()

model.compile(
    optimizer=tf.keras.optimizers.Adam(),
    loss=tf.keras.losses.CategoricalCrossentropy(),
    metrics=['accuracy'],
)

num_epochs = 15
num_batch_size = 32

model.fit(
          x_train, 
          y_train, 
          batch_size=num_batch_size, 
          epochs=num_epochs,
          validation_data=(x_test, y_test),
         )

# function to extract features from the audion file
def extract_feature(file_name):
    # load the audio file
    audio_data, sample_rate = librosa.load(file_name, res_type='kaiser_fast') 
    
    # get the feature 
    feature = librosa.feature.mfcc(y=audio_data, sr=sample_rate, n_mfcc=50)
    
    # scale the features
    feature_scaled = np.mean(feature.T,axis=0)
    
    # return the array of features
    return np.array([feature_scaled])

# function to predict the feature
def print_prediction(file_name):
    
    # extract feature from the function defined above
    prediction_feature = extract_feature(file_name) 
    
    # get the id of label using argmax
    predicted_vector = np.argmax(model.predict(prediction_feature), axis=-1)
    
    # get the class label from class id
    predicted_class = le.inverse_transform(predicted_vector)
    
    # display the result
    print("The predicted class is:", predicted_class[0], '\n') 

# File name
file_name = data_dir+'01'+"/0_01_0.wav"

# get the output
print_prediction(file_name)

# play the file
ipd.Audio(file_name)