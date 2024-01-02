import execCommand from './ops/execCommand.js';
/**
 *
 * @param index {default:0} - Specify which index to process
 * @returns {Promise<boolean>}
 */
async function processNext(index=0, tries=0) {
  const self = this;
  return new Promise(async (resolve, reject) => {
    self.state = 'processing';
    if(!self.queue.length){
      return false;
    }
    const job = (index===0) ? self.queue.shift() : self.queue.splice(index,1)[0];
    const {command} = job;

    const {path, params} = job;

    // If there is a lock, we just try to process the next one
    if(self.locks[path]===1){
      // We can't deal with it right now. let's replace the item
      self.queue.splice(index, 0, job);

      if(self.queue.length>index+2){
        return self.processNext(1);
      }else{
        // It's locked. We have to wait. Let's retry in a few
        return await (new Promise(((resolve, reject) => {
          setTimeout(()=>{
            return resolve(self.processNext(0, tries+=1));
          }, 50)
        })));

      }
    }
    self.locks[path] = 1;

    job.state = 'processing';
    job.emit('processing');

    job.error = null;
    job.result = null;

    const executionResult = await execCommand(command,path, params);
    if(executionResult.error){
      job.error = executionResult.error
    }else {
      job.result = executionResult.result;
    }
    job.state = 'executed';
    job.emit('executed');
    this.state = 'idle';

    delete self.locks[path];
    return resolve(true);
  })
};

export default processNext;
