# Analysis

# REQUIREMENTS

You must have the data folder with all the .wavs. This can be obtained two ways:

* download the data.tar.gz from the google drive and unzip
* download utf8_out.txt and utf8_out1.txt from the google drive and run `deal_with_output.py`

# Building/Running Model

This is all in one file. Run `accel_gender_analysis.py`.

If you want to see what the training is like with the normal audio files run `gender_analysis.py`


# Gender Detection Default dataset results

```
Model: "sequential"
_________________________________________________________________
 Layer (type)                Output Shape              Param #   
=================================================================
 dense (Dense)               (None, 256)               13056     
                                                                 
 activation (Activation)     (None, 256)               0         
                                                                 
 dropout (Dropout)           (None, 256)               0         
                                                                 
 dense_1 (Dense)             (None, 256)               65792     
                                                                 
 activation_1 (Activation)   (None, 256)               0         
                                                                 
 dropout_1 (Dropout)         (None, 256)               0         
                                                                 
 dense_2 (Dense)             (None, 256)               65792     
                                                                 
 activation_2 (Activation)   (None, 256)               0         
                                                                 
 dropout_2 (Dropout)         (None, 256)               0         
                                                                 
 dense_3 (Dense)             (None, 128)               32896     
                                                                 
 dense_4 (Dense)             (None, 2)                 258       
                                                                 
 activation_3 (Activation)   (None, 2)                 0         
                                                                 
=================================================================
Total params: 177794 (694.51 KB)
Trainable params: 177794 (694.51 KB)
Non-trainable params: 0 (0.00 Byte)
_________________________________________________________________
Epoch 1/15
295/295 [==============================] - 2s 4ms/step - loss: 2.6598 - accuracy: 0.7229 - val_loss: 0.5892 - val_accuracy: 0.8021
Epoch 2/15
295/295 [==============================] - 1s 3ms/step - loss: 0.5971 - accuracy: 0.7729 - val_loss: 0.5478 - val_accuracy: 0.8021
Epoch 3/15
295/295 [==============================] - 1s 3ms/step - loss: 0.5293 - accuracy: 0.8033 - val_loss: 0.5130 - val_accuracy: 0.8021
Epoch 4/15
295/295 [==============================] - 1s 3ms/step - loss: 0.5058 - accuracy: 0.8130 - val_loss: 0.5025 - val_accuracy: 0.8021
Epoch 5/15
295/295 [==============================] - 1s 3ms/step - loss: 0.4967 - accuracy: 0.8153 - val_loss: 0.4983 - val_accuracy: 0.8021
Epoch 6/15
295/295 [==============================] - 1s 3ms/step - loss: 0.4884 - accuracy: 0.8158 - val_loss: 0.4976 - val_accuracy: 0.8021
Epoch 7/15
295/295 [==============================] - 1s 3ms/step - loss: 0.4858 - accuracy: 0.8162 - val_loss: 0.4979 - val_accuracy: 0.8021
Epoch 8/15
295/295 [==============================] - 1s 3ms/step - loss: 0.4830 - accuracy: 0.8162 - val_loss: 0.4976 - val_accuracy: 0.8021
Epoch 9/15
295/295 [==============================] - 1s 3ms/step - loss: 0.4838 - accuracy: 0.8162 - val_loss: 0.4979 - val_accuracy: 0.8021
Epoch 10/15
295/295 [==============================] - 1s 3ms/step - loss: 0.4830 - accuracy: 0.8164 - val_loss: 0.4996 - val_accuracy: 0.8021
Epoch 11/15
295/295 [==============================] - 1s 3ms/step - loss: 0.4818 - accuracy: 0.8164 - val_loss: 0.5009 - val_accuracy: 0.8021
Epoch 12/15
295/295 [==============================] - 1s 3ms/step - loss: 0.4804 - accuracy: 0.8164 - val_loss: 0.5008 - val_accuracy: 0.8021
Epoch 13/15
295/295 [==============================] - 1s 3ms/step - loss: 0.4786 - accuracy: 0.8164 - val_loss: 0.4975 - val_accuracy: 0.8021
Epoch 14/15
295/295 [==============================] - 1s 3ms/step - loss: 0.4778 - accuracy: 0.8164 - val_loss: 0.4978 - val_accuracy: 0.8021
Epoch 15/15
295/295 [==============================] - 1s 3ms/step - loss: 0.4769 - accuracy: 0.8164 - val_loss: 0.4975 - val_accuracy: 0.8021
1/1 [==============================] - 0s 57ms/step
The predicted class is: male
```

# Gender Equal number of male/female (pruned male until only 12)
```
Model: "sequential"
_________________________________________________________________
 Layer (type)                Output Shape              Param #   
=================================================================
 dense (Dense)               (None, 256)               13056     
                                                                 
 activation (Activation)     (None, 256)               0         
                                                                 
 dropout (Dropout)           (None, 256)               0         
                                                                 
 dense_1 (Dense)             (None, 256)               65792     
                                                                 
 activation_1 (Activation)   (None, 256)               0         
                                                                 
 dropout_1 (Dropout)         (None, 256)               0         
                                                                 
 dense_2 (Dense)             (None, 256)               65792     
                                                                 
 activation_2 (Activation)   (None, 256)               0         
                                                                 
 dropout_2 (Dropout)         (None, 256)               0         
                                                                 
 dense_3 (Dense)             (None, 128)               32896     
                                                                 
 dense_4 (Dense)             (None, 2)                 258       
                                                                 
 activation_3 (Activation)   (None, 2)                 0         
                                                                 
=================================================================
Total params: 177794 (694.51 KB)
Trainable params: 177794 (694.51 KB)
Non-trainable params: 0 (0.00 Byte)
_________________________________________________________________
Epoch 1/15
120/120 [==============================] - 1s 4ms/step - loss: 3.8936 - accuracy: 0.9187 - val_loss: 0.1843 - val_accuracy: 0.9615
Epoch 2/15
120/120 [==============================] - 0s 3ms/step - loss: 0.5540 - accuracy: 0.9242 - val_loss: 0.2038 - val_accuracy: 0.9615
Epoch 3/15
120/120 [==============================] - 0s 3ms/step - loss: 0.3022 - accuracy: 0.9385 - val_loss: 0.3904 - val_accuracy: 0.9615
Epoch 4/15
120/120 [==============================] - 0s 3ms/step - loss: 0.2563 - accuracy: 0.9443 - val_loss: 0.3494 - val_accuracy: 0.9615
Epoch 5/15
120/120 [==============================] - 0s 3ms/step - loss: 0.2359 - accuracy: 0.9497 - val_loss: 0.3424 - val_accuracy: 0.9615
Epoch 6/15
120/120 [==============================] - 0s 3ms/step - loss: 0.2293 - accuracy: 0.9536 - val_loss: 0.2981 - val_accuracy: 0.9615
Epoch 7/15
120/120 [==============================] - 0s 3ms/step - loss: 0.2145 - accuracy: 0.9570 - val_loss: 0.2546 - val_accuracy: 0.9615
Epoch 8/15
120/120 [==============================] - 0s 3ms/step - loss: 0.2083 - accuracy: 0.9570 - val_loss: 0.2811 - val_accuracy: 0.9615
Epoch 9/15
120/120 [==============================] - 0s 3ms/step - loss: 0.2167 - accuracy: 0.9557 - val_loss: 0.2108 - val_accuracy: 0.9615
Epoch 10/15
120/120 [==============================] - 0s 3ms/step - loss: 0.2072 - accuracy: 0.9576 - val_loss: 0.2064 - val_accuracy: 0.9615
Epoch 11/15
120/120 [==============================] - 0s 3ms/step - loss: 0.1906 - accuracy: 0.9565 - val_loss: 0.2151 - val_accuracy: 0.9615
Epoch 12/15
120/120 [==============================] - 0s 3ms/step - loss: 0.2026 - accuracy: 0.9568 - val_loss: 0.1911 - val_accuracy: 0.9615
Epoch 13/15
120/120 [==============================] - 0s 3ms/step - loss: 0.1883 - accuracy: 0.9576 - val_loss: 0.1668 - val_accuracy: 0.9615
Epoch 14/15
120/120 [==============================] - 0s 3ms/step - loss: 0.1935 - accuracy: 0.9576 - val_loss: 0.1649 - val_accuracy: 0.9615
Epoch 15/15
120/120 [==============================] - 0s 3ms/step - loss: 0.1885 - accuracy: 0.9576 - val_loss: 0.1735 - val_accuracy: 0.9615
1/1 [==============================] - 0s 57ms/step
The predicted class is: male
```

# 