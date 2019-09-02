const { expect } = require('chai');
const Directory = require('../../src/Directory/Directory');
const File = require('../../src/File/File');

describe('File - download', function suite() {
  this.timeout(15000);

  it('should download a file', async () => {
    const uri = 'http://w3c.github.io/csvw/tests/test001.json';
    const validPath = `./tests/fixtures/readTest.json`;
    const validData = await File.read(validPath);
    const outputFile = `.fs.tests-file/writeTest.json`;

    const data = await File.download(uri);
    expect((JSON.parse(data))).to.deep.equal(validData);

    const store = await File.download(uri, outputFile);
    expect(store).to.be.equal('.fs.tests-file/writeTest.json');
    const exist = await File.exists(outputFile);
    expect(exist).to.be.equal(true);
    const read = await File.read(outputFile);
    expect(((read))).to.deep.equal(validData);
  });

  after('clean up mess', async () => {
    const outputFile = `.fs.tests-file`;
    await Directory.remove(outputFile);
  });
});
