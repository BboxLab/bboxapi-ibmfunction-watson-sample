# bboxapi-ibmfunction-watson-sample

## Connect to Bboxapi using IBM watson assistant and cloud functions.
This is an example of how to generate a list of all available channels on the Bbox from watson assistant using an IBM Cloud Function to make a request to the Bbox API

## The files  present include :
* The example JSON Watson assistant skill.
* The example IBM cloud function to be executed.

The output :



![](result.png?raw=true)

## Security Requirements:
In order to make the call to the IBM Cloud Function you first need to retreive an API key corresponding to your IBM cloud function action.
You can find this key in your account at the following url : https://console.bluemix.net/openwhisk/learn/api-key
The page with the API key looks like this:

![](api_key_page.png?raw=true)

Once you have this key, you need to use the first part of it (the part before the colon) as your user and the second part of it (after the colon) as the password. Use these credentials to identify your Watson assistant Skill to your IBM Cloud Function when you request it in a node of your conversation.
You must use a variable to hold the credentials in the JSON editor of a node of your assistant skill
For example, the JSON in our assistant node is as follows:
![](node-json.png?raw=true)

The output of the assistant node will be displayed before the function is executed so dont output anything untill you make a jump to the next node.

You must specify the full path of your ibm cloud function. That is the space (here Bboxlab_Google Assisant V2), the package name (create it and name it as you want, here it is bbox api) and the Cloud function/ Action name (here 'get channel list')
