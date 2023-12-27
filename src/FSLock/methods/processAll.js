const processQueue = async (self) => {
  if (self.queue.length > 0) {
    await self.processNext();
    // We check if there is other tasks to perform
    await processQueue(self);
  }
};

module.exports = async function processAll() {
  this.state = 'processingAll';
  const self = this;
  if (this.queue.length === 0) {
    this.state = 'idle';
    return;
  }
  if (self.options.autoexec && !self.autoExecStarted) {
    return;
  }
  await processQueue(self);
  this.state = 'idle';
};
