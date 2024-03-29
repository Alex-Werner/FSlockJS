import fs from 'fs';
import path from 'path';
import Directory from '../../Directory/Directory.js';

function stringify(obj, options) {
  let spaces;
  let EOL = '\n';
  if (typeof options === 'object' && options !== null) {
    if (options.spaces) {
      spaces = options;
    }
    if (options.EOL) {
      EOL = options;
    }
  }
  const str = JSON.stringify(obj, options ? options.replacer : null, spaces);
  return str.replace(/\n/g, EOL) + EOL;
}

async function create(p, data = '') {
  const self = this;

  return new Promise(async (res, rej) => {
    await Directory.ensure(path.dirname(p));
    const exist = await this.exists(p);
    const write = (resolver, lock) => {
      fs.writeFile(p, stringify(data), (err) => {
        // if (lock) lock.release();
        // else console.log('no lock?')
        if (err) return (err);
        resolver(true);
      });
    };

    if (exist) {
      // const lock = await slocket(p);
      try {
        write(res, /*lock*/);
      } catch (e) {
        rej(e);
        throw e;

      }
    } else write(res);
  })
}

export default create;
