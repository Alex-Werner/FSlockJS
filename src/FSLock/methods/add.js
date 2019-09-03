const Job = require('../../Job/Job');
module.exports =  function add(command, path, params){
    const job = new Job({command, path, params});
    this.queue.push(job);
    job.state = 'queued';
    return job;
}
