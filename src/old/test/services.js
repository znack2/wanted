//TODO: test services

var should = require('should');
var assert = require('assert');
var request = require('supertest');
var dbutils = require('../lib/dbutils.js');
var newsFlash6id;


/*

Subscriptions look like this in JSON

  {
    "eventTitle": "New CLM Build Available",
    "alertEndpoint": "sonipandey.71@gmail.com",
    "_id": "521a5af259b05b8099000002"
  }

*/



describe('Routing', function() {
  var url = 'http://localhost:8000';
  before(function(done) {
      dbutils.cleardb(function(){done();});
  });

  /** Create tests */
  describe('Subscription', function() {
    it('should successfully create a new subscription', function(done) {
      var profile = {
        eventTitle: 'News flash 6',
        alertEndpoint:'sonipandey.71@gmail.com'
      };
      request(url)
      	.post('/subscriptions')
      	.send(profile)
      	.end(function(err, res) {
          if (err) {
            throw err;
          }
          res.should.have.status(200);
          done();
        });
    });

    it('should successfully create another new subscription', function(done) {
      var profile = {
        eventTitle: 'News flash 7',
        alertEndpoint:'sonipandey.71@gmail.com'
      };
      request(url)
      	.post('/subscriptions')
      	.send(profile)
      	.end(function(err, res) {
            if (err) {
              throw err;
            }
            res.should.have.status(200);
            done();
        });
    });

    it('should successfully create even another new subscription', function(done) {
      var profile = {
        eventTitle: 'News flash 8',
        alertEndpoint:'sonipandey.71@gmail.com'
      };
      request(url)
      	.post('/subscriptions')
      	.send(profile)
      	.end(function(err, res) {
          if (err) {
            throw err;
          }
          res.should.have.status(200);
          done();
        });
    });

    /** Read tests */
    it('should return three subscriptions', function(done) {
      request(url)
      	.get('/subscriptions')
      	.end(function(err, res) {
          if (err) {
            throw err;
          }
          res.should.have.status(200);
          res.body.should.have.lengthOf(3);
          subsArray = JSON.parse(res.text);
          assert.equal(subsArray[0].eventTitle, 'News flash 6');
          assert.equal(subsArray[0].alertEndpoint, 'sonipandey.71@gmail.com');
          assert.equal(subsArray[1].eventTitle, 'News flash 7');
          assert.equal(subsArray[1].alertEndpoint, 'sonipandey.71@gmail.com');
          assert.equal(subsArray[2].eventTitle, 'News flash 8');
          assert.equal(subsArray[2].alertEndpoint, 'sonipandey.71@gmail.com');

          newsFlash6id = subsArray[0]._id;
          done();
        });
    });

    it('should return news flash 6 subscription', function(done) {
      request(url)
      	.get('/subscriptions/'+ newsFlash6id)
      	.end(function(err, res) {
          if (err) {
            throw err;
          }
          res.should.have.status(200);
          res.body.should.have.property('eventTitle');
          res.body.eventTitle.should.equal('News flash 6');
          res.body.alertEndpoint.should.equal('sonipandey.71@gmail.com');
          done();
        });
    });

    /** Update Tests */

    it('should successfully update a specific subscription', function(done) {
      var profile = {
        eventTitle: 'News flash 8',
        alertEndpoint: 'sonipandey.71@gmail.com'
      };
      request(url)
      	.put('/subscriptions/'+ newsFlash6id)
      	.send(profile)
      	.end(function(err, res) {
          if (err) {
            throw err;
          }
          res.should.have.status(200);
          done();
        });
    });

    it('should verify revised News flash 6 subscription', function(done) {
      request(url)
    	.get('/subscriptions/'+ newsFlash6id)
    	.end(function(err, res) {
          if (err) {
            throw err;
          }
          res.should.have.status(200);
          res.body.should.have.property('eventTitle');
          res.body.should.have.property('alertEndpoint');
          res.body.eventTitle.should.equal('News flash 8');
          res.body.alertEndpoint.should.equal('kjoewill@phonyemail.com');
          done();
        });
    });

    /** Delete tests */
    it('should delete revised News flash 6 subscription', function(done) {
      request(url)
      	.del('/subscriptions/'+ newsFlash6id)
      	.end(function(err, res) {
          if (err) {
            throw err;
          }
          res.should.have.status(200);
          done();
        });
    });

    it('should now return two not-deleted subscriptions', function(done) {
      request(url)
      	.get('/subscriptions')
      	.end(function(err, res) {
          if (err) {
            throw err;
          }
          res.should.have.status(200);
          res.body.should.have.lengthOf(2);
          subsArray = JSON.parse(res.text);
          assert.equal(subsArray[0].eventTitle, 'News flash 7');
          assert.equal(subsArray[0].alertEndpoint, 'sonipandey.71@gmail.com');
          assert.equal(subsArray[1].eventTitle, 'News flash 8');
          assert.equal(subsArray[1].alertEndpoint, 'sonipandey.71@gmail.com');
          done();
        });
    });
  });
});


/** Test cases for events api*/
describe('Routing', function() {
  var url = 'http://localhost:8000';
  before(function(done) {
      dbutils.cleardb(function(){done();});
    });

  /** Create tests */
  describe('Event', function() {
    it('should successfully create a new event', function(done) {
      var profile = {
        title: 'News flash 6'
      };
      request(url)
  	   .post('/events')
  	   .send(profile)
  	   .end(function(err, res) {
          if (err) {
            throw err;
          }
          res.should.have.status(200);
          done();
        });
    });

    it('should successfully create another new event', function(done) {
      var profile = {
        title: 'News flash 7'
      };
      request(url)
  	   .post('/events')
  	   .send(profile)
  	   .end(function(err, res) {
          if (err) {
            throw err;
          }
            res.should.have.status(200);
            done();
        });
    });

    it('should successfully create even another new event', function(done) {
      var profile = {
        title: 'News flash 8'
      };
      request(url)
  	   .post('/events')
  	   .send(profile)
  	   .end(function(err, res) {
          if (err) {
            throw err;
          }
            res.should.have.status(200);
            done();
        });
    });

    /** Read tests */
    it('should return three events', function(done) {
      request(url)
  	   .get('/events')
  	   .end(function(err, res) {
          if (err) {
            throw err;
          }
          res.should.have.status(200);
          res.body.should.have.lengthOf(3);
          eventsArray = JSON.parse(res.text);
          assert.equal(eventsArray[0].title, 'News flash 6');
          assert.equal(eventsArray[1].title, 'News flash 7');
          assert.equal(eventsArray[2].title, 'News flash 8');
          newsFlash6id = eventsArray[0]._id;
          done();
        });
    });

    it('should return news flash 6 event', function(done) {
      request(url)
    	.get('/events/'+ newsFlash6id)
    	.end(function(err, res) {
        if (err) {
          throw err;
        }
        res.should.have.status(200);
        res.body.should.have.property('title');
        res.body.title.should.equal('News flash 6');
        done();
      });
    });

    /** Update Tests */

    it('should successfully update a specific event', function(done) {
      var profile = {
        title: 'News flash 6 - revised'
      };
      request(url)
	     .put('/events/'+ newsFlash6id)
	     .send(profile)
	     .end(function(err, res) {
          if (err) {
            throw err;
          }
          res.should.have.status(200);
          done();
        });
    });

    it('should verify revised News flash 6 event', function(done) {
      request(url)
  	   .get('/events/'+ newsFlash6id)
  	   .end(function(err, res) {
          if (err) {
            throw err;
          }
          res.should.have.status(200);
          res.body.should.have.property('title');
          res.body.title.should.equal('News flash 6 - revised');
          done();
        });
    });

    /** Delete tests */
    it('should delete revised News flash 6 event', function(done) {
      request(url)
      	.del('/events/'+ newsFlash6id)
      	.end(function(err, res) {
          if (err) {
            throw err;
          }
          res.should.have.status(200);
          done();
        );
    });

    it('should now return two events', function(done) {
      request(url)
      	.get('/events')
      	.end(function(err, res) {
          if (err) {
            throw err;
          }
          res.should.have.status(200);
          res.body.should.have.lengthOf(2);
          eventsArray = JSON.parse(res.text);
          assert.equal(eventsArray[0].title, 'News flash 7');
          assert.equal(eventsArray[1].title, 'News flash 8');
          done();
        });
    });

  });
});


describe('Routing', function() {
 var url = 'http://localhost:8000';

 before(function(done) {
   dbutils.cleardb(function(){done();});
 });


 /** Create tests */
 describe('Signals', function() {
   it('should successfully create a new event', function(done) {
     var profile = {
       title: 'News flash 100'
     };
     request(url)
       .post('/events')
       .send(profile)
       .end(function(err, res) {
           if (err) {
             throw err;
           }
           res.should.have.status(200);
           done();
       });
   });

   it('should successfully create another new event', function(done) {
     var profile = {
       title: 'News flash 101'
     };
     request(url)
       .post('/events')
       .send(profile)
       .end(function(err, res) {
         if (err) {
           throw err;
         }
         res.should.have.status(200);
         done();
       });
   });

   it('should successfully create even another new event', function(done) {
     var profile = {
       title: 'News flash 102'
     };
   request(url)
     .post('/events')
     .send(profile)
     .end(function(err, res) {
       if (err) {
         throw err;
       }
       res.should.have.status(200);
       done();
     });
   });

   /** Create subscriptions */

   it('should successfully create a new subscription', function(done) {
     var profile = {
       eventTitle: 'News flash 100',
       alertEndpoint:'kjoewill@gmail.com'
     };
     request(url)
       .post('/subscriptions')
       .send(profile)
       .end(function(err, res) {
         if (err) {
           throw err;
         }
         res.should.have.status(200);
         done();
       });
   });

   it('should successfully create another new subscription', function(done) {
     var profile = {
       eventTitle: 'News flash 100',
       alertEndpoint:'kjwillia@us.ibm.com'
     };
     request(url)
       .post('/subscriptions')
       .send(profile)
       .end(function(err, res) {
         if (err) {
           throw err;
         }
         res.should.have.status(200);
         done();
       });
   });

   it('should successfully create even another new subscription', function(done) {
     var profile = {
       eventTitle: 'News flash 102',
       alertEndpoint:'kjoewill@gmail.com'
     };
     request(url)
       .post('/subscriptions')
       .send(profile)
       .end(function(err, res) {
         if (err) {
           throw err;
         }
         res.should.have.status(200);
         done();
       });
   });



   /** Signal tests */
   it('should signal one event and trigger return two notifications', function(done) {
     var profile = {
       eventTitle: 'News flash 100',
       instancedata: 'An instance of event(News flash 100) has happened'
     };
     request(url)
       .post('/signals')
       .send(profile)
       .end(function(err, res) {
         if (err) {
           throw err;
         }
         res.should.have.status(200);
         res.body.should.have.lengthOf(2);
         eventsArray = JSON.parse(res.text);
         assert.equal(eventsArray[0].alertEndpoint, 'kjoewill@gmail.com');
         assert.equal(eventsArray[0].eventTitle, 'News flash 100');
         assert.equal(eventsArray[1].alertEndpoint, 'kjwillia@us.ibm.com');
         assert.equal(eventsArray[1].eventTitle, 'News flash 100');

         done();
       });
   });

   /** Event signal log tests */
   it('should retreive one log entry', function(done) {
     request(url)
       .get('/signallog')
       .end(function(err, res) {
         if (err) {
           throw err;
         }
         res.should.have.status(200);
         res.body.should.have.lengthOf(1);
         eventsArray = JSON.parse(res.text);
         assert.equal(eventsArray[0].eventTitle, 'News flash 100');
         done();
       });
   });


 });
});
