const Lab = require('lab');
const lab = exports.lab = Lab.script();
const should = require('chai').should();
const sinon = require('sinon');
const AWS = require('aws-sdk-mock');
const _aws = require('aws-sdk');

lab.experiment('dynamo', function() {

  const dynamo = require('../lib/dynamo');
  lab.experiment('pointless', () => {

    lab.beforeEach(done => {
      AWS.mock('DynamoDB', 'putItem', function(params, done) {
        console.log('in mock');
        return done();
      });
      return done();
    });

    lab.afterEach(done => {
      AWS.restore('DynamoDB');
      return done();
    });

    lab.test('should put data to dynamo', (done) => {
      console.log(_aws.DynamoDB.isSinonProxy)
      dynamo.putSomething((err) => {
        console.log('back from put something');
        //_aws.DynamoDB.putItem.calledOnce.should.be.true
        return done();
      });
    });
  });
});
