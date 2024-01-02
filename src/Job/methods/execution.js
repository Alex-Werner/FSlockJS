/**
 * Allow to await the execution of the job
 * @returns Job
 **/
async function execution(){
  return new Promise((resolve => {
    if(this.state==='executed') return resolve(this);
    this.once('executed', ()=>{
      return resolve(this);
    })
  }))
}

export default execution;
