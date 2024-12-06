# ECE469
Audio recovery using unprivileged accelerometer sensor data


## Accelerometer_Logger

Contains the code that runs on the victims phone. You need to have npm installed to use this. Make sure to set node version to 20.

You will need the audio dataset. Look at the analysis section for how to get this.

Steps to build:
* `npm i`: installs dependencies
* `npm run`: will launch the application
    * from here you need to pull up your phone with the expo app and scan the QR code to load up the app on your phone.
    * if on iphone you need to have the expo app and scan qr code through the camera. you must also have developer mode enabled

## analysis

All scripts used to analyze the data is located here.

More info [here](./analysis/README.md)
