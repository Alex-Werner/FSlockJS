const File = require('../../../File/File');
const Directory = require('../../../Directory/Directory');

const utils = {File, Directory}
module.exports = async function execCommand(command, path, params){
  let result;
  try{
    const [type,fn] = command.split('.');
    result = await utils[type][fn](path, params);
  } catch(err){
    result = err;
  }
  return result;
}
