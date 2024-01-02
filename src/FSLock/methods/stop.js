function stop() {
  if(!this.autoExecStarted) return false;
  this.autoExecStarted = false;
}

export default stop;
