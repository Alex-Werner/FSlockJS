import EventEmitter from 'events';
import execution from './methods/execution.js';

class Job extends EventEmitter {
    constructor(props = {}) {
        super()
        if (!props.command || !props.path) {
            throw new Error('Unexpected new job properties');
        }
        this.command = props.command;
        this.path = props.path;
        this.params = props.params || null;
        this.state = 'idle';
        this.result = null;
        this.error = null;
    }
}

Job.prototype.execution = execution;

export default Job;
