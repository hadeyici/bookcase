import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/app';

const { expect } = chai;

chai.use(chaiHttp);

describe('User', () => {
  describe('GET /', async () => {
    it('it should get users response', async () => {
      const users = await chai.request(server).get('/users');
      expect(users).to.have.status(200);
      expect(users).to.be.a('object');
    });
  });
});
