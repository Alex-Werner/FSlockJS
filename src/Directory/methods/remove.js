import fs from 'fs';
import path from 'path';

async function remove(p) {
  const files = await this.list(p);
  return new Promise((resolve, reject) => {
    // If there is file, we remove them first
    Promise.all(files.map(async (file) => {
      try {
        const filep = path.join(p, file);
        fs.lstat(filep, (err, stat) => {
          if (stat && stat.isDirectory()) {
            fs.rmdir(filep, async (err) => {
              if (err) {
                if (err.message.slice(0, 30) === 'ENOTEMPTY: directory not empty') {
                  resolve(await this.remove(filep))
                }
                if (err.message.slice(0, 33) === 'ENOENT: no such file or directory') {
                  resolve(true);
                } else {
                  reject(err);
                }
              }
              resolve(true);
            });
          } else {
            fs.unlink(filep, (err) => {
              if (err) reject(err);
              resolve(true);
            });
          }
        })

      } catch (err) {
        reject(err);
        throw err;
      }
    })).then(() => {
      fs.rmdir(p, async (err) => {
        if (err) {
          if (err.message.slice(0, 30) === 'ENOTEMPTY: directory not empty') {
            resolve(await this.remove(p))
          } else {
            if (err.message.slice(0, 33) === 'ENOENT: no such file or directory') {
              resolve(true);
            }
            reject(err);
          }
        }
        resolve(true);
      });
    }).catch((err) => {
      reject(err);
    })
  });
}


export default remove;
