import { expect } from 'chai';
import Directory from './Directory.js';

describe('directory', () => {
  it('should have a valid structure', () => {
    expect(Directory).to.have.property('create');
    expect(Directory).to.have.property('ensure');
    expect(Directory).to.have.property('exists');
    expect(Directory).to.have.property('remove');
    expect(Directory).to.have.property('list');
  });
  it('should list all file of a folder', async () => {
    const listSource = await Directory.list(`./src`);
    const expectedListSource = [
      'Directory',
      'FSLock',
      'File',
      'Job',
     'errors'
    ];
    expect(listSource).to.be.deep.equal(expectedListSource);


    const pathDirNotExist = `./tests/fixtures/dir-not-exist`;
    return Directory
        .list(pathDirNotExist)
        .then(() => {
          throw new Error('Expected an error');
        }).catch((err) => {
          expect(err).to.be.an('Error');
          expect(err.message.slice(0,33)).to.be.equal('ENOENT: no such file or directory');
          return err;
        });
  });
  it('should get if a directory exists', async () => {
    const exist = await Directory.exists(`./fixtures/dir-a`);
    expect(exist).to.be.deep.equal(true);

    const notexist = await Directory.exists(`./fixtures/dir-not-exist`);
    expect(notexist).to.be.deep.equal(false);

    const fileexist = await Directory.exists(`./fixtures/file-a.js`);
    expect(fileexist).to.be.deep.equal(true);
  });
  it('should create a directory', async () => {
    const ensuredPath = `.fs.tests-directory`;

    const verifNotExist = await Directory.exists(ensuredPath);
    expect(verifNotExist).to.be.equal(false);

    const ensured = await Directory.ensure(ensuredPath);
    expect(ensured).to.be.equal(true);

    const verifExist = await Directory.exists(ensuredPath);
    expect(verifExist).to.be.equal(true);
  });
  it('should ensure a directory', async () => {
    const ensuredPath = `.fs.tests-directory/to-del`;

    const verifNotExist = await Directory.exists(ensuredPath);
    expect(verifNotExist).to.be.equal(false);

    const ensured = await Directory.ensure(ensuredPath);
    expect(ensured).to.be.equal(true);

    const verifExist = await Directory.exists(ensuredPath);
    expect(verifExist).to.be.equal(true);
  });
  it('should remove a directory', async () => {
    const path = `.fs.tests-directory/to-del`;
    await Directory.create(path);

    let exist = await Directory.exists(path);
    expect(exist).to.be.equal(true);

    const deleteFile = await Directory.remove(path);
    expect(deleteFile).to.be.equal(true);

    exist = await Directory.exists(path);
    expect(exist).to.be.equal(false);
  });
  it('should handle edges cases', async () => {

  });
  it('should clean up the mess', async () => {

  });
  after('clean up mess', async () => {
    const ensuredPath = `.fs.tests-directory`;

    await Directory.remove(ensuredPath);
  });
});
