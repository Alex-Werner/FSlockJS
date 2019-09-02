## File API 

#### async File.append(path)

```js
    await File.append('myfile.txt', 'Sincerely, The End.');
```

#### async File.create(path, [data=''])

```js
    await File.create('myfile.txt', 'Hello FS World.');
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
