const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');

it('should return Hello Express response', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect('Hello Express!!')
        .end(done);
});

it('should include error log', (done) => {
    request(app)
        .get('/new')
        .expect(404)
        .expect((res) => {
            expect(res.body).toMatchObject({
                error: 'Page not found'
            });
        })
        .end(done);
});