import create from './methods/create.js';
import exists from './methods/exists.js';
import ensure from './methods/ensure.js';
import list from './methods/list.js';
import remove from './methods/remove.js';

const Directory = {};

Directory.create = create.bind(Directory);
Directory.exists = exists.bind(Directory);
Directory.ensure = ensure.bind(Directory);
Directory.list = list.bind(Directory);
Directory.remove = remove.bind(Directory);
export default Directory;
