class CannotReadFileNotFound extends Error {
  constructor(...params) {
    super();
    this.code = 'ENOENT';
    this.errno = -2;
    this.syscall = 'open';
    this.path = params[0] || "Unknown path";
    this.message = `ENOENT: no such file or directory, open '${this.path}'`;
  }
};

export default CannotReadFileNotFound;
