# bboxapi-ibmfunction-watson-sample

## Connect to Bboxapi using IBM watson assistant and IBM Cloud functions.
This is an example of how to display a list of all available channels on the Bbox Api from a Watson Assistant Conversation by using an IBM Cloud function.

## The files present in the repository include :
* An example JSON Watson assistant skill with all the information about the Assistant Conversation including an example call to an IBM Cloud Function.
* An example IBM cloud function that can be called from Watson Assistant. It makes an https request to the BBox API for a list of channels.

The intended result to be displayed in the Watson Conversation Skill is as follows :



![](result.png?raw=true)

## Security Requirements :

# Writing the IBM Cloud Function :
In order to make requests to the BBox API you need to ask for an appId and appSecret at the following url :
https://dev.bouyguestelecom.fr/nous-contacter/
Add these credentials to the ready made Cloud Function.

In order to make the call to the IBM Cloud Function from Waton Assistant you must first retrieve an API key corresponding to your IBM cloud function which you can find at the following Url address :

https://console.bluemix.net/openwhisk/learn/api-key
![](api_key_page.png?raw=true)


Once you have your API key, you have to use the first part of it (the part before the colon) as your user and the second part of it (after the colon) as your password.
Use these credentials to make the call to the IBM Cloud function from any conversation node of your Watson Assistant Conversation skill.

# In order to make a call to the ibm cloud function, you should format your JSON as follows :

The output of the assistant conversation node will be displayed before the function is executed so dont output anything in this node. Use a jump to the next node before.

Inside an action object :

* Use a variable called $my_credentials to hold the credentials in your watson assistant.
* Use a variable called "name" to specify the full path of your ibm cloud function. (the IBM space name( here 'Bboxlab_Google Assisant V2'), the package name (create it and name it as you want, here it is 'bbox api') and the Cloud function/ Action name (here 'get channel list').
* A variable type needs a value of "server".
* A variable called "result_variable" needs to be set in order to store the function result.

As an example, the JSON you create can look like the following :

![](node-json.png?raw=true)

<img src="bluemix.png" width="150"/> <img src="ibmcf.png"  padding-left="50px" width="150"/> <img src="watsonassistant.png" padding-left="50px" width="150"/>
