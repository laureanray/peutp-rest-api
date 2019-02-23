"use strict";
const colors = require("colors");

let app = require("../../bin/www");
let chai = require("chai"),
  chaiHttp = require("chai-http");

const expect = chai.expect;
const User = require("./userModel");
chai.use(chaiHttp);

let data = [];

beforeEach(done => {
  data = {
    name: {
      firstName: "John",
      lastName: "Doe"
    },
    college: "College of Engineering",
    degreeProgram: "BS in Computer Engineering",
    studentNumber: "2000-00000-MN-0",
    email: "johndoe@example.com",
    campus: "Sta. Mesa",
    private: {
      password: "password"
    }
  };

  User.deleteMany({}).then(() => {
    done();
  });
});

describe("USER Component".blue, () => {
  describe("POST /user/signup", () => {
    it("should create user successfully ", done => {
      chai
        .request(app)
        .post("/user/signup")
        .set("content-type", "application/x-www-form-urlencoded")
        .send(data)
        .end((err, res, body) => {
          if (err) {
            done(err);
          } else {
            expect(err).to.be.null;
            expect(res).to.have.status(201);

            User.findOne({ studentNumber: data.studentNumber }, (err, docs) => {
              if (docs.length !== 0) {
                if (docs.studentNumber === data.studentNumber) {
                  done();
                }
              }
              if (err) done(err);
            });
          }
        });
    });

    it("should not allow duplicate user signup ", done => {
      chai
        .request(app)
        .post("/user/signup")
        .set("content-type", "application/x-www-form-urlencoded")
        .send(data)
        .end((err, res, body) => {
          if (err) {
            done(err);
          } else {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            chai
              .request(app)
              .post("/user/signup")
              .set("content-type", "application/x-www-form-urlencoded")
              .send(data)
              .end((err, res, body) => {
                if (err) {
                  done(err);
                } else {
                  expect(err).to.be.null;
                  expect(res).to.have.status(403);
                  done();
                }
              });
          }
        });
    });

    it("should not allow blank student number", done => {
      data.studentNumber = "";
      chai
        .request(app)
        .post("/user/signup")
        .set("content-type", "application/x-www-form-urlencoded")
        .send(data)
        .end((err, res, body) => {
          if (err) {
            done(err);
          } else {
            expect(err).to.be.null;
            expect(res).to.have.status(400);
            done();
          }
        });
    });
  });
});
