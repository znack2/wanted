import request              from 'supertest'
import expect               from 'expect'
// import app                  from '../../app.js'
// import api                  from '../..'




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


