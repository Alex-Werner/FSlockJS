const FSLock = require('../src/FSLock/FSLock');
const queue = new FSLock({
  autoexec: true
});

(async () => {
  // Will auto-process this as autoexec is true.
  const createDirJob = queue.add('Directory.create', './myfolder');

  const createFileJob = queue.add('File.create', './myfolder/myfile.json', {something: true});
  await createFileJob.execution();
  const file = await queue.add('File.read', './myfolder/myfile.json').execution();
  console.log({storedFile: file.result});

  // Needed in order to release pending intervals
  await queue.stop();
})()
