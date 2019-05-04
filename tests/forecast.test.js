const request = require('supertest');
const app = require('../server');

test('should fetch new weather forecast', async () => {
    return await request(app).post('/api/v1/forecast/history').send({
        location: 'chennai',
        country: 'india'
    }).expect(200)
})

test('should not fetch for incorrect route path', async () => {
    return await request(app).post('/history').send({
        location: 'chennai',
        country: 'india'
    }).expect(404)
})

test('should not make request for one missing field', async () => {
    return await request(app).post('/api/v1/forecast/history').send({
        location: '',
        country: 'india'
    }).expect(422)
})

test('should not make request for two missing fields', async () => {
    return await request(app).post('/api/v1/forecast/history').send({
        location: '',
        country: ''
    }).expect(422)
})