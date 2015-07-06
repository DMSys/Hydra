var $App = {
    OpenTabsss: "John",
    lastName: "Doe",
    OpenTab: function () {
        return this;
    }
};

var $Camera = {
    /* Take a photo using the camera.
    */
    TakePicture: function () {
        return 'ImageSource';
    }
};

var $Data = {
};

var $IO = {
	FileReader:{
		/* globals dHydraSystemFileReader */
        Open: function (filePath){
        	return dHydraSystemFileReader.Open(filePath);	
        },
        ReadLine: function (connectionId){
        	return dHydraSystemFileReader.ReadLine(connectionId);	
        },
        Close: function (connectionId){
        	return dHydraSystemFileReader.Close(connectionId);	
        }
    }
};

var $Platform = {

    Name: dHydraPlatformName(),
    Device: {
        /* Gets the model of the device. For example: "Nexus 5" or "iPhone".
        */
        Model: "iPhone",
        /* Gets the model of the device. For example: "Android" or "iOS".
        */
        OS: "Android",

        /* Gets the OS version. For example: 4.4.4(android), 8.1(ios)
        */
        OSVersion: "8.1",

        /* Gets the OS version. For example: 19(android), 8.1(ios).
        */
        sdkVersion: "8.1",

        /* Gets the type current device. Available values: "phone", "tablet".
        */
        deviceType: "tablet"
    },
    Screen: {
        mainScreen: "ScreenMetrics"
    }
};

function dHydraPlatformName()
{
    return 'android,ios';
}