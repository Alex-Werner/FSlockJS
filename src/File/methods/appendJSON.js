async function appendJSON(p, data = {}) {
  const self = this;

  return new Promise(async (resolve, reject) => {
    let json = {};
    if (await self.exists(p)) {
      json = await self.read(p);
    }
    const res = await self.create(p, Object.assign({}, json, data));
    resolve(res)
  });
}

export default appendJSON;
