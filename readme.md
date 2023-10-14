# requires-walk

> Find `require()` calls using [babel parser](https://babeljs.io/docs/babel-parser).

## Install

```bash
npm i requires-walk
```

## Usage

`source.js`
```js
const moduleA = require('./module-a.js');
const moduleB = require('./module-b.js');
const moduleC = require('./module-c.js');
```

`program.js`
```js
const requiresWalk = require('requires-walk');
const fs = require('fs');
const source = fs.readFileSync('source.js', 'utf8');

requiresWalk(source); // <= ['./module-a.js', './module-b.js', './module-c.js']
```

## API

### `requiresWalk(src, options?)`

Looks for `require()` calls.

#### `src`

Type: `String`<br>
Source, where `require()` calls will be looked for.

#### `options`

Type: `Object`<br>
Options are the same as [babel parser options](https://babeljs.io/docs/babel-parser#options).

## License

MIT 💖