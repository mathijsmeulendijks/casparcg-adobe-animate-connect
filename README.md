# casparcg-adobe-animate-connect

## Installation
* Add the casparcg-adobe-animate-connect.js file as a global include script
* On the first frame of the scene, add the following code: casparcg.init(this);
* For every controllable component, run `casparcg.register(this);` or `casparcg.register(this.COMPONENTNAME);`
    Make sure that for every controllable control the Name field is set

## Debugging
By default, the logger is set to write debugging information to the javascript console only. It is possible to write this information to the render output as well.
#### Using the javascript console
Call setDebug(true) to enable the debug output overlay
#### Using the CasparCG update mechanism
Send an update command with the following content:
"{\"debug\": true}"
