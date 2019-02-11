/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */

const request = require('request-promise');

function main(params) {

    var postData = {
          appId: "***",
          appSecret: "***"
    };

    var options = {
          url: "https://api.bbox.fr/v1.3/security/token",
          json   : postData,
          method : 'POST',
          headers: {
              'content-type': 'application/json'
          }
     };

     var promise1 = new Promise(function (resolve, reject) {
                    request(options, function(err, resp) {
                       if (err) {
                          reject({token: "pas reussi à me connecter"});
                       }
                        resolve({response: resp.headers});
                    });
      });


  return (promise1.then(function(result) {
                var res = JSON.stringify(result.response);
                var str = res.substring(311, 655);

                var options = {
                  url: "https://api.bbox.fr/v1.3/media/channels?profil=adsl",
                  headers: {
                                'content-type': 'application/json',
                                'x-token': str
                            },
                  json: true
               };
               return new Promise(function (resolve, reject) {
                          request(options, function (err, resp) {
                             if (err) {
                                return reject({channel_list: "pas reussi à me connecter"});
                             }
                          return resolve({channel_list: resp.body});
                          });
                });
        }));
}
