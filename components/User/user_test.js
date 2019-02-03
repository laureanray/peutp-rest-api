const assert = require('assert');
let app = require('../../index');
var chai = require('chai'), chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);



describe('USER Component', () => {
    describe('GET /user', () => {
        it('should respond', (done) => {
            chai.request(app)
                .get('/user')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                });
         
        });
    });
});