const {map} = require('lodash');

const next = async (self)=>{
  if(self.options.autoexec && !self.autoExecStarted){
    return;
  }
  await self.processNext()
}
const processQueue = async (self)=>{
  if(self.queue.length>0){
    await next(self);
    await processQueue(self);
  }
}

module.exports = async function processAll() {
  this.state = 'processingAll';
  const self = this;
  if (this.queue.length === 0) return;
  await processQueue(self);
  this.state = 'idle';
};
