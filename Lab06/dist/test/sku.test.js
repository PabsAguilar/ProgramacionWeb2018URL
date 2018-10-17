"use strict";
var chai = require('chai');
var chaiHttp = require('chai-http');
var App_1 = require('../src/App');
chai.use(chaiHttp);
var expect = chai.expect;
describe('GET api/v1/sku', function () {
    it('responds with JSON array', function () {
        return chai.request(App_1["default"]).get('/api/v1/sku')
            .then(function (res) {
            expect(res.status).to.equal(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.length(1);
        });
    });
    it('should include sku0001', function () {
        return chai.request(App_1["default"]).get('/api/v1/sku')
            .then(function (res) {
            var sku0001 = res.body.find(function (sku) { return sku.sku === 'sku0001'; });
            expect(sku0001).to.exist;
            expect(sku0001).to.have.all.keys([
                'sku',
                'description',
                'family',
                'image',
                'createDate'
            ]);
        });
    });
    describe('GET api/v1/sku/:id', function () {
        it('responds with single JSON object', function () {
            return chai.request(App_1["default"]).get('/api/v1/sku/sku0001')
                .then(function (res) {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
            });
        });
        it('should return sku0001', function () {
            return chai.request(App_1["default"]).get('/api/v1/sku/sku0001')
                .then(function (res) {
                expect(res.body.sku.sku).to.equal('sku0001');
            });
        });
    });
    describe('POST api/v1/sku', function () {
        it('responds with single JSON object', function () {
            return chai.request(App_1["default"]).post('/api/v1/sku')
                .then(function (res) {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
            });
        });
        // it('should return sku0001', () => {
        //   return chai.request(app).get('/api/v1/sku/sku0001')
        //     .then(res => {
        //       expect(res.body.sku.sku).to.equal('sku0001');
        //     });
        // });
    });
});
