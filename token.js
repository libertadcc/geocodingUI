import { ApplicationCredentialsManager } from 'https://cdn.skypack.dev/@esri/arcgis-rest-request@4.0.0';
const session = new ApplicationCredentialsManager({
  clientId: 'sEra8rqwIYdJ8Abw',
  clientSecret: '751d86c0abcf46ffb33df6f610732554',
  duration: 1440
});

let token;
session.getToken("https://www.arcgis.com/sharing/rest/oauth2/token")
  .then(function (response) {
    token = response;
    console.log( token)
  }).catch(function (error) {
    console.log('error', error)
  });
export default token