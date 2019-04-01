const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');

describe('Server', () => {
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

    it('should include success msg', (done) => {
        request(app)
            .get('/about')
            .expect(200)
            .expect((res) => {
                expect(res.body).toMatchObject({
                    pageTitle: 'About Page',
                    welcomeMessage: 'Welcome to about us page'
                });
            })
            .end(done);
    });
});