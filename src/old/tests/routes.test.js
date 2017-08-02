import assert               from 'assert'
import request              from 'supertest'
import should               from 'should'
import { expect }           from 'chai'


// import app                  from '../../server.js'


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});


describe("ClassName", function(){
  describe("MethodName", function() {
    it("Description of the case we are testing", function () {
      expect(true).equal(true);
    });
  });
});











/*
 *  GET
 */
// describe('GET /', function() {
//   it('should return response', (done) => {
//     request(app)
//       .get('/')
//       .expect(404)
//       .expect((res) => {
//         expect(res.body).toInclude({
//           error: 'Page not found.'
//         })
//       })
//       .end(done)
//   })
//
//   it('should return object', (done) => {
//     request(app)
//       .get('/')
//       .expect(200)
//       .expect((res) => {
//         expect(res.body).toInclude({
//           name: 'Andrew',
//           age: 25
//         })
//       })
//       .end(done)
//   })
//
//   it('should respond with users', function(done){
//     var app = api()
//
//     request(app.listen())
//       .get('/users')
//       .end(function(err, res){
//         if (err) return done(err)
//           Object.keys(res.body).should.eql(['tobi', 'loki', 'jane'])
//         done()
//       })
//   })
//
//   it('should respond with users/:id', function(done){
//     var app = api()
//
//     request(app.listen())
//       .get('/users/jane')
//       .end(function(err, res){
//         if (err) return done(err)
//           Object.keys(res.body).should.eql(['name', 'age', 'species'])
//         done()
//       })
//   })
// })
//
// describe('models/index', function () {
//   it('returns the task model', function () {
//     var models = require('../../models')
//     expect(models.Task).to.be.ok()
//   })
//
//   it('returns the user model', function () {
//     var models = require('../../models')
//     expect(models.User).to.be.ok()
//   })
// })
//
//


