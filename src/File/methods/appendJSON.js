module.exports = async function append(p, data = {}) {
  const self = this;

  return new Promise(async (resolve, reject) => {
    let json = {};
    if (await this.exists(p)) {
      json = await this.read(p);
    }
    const res = await this.create(p, Object.assign({}, json, data));
    resolve(res)
  });
}
