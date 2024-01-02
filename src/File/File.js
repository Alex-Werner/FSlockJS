const File = {};

import append from "./methods/append.js";
import appendJSON from "./methods/appendJSON.js";
import create from "./methods/create.js";
import download from "./methods/download.js";
import exists from "./methods/exists.js";
import ensure from "./methods/ensure.js";
import read from "./methods/read.js";
import remove from "./methods/remove.js";

File.append = append.bind(File);
File.appendJSON = appendJSON.bind(File);
File.create = create.bind(File);
File.download = download.bind(File);
File.exists = exists.bind(File);
File.ensure = ensure.bind(File);
File.read = read.bind(File);
File.remove = remove.bind(File);


export default File;
