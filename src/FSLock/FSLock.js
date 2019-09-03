/**
 * FSQueue
 *
 * Simple Queue system that deals with FS.
 *
 * Ideally, we should have way to add to the
 *
 */
class FSLock{
  constructor(props = {}){
    const defaultProps = {
      options:{
        autoexec:true,
        concurrency: null,//Infinite concurrent processes
        timeout: 5000 //MS wait for execution
      }
    }
    this.queue = [];
    this.locks = {};
    this.options = {
      autoexec: (props.autoexec!==undefined) ? props.autoexec : defaultProps.options.autoexec
    };
    this.state = 'idle';
    this.autoExecStarted = false;

    if(this.options.autoexec){
      this.start();
    }
  }
};
// Elements added to the queue will then need to be executed with manually except if autoexec
// Return a job
FSLock.prototype.add = require('./methods/add');
FSLock.prototype.get = require('./methods/get');
FSLock.prototype.processNext = require('./methods/processNext');
FSLock.prototype.processAll = require('./methods/processAll');
FSLock.prototype.start = require('./methods/start');
FSLock.prototype.stop = require('./methods/stop');

// Remove last job in queue
// FSQueue.prototype.pop = require('./methods/pop');

// Get position of job in queue
// FSQueue.prototype.indexOf = require('./methods/indexOf');

// Try to execute a passed job in first
// FSQueue.prototype.exec = require('./methods/exec');
module.exports = FSLock;
