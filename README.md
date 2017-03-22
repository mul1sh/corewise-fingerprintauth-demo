# How to run the ionic 2 corewise demo app

1. Add the android platform  
	```
	cordova add platform android

	```
2. Make sure you have android studio and the sdk setup in your environment including all the necessary environment variables i.e. ANDROID_HOME

3. Then install the needed plugins via 
    ```
	ionic state restore

	```

3. Finally deploy it to an android device connected to  your machine via the command
    ```
	ionic run android --device

	```

navigate to the home tab and click on either the register or validate button to see the plugin in action