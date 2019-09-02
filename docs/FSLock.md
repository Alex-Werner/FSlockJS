## FSLock API

```js
const opts = {
      autoexec: true
}
const queue = new FSLock(opts);
```

Options :  

- autoexec : (default : true) - When true, will automatically execute .start()

#### add(command, path, params)

```js
    const job = queue.add('Directory.create','./myfolder');
```

#### get([index = 0]) {

> Will get the next job 

- index : (default:0) - Specify the index to get

```js
    const job = queue.get()
```

#### async processAll()

> Will process all next job except if stopped during processing

```js
   await queue.processAll();
```

#### processNext([index=0]) {

> Will process next job only.

- index : (default:0) - Specify the number of job to skip.

```js
   await queue.processNext();
```

#### start

> Allow to start processing all in continuous

```js
    queue.start()
```

#### stop

> Allow to stop all process, including processing all at it's next tick

```js
    queue.stop();
```
