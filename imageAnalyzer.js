'use strict';
const request = require('request');
let subscriptionKey = '5d9c6fbb709f45339d098c85f75632d4';
let endpoint = 'https://imganalyzer-comp-vision.cognitiveservices.azure.com/';
var uriBase = endpoint + 'vision/v3.1/analyze';
const imageUrl =
'https://www.aljazeera.com/wp-content/uploads/2022/06/2022-06-10T214503Z_1632582171_RC26PU9WZA6J_RTRMADP_3_AMERICAS-SUMMIT.jpg';
// Request parameters.
const params = {
'visualFeatures': 'Categories,Description,Color,Tags,Brands,Faces,Adult,ImageType',
'details': '',
'language': 'en'
};
const options = {
uri: uriBase,
qs: params,
body: '{"url": ' + '"' + imageUrl + '"}',
headers: {
'Content-Type': 'application/json',
'Ocp-Apim-Subscription-Key' : subscriptionKey
}
};
request.post(options, (error, response, body) => {
if (error) {
console.log('Error: ', error);
return;
}
let jsonResponse = JSON.stringify(JSON.parse(body), null, ' ');
console.log('JSON Response\n');
console.log(jsonResponse);
});