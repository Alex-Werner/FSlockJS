const EventEmitter = require('events');
class Job extends EventEmitter {
  constructor(props = {}){
    super()
    if(!props.command || !props.path){
      throw new Error('Unexpected new job properties');
    }
    this.command = props.command;
    this.path = props.path;
    this.params = props.params || null;
    this.state = 'idle';
    this.results = null;
  }
}
Job.prototype.execution = require('./methods/execution');
Job.prototype.getResults = require('./methods/getResults');
module.exports = Job;
