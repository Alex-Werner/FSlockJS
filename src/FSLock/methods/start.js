module.exports = function start() {
  const self = this;
  if (!this.autoExecStarted) this.autoExecStarted = true;

  const continuouslyExecute = () => {

    self.processAll()
        .then(() => {
          if (self.autoExecStarted) {
            setTimeout(() => {
               continuouslyExecute();
            }, 50)
          }
        })
  }
   continuouslyExecute();
}
