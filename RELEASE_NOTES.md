# 2.0.1 

- impr: improve queue processing for big queue (00c80b14475bf82e9f8b1344d451a43997c76b9f)
- impr: proper warning on incorrect command (a9016a0657cadd2a1d02ea7ee03bc95e4def8bb0)

# 2.0.0 

- impr: added CannotReadFileNotFound error (#51bea54a4f68f905c3ead768cd3cbfbdf381779f)
- tests: moved tests files + updated (#9115fc87e24273437fedaca8cf528a6031f3d602)
- breaking(Job): this.results renamed to this.result. Added this.error (#59ba637eafe3ae95fb7410c5aebb81cc29ad3868)
- breaking(.getResults): removed feature (#315cf7aaa5da479b5b59ad8a2bed63f3d12dfcb5)
- impr(execCommand): job error are now in job.error (#d1cd85d865ccb86466ea3c10ffbefbbc090fd16e)

## 1.3.0

- [#f7bdc89](https://github.com/Alex-Werner/FSLockJS/commit/f7bdc89b7beaddb04ff03f45d39cf59d3511bc02) - Added Job.getResults()

## 1.2.1

- [#8e7dbec](https://github.com/Alex-Werner/FSLockJS/commit/8e7dbec3e81f3a837dadd92ae3927507baeaf75c) - Job.execution returns itself instead of bool.

## 1.2.0 
- All Directory / File command integrated
- appendJSON

## 1.1.1 
- Fix broken class instantiation

## 1.1.0 

- File.download

## 1.0.0 

- File utils
- Directory utils
- Job and FSLock class
- Job.execution()
