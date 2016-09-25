'use strict';
console.log('requiring aws-sdk');
var AWS = require('aws-sdk');

module.exports = {
  putSomething: (cb) => {
    var dynamo = new AWS.DynamoDB();
    console.log('I will put something to dynamodb');
    dynamo.putItem({
      TableName: 'bob',
      Item: {
        'Name': {
          S: 'charlie'
        }
      }
    }, cb);
  }
}