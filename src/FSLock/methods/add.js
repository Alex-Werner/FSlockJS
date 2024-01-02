import Job from '../../Job/Job.js';

function add(command, path, params){
    const job = new Job({command, path, params});
    this.queue.push(job);
    job.state = 'queued';
    return job;
}

export default add;
