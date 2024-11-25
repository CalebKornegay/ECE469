# Analysis

# REQUIREMENTS

You must have the data folder with all the .wavs. This can be obtained two ways:

* download the data.tar.gz from the google drive and unzip
* download utf8_out.txt and utf8_out1.txt from the google drive and run `deal_with_output.py`

# Building/Running Model

This is all in one file. Run `accel_gender_analysis.py`.

If you want to see what the training is like with the normal audio files run `gender_analysis.py`

# Data source

[https://www.kaggle.com/datasets/sripaadsrinivasan/audio-mnist](https://www.kaggle.com/datasets/sripaadsrinivasan/audio-mnist)


# Gender Detection: Default dataset results

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

# Gender Detection: Equal number of male/female (pruned male until only 12)
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

# Person Identification
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
                                                                 
 dense_4 (Dense)             (None, 59)                7611      
                                                                 
 activation_3 (Activation)   (None, 59)                0         
                                                                 
=================================================================
Total params: 185147 (723.23 KB)
Trainable params: 185147 (723.23 KB)
Non-trainable params: 0 (0.00 Byte)
_________________________________________________________________
Epoch 1/15
295/295 [==============================] - 2s 3ms/step - loss: 10.2254 - accuracy: 0.0153 - val_loss: 4.0788 - val_accuracy: 0.0136
Epoch 2/15
295/295 [==============================] - 1s 3ms/step - loss: 4.1127 - accuracy: 0.0162 - val_loss: 4.0801 - val_accuracy: 0.0136
Epoch 3/15
295/295 [==============================] - 1s 3ms/step - loss: 4.0906 - accuracy: 0.0159 - val_loss: 4.0811 - val_accuracy: 0.0136
Epoch 4/15
295/295 [==============================] - 1s 3ms/step - loss: 4.0867 - accuracy: 0.0154 - val_loss: 4.0816 - val_accuracy: 0.0136
Epoch 5/15
295/295 [==============================] - 1s 3ms/step - loss: 4.0828 - accuracy: 0.0169 - val_loss: 4.0819 - val_accuracy: 0.0119
Epoch 6/15
295/295 [==============================] - 1s 3ms/step - loss: 4.0821 - accuracy: 0.0166 - val_loss: 4.0823 - val_accuracy: 0.0119
Epoch 7/15
295/295 [==============================] - 1s 3ms/step - loss: 4.0831 - accuracy: 0.0157 - val_loss: 4.0821 - val_accuracy: 0.0127
Epoch 8/15
295/295 [==============================] - 1s 3ms/step - loss: 4.0812 - accuracy: 0.0165 - val_loss: 4.0824 - val_accuracy: 0.0127
Epoch 9/15
295/295 [==============================] - 1s 3ms/step - loss: 4.0802 - accuracy: 0.0147 - val_loss: 4.0829 - val_accuracy: 0.0119
Epoch 10/15
295/295 [==============================] - 1s 3ms/step - loss: 4.0802 - accuracy: 0.0162 - val_loss: 4.0831 - val_accuracy: 0.0119
Epoch 11/15
295/295 [==============================] - 1s 3ms/step - loss: 4.0802 - accuracy: 0.0158 - val_loss: 4.0828 - val_accuracy: 0.0119
Epoch 12/15
295/295 [==============================] - 1s 3ms/step - loss: 4.0793 - accuracy: 0.0177 - val_loss: 4.0825 - val_accuracy: 0.0119
Epoch 13/15
295/295 [==============================] - 1s 3ms/step - loss: 4.0799 - accuracy: 0.0156 - val_loss: 4.0826 - val_accuracy: 0.0127
Epoch 14/15
295/295 [==============================] - 1s 3ms/step - loss: 4.0801 - accuracy: 0.0171 - val_loss: 4.0830 - val_accuracy: 0.0119
Epoch 15/15
295/295 [==============================] - 1s 3ms/step - loss: 4.0791 - accuracy: 0.0151 - val_loss: 4.0826 - val_accuracy: 0.0127
1/1 [==============================] - 0s 69ms/step
The predicted class is: 17
```

# Number Identification
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
                                                                 
 dense_4 (Dense)             (None, 10)                1290      
                                                                 
 activation_3 (Activation)   (None, 10)                0         
                                                                 
=================================================================
Total params: 178826 (698.54 KB)
Trainable params: 178826 (698.54 KB)
Non-trainable params: 0 (0.00 Byte)
_________________________________________________________________
Epoch 1/15
295/295 [==============================] - 2s 4ms/step - loss: 7.6599 - accuracy: 0.0999 - val_loss: 2.3033 - val_accuracy: 0.0966
Epoch 2/15
295/295 [==============================] - 1s 3ms/step - loss: 2.3496 - accuracy: 0.0983 - val_loss: 2.3048 - val_accuracy: 0.0936
Epoch 3/15
295/295 [==============================] - 1s 3ms/step - loss: 2.3209 - accuracy: 0.0941 - val_loss: 2.3042 - val_accuracy: 0.0928
Epoch 4/15
295/295 [==============================] - 1s 3ms/step - loss: 2.3109 - accuracy: 0.0998 - val_loss: 2.3031 - val_accuracy: 0.0970
Epoch 5/15
295/295 [==============================] - 1s 3ms/step - loss: 2.3098 - accuracy: 0.0969 - val_loss: 2.3043 - val_accuracy: 0.0928
Epoch 6/15
295/295 [==============================] - 1s 3ms/step - loss: 2.3095 - accuracy: 0.0967 - val_loss: 2.3044 - val_accuracy: 0.0928
Epoch 7/15
295/295 [==============================] - 1s 3ms/step - loss: 2.3065 - accuracy: 0.0994 - val_loss: 2.3034 - val_accuracy: 0.0928
Epoch 8/15
295/295 [==============================] - 1s 3ms/step - loss: 2.3061 - accuracy: 0.0995 - val_loss: 2.3034 - val_accuracy: 0.0928
Epoch 9/15
295/295 [==============================] - 1s 3ms/step - loss: 2.3076 - accuracy: 0.1021 - val_loss: 2.3044 - val_accuracy: 0.0928
Epoch 10/15
295/295 [==============================] - 1s 3ms/step - loss: 2.3065 - accuracy: 0.1020 - val_loss: 2.3038 - val_accuracy: 0.0936
Epoch 11/15
295/295 [==============================] - 1s 3ms/step - loss: 2.3063 - accuracy: 0.0987 - val_loss: 2.3048 - val_accuracy: 0.0970
Epoch 12/15
295/295 [==============================] - 1s 3ms/step - loss: 2.3076 - accuracy: 0.1052 - val_loss: 2.3041 - val_accuracy: 0.0970
Epoch 13/15
295/295 [==============================] - 1s 3ms/step - loss: 2.3054 - accuracy: 0.1025 - val_loss: 2.3033 - val_accuracy: 0.0966
Epoch 14/15
295/295 [==============================] - 1s 3ms/step - loss: 2.3058 - accuracy: 0.0936 - val_loss: 2.3049 - val_accuracy: 0.0928
Epoch 15/15
295/295 [==============================] - 1s 3ms/step - loss: 2.3065 - accuracy: 0.1005 - val_loss: 2.3039 - val_accuracy: 0.1042
1/1 [==============================] - 0s 57ms/step
The predicted class is: 1
```

# Number Identification: Default Dataset (normal audio files)
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
                                                                 
 dense_4 (Dense)             (None, 10)                1290      
                                                                 
 activation_3 (Activation)   (None, 10)                0         
                                                                 
=================================================================
Total params: 178826 (698.54 KB)
Trainable params: 178826 (698.54 KB)
Non-trainable params: 0 (0.00 Byte)
_________________________________________________________________
Epoch 1/15
738/738 [==============================] - 3s 3ms/step - loss: 5.7337 - accuracy: 0.1165 - val_loss: 2.1936 - val_accuracy: 0.1605
Epoch 2/15
738/738 [==============================] - 2s 3ms/step - loss: 2.1440 - accuracy: 0.1723 - val_loss: 2.0194 - val_accuracy: 0.2129
Epoch 3/15
738/738 [==============================] - 2s 3ms/step - loss: 1.9452 - accuracy: 0.2478 - val_loss: 1.5475 - val_accuracy: 0.4844
Epoch 4/15
738/738 [==============================] - 2s 3ms/step - loss: 1.2186 - accuracy: 0.5300 - val_loss: 0.6487 - val_accuracy: 0.7632
Epoch 5/15
738/738 [==============================] - 2s 3ms/step - loss: 0.8313 - accuracy: 0.6988 - val_loss: 0.4771 - val_accuracy: 0.8283
Epoch 6/15
738/738 [==============================] - 2s 3ms/step - loss: 0.6939 - accuracy: 0.7519 - val_loss: 0.4415 - val_accuracy: 0.8559
Epoch 7/15
738/738 [==============================] - 2s 3ms/step - loss: 0.6357 - accuracy: 0.7807 - val_loss: 0.3795 - val_accuracy: 0.8685
Epoch 8/15
738/738 [==============================] - 2s 3ms/step - loss: 0.5989 - accuracy: 0.7972 - val_loss: 0.3745 - val_accuracy: 0.8785
Epoch 9/15
738/738 [==============================] - 2s 3ms/step - loss: 0.5560 - accuracy: 0.8105 - val_loss: 0.3467 - val_accuracy: 0.8902
Epoch 10/15
738/738 [==============================] - 2s 3ms/step - loss: 0.5436 - accuracy: 0.8194 - val_loss: 0.3053 - val_accuracy: 0.9061
Epoch 11/15
738/738 [==============================] - 2s 3ms/step - loss: 0.5179 - accuracy: 0.8259 - val_loss: 0.3346 - val_accuracy: 0.8912
Epoch 12/15
738/738 [==============================] - 2s 3ms/step - loss: 0.5100 - accuracy: 0.8332 - val_loss: 0.3116 - val_accuracy: 0.9027
Epoch 13/15
738/738 [==============================] - 2s 3ms/step - loss: 0.4993 - accuracy: 0.8360 - val_loss: 0.3130 - val_accuracy: 0.8951
Epoch 14/15
738/738 [==============================] - 2s 3ms/step - loss: 0.4908 - accuracy: 0.8402 - val_loss: 0.3056 - val_accuracy: 0.8992
Epoch 15/15
738/738 [==============================] - 2s 3ms/step - loss: 0.4851 - accuracy: 0.8412 - val_loss: 0.2983 - val_accuracy: 0.9086
1/1 [==============================] - 0s 59ms/step
The predicted class is: 0
```

# Number Identification: Accel data gender balanced
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
                                                                 
 dense_4 (Dense)             (None, 10)                1290      
                                                                 
 activation_3 (Activation)   (None, 10)                0         
                                                                 
=================================================================
Total params: 178826 (698.54 KB)
Trainable params: 178826 (698.54 KB)
Non-trainable params: 0 (0.00 Byte)
_________________________________________________________________
Epoch 1/15
120/120 [==============================] - 1s 4ms/step - loss: 14.9593 - accuracy: 0.0987 - val_loss: 2.3134 - val_accuracy: 0.0948
Epoch 2/15
120/120 [==============================] - 0s 3ms/step - loss: 2.7949 - accuracy: 0.1026 - val_loss: 2.3027 - val_accuracy: 0.1010
Epoch 3/15
120/120 [==============================] - 0s 3ms/step - loss: 2.4245 - accuracy: 0.1052 - val_loss: 2.3026 - val_accuracy: 0.1021
Epoch 4/15
120/120 [==============================] - 0s 3ms/step - loss: 2.3499 - accuracy: 0.0997 - val_loss: 2.3034 - val_accuracy: 0.0938
Epoch 5/15
120/120 [==============================] - 0s 3ms/step - loss: 2.3325 - accuracy: 0.1008 - val_loss: 2.3029 - val_accuracy: 0.1000
Epoch 6/15
120/120 [==============================] - 0s 3ms/step - loss: 2.3246 - accuracy: 0.0958 - val_loss: 2.3038 - val_accuracy: 0.0938
Epoch 7/15
120/120 [==============================] - 0s 3ms/step - loss: 2.3160 - accuracy: 0.1021 - val_loss: 2.3036 - val_accuracy: 0.0938
Epoch 8/15
120/120 [==============================] - 0s 3ms/step - loss: 2.3201 - accuracy: 0.0896 - val_loss: 2.3036 - val_accuracy: 0.0969
Epoch 9/15
120/120 [==============================] - 0s 3ms/step - loss: 2.3160 - accuracy: 0.0930 - val_loss: 2.3035 - val_accuracy: 0.0948
Epoch 10/15
120/120 [==============================] - 0s 3ms/step - loss: 2.3096 - accuracy: 0.0992 - val_loss: 2.3039 - val_accuracy: 0.0969
Epoch 11/15
120/120 [==============================] - 0s 3ms/step - loss: 2.3096 - accuracy: 0.0945 - val_loss: 2.3030 - val_accuracy: 0.0990
Epoch 12/15
120/120 [==============================] - 0s 3ms/step - loss: 2.3094 - accuracy: 0.1016 - val_loss: 2.3036 - val_accuracy: 0.0969
Epoch 13/15
120/120 [==============================] - 0s 3ms/step - loss: 2.3077 - accuracy: 0.0945 - val_loss: 2.3032 - val_accuracy: 0.0938
Epoch 14/15
120/120 [==============================] - 0s 3ms/step - loss: 2.3077 - accuracy: 0.0951 - val_loss: 2.3032 - val_accuracy: 0.0990
Epoch 15/15
120/120 [==============================] - 0s 3ms/step - loss: 2.3106 - accuracy: 0.0896 - val_loss: 2.3037 - val_accuracy: 0.0938
1/1 [==============================] - 0s 57ms/step
The predicted class is: 1
```