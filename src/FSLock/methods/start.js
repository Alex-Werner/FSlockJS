function start() {
  const self = this;
  if (!this.autoExecStarted) this.autoExecStarted = true;

  const continuouslyExecute = () => {
    if (self.state === 'processingAll') {
      return;
    }
    self.processAll()
        .then(() => {
          if (self.autoExecStarted) {
            setTimeout(() => {
              continuouslyExecute();
            }, 20)
          }
        })
  }
  continuouslyExecute();
}

export default start;
