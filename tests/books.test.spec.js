import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Book', () => {
  describe('GET /', async () => {
    it('it should get books response', async () => {
      const books = await chai.request(server).get('/books');
      expect(books).to.have.status(200);
      expect(books).to.be.a('object');
    });
  });
});
