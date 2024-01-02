import add from './methods/add.js';
import get from './methods/get.js';
import processNext from './methods/processNext.js';
import processAll from './methods/processAll.js';
import start from './methods/start.js';
import stop from './methods/stop.js';

/**
 * FSQueue
 *
 * Simple Queue system that deals with FS.
 *
 * Ideally, we should have way to add to the
 *
 */
class FSLock {
    constructor(props = {}) {
        const defaultProps = {
            options: {
                autoexec: true,
                concurrency: null,//Infinite concurrent processes
                timeout: 5000 //MS wait for execution
            }
        }
        this.queue = [];
        this.locks = {};
        this.options = {
            autoexec: (props.autoexec !== undefined) ? props.autoexec : defaultProps.options.autoexec
        };
        this.state = 'idle';
        this.autoExecStarted = false;

        if (this.options.autoexec) {
            this.start();
        }
    }
};

// Elements added to the queue will then need to be executed with manually except if autoexec
// Return a job
FSLock.prototype.add = add;
FSLock.prototype.get = get;
FSLock.prototype.processNext = processNext;
FSLock.prototype.processAll = processAll;
FSLock.prototype.start = start;
FSLock.prototype.stop = stop;

// Remove last job in queue
// FSQueue.prototype.pop = require('./methods/pop');

// Get position of job in queue
// FSQueue.prototype.indexOf = require('./methods/indexOf');

// Try to execute a passed job in first
// FSQueue.prototype.exec = require('./methods/exec');

export default FSLock;
