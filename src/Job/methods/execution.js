/**
 * Allow to await the execution of the job
 * @returns Job
 **/
module.exports = async function execution(){
  return new Promise((resolve => {
    if(this.state==='executed') return resolve(this);
    this.on('executed', ()=>{
      return resolve(this);
    })
  }))
}
