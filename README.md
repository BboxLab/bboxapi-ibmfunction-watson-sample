# bboxapi-ibmfunction-watson-sample

## Connect to Bboxapi using IBM watson assistant and cloud functions.
This is an example of how to generate a list of all available channels on the Bbox from watson assistant using an IBM Cloud Function to make a request to the Bbox API

## The files  present include :
* The example JSON Watson assistant skill.
* The example IBM cloud function to be executed.

The output :



![](result.png?raw=true)

## Security Requirements:
In order to make the call to the IBM Cloud Function you must first retreive an API key corresponding to your IBM cloud function/action.
You can find this key in your account at the following url :

https://console.bluemix.net/openwhisk/learn/api-key
![](api_key_page.png?raw=true)

Once you have your API key, you have to use the first part of it (the part before the colon) as your user and the second part of it (after the colon) as your password.

Use these credentials to identify your Watson assistant Skill to your IBM Cloud Function when you request it in a node of your conversation.

* Use a variable called $my_credentials to hold the credentials in your watson assistant.
* The output of the assistant conversation node will be displayed before the function is executed so dont output anything untill you make a jump to the next node.
* You must specify the full path of your ibm cloud function in a variable called "name" in the action section of your JSON editor. (the IBM space name(here 'Bboxlab_Google Assisant V2'), the package name (create it and name it as you want, here 'bbox api') and the Cloud function/ Action name (here 'get channel list')


As an example, the JSON you create can look like the following :

![](node-json.png?raw=true)

<img src="bluemix.png" width="100"/>

<img src="watsonassistant.png" width="100" float="left"/>

<img src="ibmcf.png" width="100" float="left"/>
