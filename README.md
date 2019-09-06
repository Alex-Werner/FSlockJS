# FSLockJS

[![NPM Version](https://img.shields.io/npm/v/fslockjs.svg?&style=flat-square)](https://www.npmjs.org/package/fslockjs)
[![Build Status](https://api.travis-ci.org/Alex-Werner/fslockjs.svg?branch=master)](https://travis-ci.com/Alex-Werner/fslockjs)


> Easy to use file system queue with locking and events.
> Provide Asynchronous utilities for Directories and File

This library's goal is to provide nothing than a easy way to wait for the asynchronous execution of a FS operation in a lock environment.

### Table of Contents
 - [Installation](#installation)
 - [Usage](#usage)
 - [Documentation](#documentation)
    - [Events](/docs/events.md)
    - [FSLock API](/docs/FSLock.md)
    - [Directory API](/docs/Directory.md)
    - [File API](/docs/File.md)
    - [Job API](/docs/Job.md)
 - [FAQ](#faq)
 
 
## Installation 

`npm install fslock`

## Usage

```$xslt
mkdir myproject
cd myproject
npm init
npm install fslock
touch index.js
```
 
And there just use that snipets to start playing ! : 


```js
const {FSLock, File, Directory} = require('fslockjs');
const queue = new FSLock();

const start = async function () {
  const doc = {_id:'507f1f77bcf86cd799439011',name:"Alex", age:28};
  const doc2 = {_id:'507f1f77bcf86cd799439011',name:"Alex", age:27};
  const job = queue.add('File.create','.db/507f1f77bcf86cd799439011.json',doc);
  const job2 = queue.add('File.overwrite','.db/507f1f77bcf86cd799439011.json',doc2);
  const job3 = queue.add('File.read','.db/507f1f77bcf86cd799439011.json');

  await job3.execution();
  console.log(job3.results===doc2) //true
  
  const isExisting = await File.exists('.db/507f1f77bcf86cd799439011.json')//true
}
start();
```

Alternatively, you could suppress the autoexec, and deal with it this way 

```js
  const queue = new FSLock({autoexec:false});
  const doc = {_id:'507f1f77bcf86cd799439011',name:"Alex", age:28};
  queue.add('File.create','.db/507f1f77bcf86cd799439011.json',doc);
  const job = queue.add('File.read','.db/507f1f77bcf86cd799439011.json');

  await queue.processNext();
  await queue.processNext();
  console.log(job.results===doc) //true
```

Also, we provide events on job 

```js
  const queue = new FSLock({autoexec:false});
  const doc = {_id:'507f1f77bcf86cd799439011',name:"Alex", age:28};
  queue.add('File.create','.db/507f1f77bcf86cd799439011.json',doc);
  const job = queue.add('File.read','.db/507f1f77bcf86cd799439011.json');
  job.on('executed',()=>{
    console.log(job.results);
    console.log(job.results===doc) //true
  });
  queue.start();
```


## Documentation 
- [Events](/docs/events.md)
- [FSLock API](/docs/FSLock.md)
- [Directory API](/docs/Directory.md)
- [File API](/docs/File.md)

## FAQ : 

### Why ? 

Because of being able to do `await job.execution()`

Which end up being a nice way to wait for the resolvement of a FS Job in concurrent conditions

```js
const job = await this.queue.add('File.exists', path).execution(); 
const isExistingFile = job.results;
```

Alternatively equal to this below, that will only returns results when having it. 

```js
const results = await this.queue.add('File.exists', path).getResults(); 
```

### Caveat ? 

Right now, an instance of FSLock only deal locally with the locks. If needed, we can make two instance working together with using real os lock.   
Submit issue if you need such features.
