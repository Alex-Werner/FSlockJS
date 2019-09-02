## Job API

#### execution()

Allow to wait to execution of a task.

```js
    const job = new Job({command, path, params});
    setTimeout(()=>{
      job.emit('executed');
    },500)
    await job.execution();
    console.log('500ms later. Do other stuff')
```
