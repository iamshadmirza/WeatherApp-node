const request = require('supertest');
const app = require('./server').app;

it('should return Hello Express response', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect('Hello Express!!')
        .end(done);
});