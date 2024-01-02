import path from 'path';
import Directory from '../../Directory/Directory.js';

async function ensure(p, data = '') {
  const exist = await this.exists(p);
  if (!exist) {
    await Directory.ensure(path.dirname(p));
    await this.create(p, data);
    return this.ensure(p, data);
  }
  return exist;
}

export default ensure;
