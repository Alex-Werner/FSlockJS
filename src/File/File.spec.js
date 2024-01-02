import { expect } from 'chai';
import File from '../../src/File/File.js';
import Directory from '../../src/Directory/Directory.js';

describe('File', () => {
  describe('file', function suite() {
    this.timeout(15000);

    it('should get if a file exists', async () => {
      const exist = await File.exists(`./fixtures/dir-b/file-b.md`);
      expect(exist).to.be.deep.equal(true);

      const notexist = await File.exists(`./fixtures/dir-b/file-not-exist.txt`);
      expect(notexist).to.be.deep.equal(false);
    });
    it('should create a file', async () => {
      const ensuredPath = `.fs.tests-file.to.del.txt`;

      const verifNotExist = await File.exists(ensuredPath);
      expect(verifNotExist).to.be.equal(false);

      const created = await File.create(ensuredPath);
      expect(created).to.be.equal(true);

      const verifExist = await File.exists(ensuredPath);
      expect(verifExist).to.be.equal(true);
    });
    it('should ensure a file', async () => {
      const ensuredPath = `.fs.tests-file/file-1.txt`;

      const verifNotExist = await File.exists(ensuredPath);
      expect(verifNotExist).to.be.equal(false);

      const ensured = await File.ensure(ensuredPath);
      expect(ensured).to.be.equal(true);

      const verifExist = await File.exists(ensuredPath);
      expect(verifExist).to.be.equal(true);
    });
    it('should remove a file', async () => {
      const deletePath = `.fs.tests-file.to.del.txt`;

      const verifExist = await File.exists(deletePath);
      expect(verifExist).to.be.equal(true);

      const deleted = await File.remove(deletePath);
      expect(deleted).to.be.equal(true);

      const verifNotExist = await File.exists(deletePath);
      expect(verifNotExist).to.be.equal(false);
    });
    it('should read a file', async () => {
      const readPath = `./fixtures/readTest.json`;
      const data = await File.read(readPath);
      expect(data).to.be.an('object');
      expect(data.tables).to.be.an('array');
      expect(data.tables[0].url).to.be.equal('http://www.w3.org/2013/csvw/tests/test001.csv');
    });

    it('should handle edges cases', async () => {

    });

    after('clean up mess', async () => {
      const ensuredPath = `./.fs.tests-file/file-1.txt`;

      await File.remove(ensuredPath);

      await Directory.remove(`./.fs.tests-file`);
    });
  });
});
