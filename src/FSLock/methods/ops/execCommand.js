import File from '../../../File/File.js';
import Directory from '../../../Directory/Directory.js';

const utils = {File, Directory}
async function execCommand(command, path, params){
  let result, error;
  try{
    const [type,fn] = command.split('.');
    if(!utils[type]){
      throw new Error(`Not handled type ${type} - Expected one of ${Object.keys(utils)}`)
    }
    if(!utils[type][fn]){
      throw new Error(`Not handled method ${type}.${fn} - Expected one of ${Object.keys(utils[type])}`)
    }
    result = await utils[type][fn](path, params);
  } catch(e){
    error = e;
  }
  return {result, error};
}

export default execCommand;
