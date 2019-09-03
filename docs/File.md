## File API 

#### async File.append(path, data)

```js
    await File.append('myfile.txt', 'Sincerely, The End.');
```

#### async File.appendJSON(path, data ={})

```js
    await File.append('myfile.json', {name:'Alex'});
```

#### async File.create(path, [data=''])

```js
    await File.create('myfile.txt', 'Hello FS World.');
```


#### async File.download(uri, [outputPath])

Used to download a file over http or https.  

- outputPath - Not required, when provided, will store at the requested location.

```js
    const uri = 'http://w3c.github.io/csvw/tests/test001.json';
    const data = await File.download(uri);

    await File.download(uri, 'test0001.json');
```

#### async File.ensure(path)

```js
    await File.ensure('myfile.txt');
```

#### async File.exists(path)

```js
    await File.exists('myfile.txt');
```

#### async File.read(path)

```js
    await File.read('myfile.txt');
```

#### async File.remove(path)

```js
    await File.remove('myfile.txt');
```
