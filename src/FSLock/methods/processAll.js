const {map} = require('lodash');
module.exports = async function processAll() {
  this.state = 'processingAll';
  const self = this;
  if (this.queue.length === 0) return;
  await Promise.all(map(this.queue, async () => {
    if(this.options.autoexec && !this.autoExecStarted){
      return;
    }
    await self.processNext()
  }));
  this.state = 'idle';
};
