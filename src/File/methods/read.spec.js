import { expect } from 'chai';
import read from './read.js';
import exists from './exists.js';
import fixtureFile from '../../../fixtures/readTest.json'
import CannotReadFileNotFound from '../../errors/CannotReadFileNotFound.js';
describe('File.read', function(){
  it('should work', async function () {
      const res = await read.call({exists},'./fixtures/readTest.json');
      expect(res).to.deep.equal(fixtureFile);
  });
  it('should handle file that do not exist', async function () {
    try{
      const res = await read.call({exists},'./fixtures/do-not-exist.json');
      expect(res).to.deep.equal(true);
    }catch (e) {
      expect(e.constructor).to.equal(CannotReadFileNotFound);
      expect(e.message).to.equal(`CannotReadFileNotFound({path: ./fixtures/do-not-exist.json}`);
    }
  });
});
