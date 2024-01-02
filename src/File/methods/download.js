import url from 'url';
import http from 'http';
import https from 'https';
import fs from 'fs';

async function download(uri, outputPath) {
  return new Promise((res, rej) => {
    let store = true;
    return new Promise(async (resolve, reject) => {
      if (!uri) reject(new Error('Require uri'));
      if (!outputPath) store = false;
      if (store) await this.ensure(outputPath);
      const timeout = 20 * 1000;// 20 seconds timeout (time to get the response)
      const {protocol} = url.parse(uri);
      const req = (protocol === 'https:') ? https : http;

      const URL = (protocol === null) ? `http://${uri}` : uri;

      const request = req.get(URL, (response) => {
        const {statusCode} = response;
        if (statusCode === 200) {
          if (store) {
            const outputFile = fs.createWriteStream(outputPath);
            response.pipe(outputFile);
            outputFile.on('finish', () => {
            });
            outputFile.on('close', () => resolve(outputPath));
          } else {
            let buff;
            response.on('data', (chunk) => {
              buff = (buff === undefined) ? Buffer.from(chunk) : Buffer.concat([buff, chunk]);
            });
            response.on('end', () => resolve(buff));
          }
        } else if (statusCode === 303 || statusCode === 302 || statusCode === 301) {
          // Redirection
          const newURL = response.headers.location;
          // console.log('Redirect to', newURL);
          // throw("Moved to ",newURL)
          return resolve(this.download(newURL, outputPath));
        } else if (statusCode === 404) {
          // throw("Unreachable domain", statusCode);
          return resolve(statusCode);
        } else {
          // throw("Got an statusCode", statusCode);
          return resolve(statusCode);
        }
        return false;
      }).on('error', e => resolve(e)).setTimeout(timeout, () => {
        request.abort();
        // Gateway time-out
        return resolve(504);
      }).end();
    }).then((data)=>{
      return res(data)
    }).catch((err)=>{
      return rej(err);
    });
  });
}

export default download;
