import fs from 'fs';

async function remove(p) {
  return new Promise((res, rej) => {
    fs.unlink(p, (err) => {
      if (err) rej(err);
      res(true);
    });
  });
}

export default remove;
