# casparcg-adobe-animate-connect

## Installation
* Add the casparcg-adobe-animate-connect.js file as a global include script
* On the first frame of the scene, add the following code: casparcg.init(this);
* For every controllable component, run ```casparcg.register(this);``` or ```casparcg.register(this.COMPONENTNAME);```
    Make sure that for every controllable control the Name field is set
    
## Controlling the template
### Setting text
#### Short notation
For updating the text property on a component, a short notation can be used. Send an update command with the following content:  
```
var updateCommand = "{
    \"My_Textfield\": \"My new text\"
}"
```  
Updating multiple fields at once is possible:  
```
var updateCommand ="{
    \"My_Textfield\": \"My new text\", 
    \"Another_Textfield\": \"Another text\"
}"
```
#### Long notation
For parallel invocation of a function and updating of a textfield, or updating other properties, the following commands can be used:  
```
var updateCommand = "{
    \"My_Textfield\": {
        \"set\": \"My new text\"
    }
}"
```  
or  
```
var updateCommand = "{
    \"My_Textfield\": {
        \"set\": {
            \"property\":\"text\",
            \"value\":\"My new text\"
        }
    }
}"
```  
or  
```
var updateCommand = "{
    \"My_Textfield\": {
        \"set\": [
            {
                \"property\":\"text\",
                \"value\":\"My new text\"
            },
            {
                \"property\":\"anotherProperty\",
                \"value\":\"Another Value\"
            }
        ]
    }
}"
```


### Invoking functions
To invoke a function, send the following update command:  
```
var updateCommand = "{
    \"My_Textfield\": {
        \"invoke\": {
            \"function\":\"MyFunction\",
            \"args\":[
                \"First argument\", 
                true, 
                12
            ]
        }
    }
}"
```  
or  
```
var updateCommand = "{
    \"My_Textfield\": {
        \"invoke\": [
            {
                \"function\":\"My_Function\",
                \"args\":[
                    \"First argument\", 
                    true, 
                    12
                ]
            },
            {
                \"function\":\"Another_Function\"
                ]
            }
        ]
    }
}"
```  
## Debugging
By default, the logger is set to write debugging information to the javascript console only. It is possible to write this information to the render output as well.
#### Using the javascript console
Call setDebug(true) to enable the debug output overlay
#### Using the CasparCG update mechanism
Send an update command with the following content:
```
var updateCommand =  "{
    \"debug\": true
}"
```

