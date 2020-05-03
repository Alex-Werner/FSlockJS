class CannotReadFileNotFound extends Error {
  constructor(...params) {
    super(...params);
  }
};
module.exports = CannotReadFileNotFound;
