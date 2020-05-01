# Get

A bare bones Node.js HTTP get library that returns a promise. Automatically parses JSON. Inspired from [Tomas Dvorak's article](https://www.tomas-dvorak.cz/posts/nodejs-request-without-dependencies/).

## Usage

Download `get.js` or clone the entire repo. Then require the file.

```js
const get = require("./get");

get("https://api.example.com")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
```

## Contributors

**Dominic Brant**.

[Follow me on Twitter](https://twitter.com/dombrant), and feel free to let me know if you have any thoughts/suggestions/problems.

## License

MIT© [Dominic Brant](http://dombrant.com)
