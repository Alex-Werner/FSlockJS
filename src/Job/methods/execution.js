/**
 * Allow to await the execution of the job
 **/
module.exports = async function execution(){
  return new Promise((resolve => {
    if(this.state==='executed') return resolve(true);
    this.on('executed', ()=>{
      return resolve(true);
    })
  }))
}
