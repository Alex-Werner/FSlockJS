/**
 * Wait for the execution to return the results
 **/
module.exports = async function getResults(){
  return new Promise((resolve => {
    if(this.state==='executed') return resolve(this.results);
    this.on('executed', ()=>{
      return resolve(this.results);
    })
  }))
}
