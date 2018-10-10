import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/sku', () => {

  it('responds with JSON array', () => {
    return chai.request(app).get('/api/v1/sku')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.length(1);
      });
  });

  it('should include sku0001', () => {
    return chai.request(app).get('/api/v1/sku')
      .then(res => {
        let sku0001 = res.body.find(sku => sku.sku === 'sku0001');
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

  describe('GET api/v1/sku/:id', () => {

    it('responds with single JSON object', () => {
      return chai.request(app).get('/api/v1/sku/sku0001')
        .then(res => {
          expect(res.status).to.equal(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
        });
    });
  
    it('should return sku0001', () => {
      return chai.request(app).get('/api/v1/sku/sku0001')
        .then(res => {
          expect(res.body.sku.sku).to.equal('sku0001');
        });
    });
  
  });

});