module.exports = function stop() {
  if(this.state=='idle' || !this.autoExecStarted) return false;
  this.autoExecStarted = false;
}
