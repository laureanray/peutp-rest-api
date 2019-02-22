'use strict';
const colors = require('colors');

let app = require('../../bin/www');
let chai = require('chai'), chaiHttp = require('chai-http');

const expect = chai.expect;
const User = require('./userModel');
chai.use(chaiHttp);

beforeEach( done => {
    User.remove({}).then(() => {
      done();
    });
});

describe('USER Component', () => {
  describe('POST /user/signup', () => {
    const data = {
      name: {
        firstName: 'John',
        lastName: 'Doe'
      },
      studentNumber: '2000-00000-MN-0',
      email: 'johndoe@example.com'
    };
    it('should create user successfully ', done => {
      chai
        .request(app)
        .post('/user/signup')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send(data)
        .end((err, res, body) => {
          if (err) {
            done(err);
          } else {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            done();
          }
        });

      it('should not allow duplicate user signup ', done => {
        chai
          .request(app)
          .post('/user/signup')
          .set('content-type', 'application/x-www-form-urlencoded')
          .send(data)
          .end((err, res, body) => {
            if (err) {
              done(err);
            } else {
              expect(err).to.be.null;
              expect(res).to.have.status(201);
              done();
            }
          });
      });
    });
  });
});