# Get

A bare bones Node.js HTTP get library that returns a promise. Automatically parses JSON. Inspired from [Tomas Dvorak's article](https://www.tomas-dvorak.cz/posts/nodejs-request-without-dependencies/).

## Usage

Install it via npm:

```bash
$ npm install https://github.com/dombrant/get
```

Then import it (**Note:** `get.js` only supports ES module syntax):

```js
import get from "get";

get("https://api.example.com")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
```

## Contributors

**Dominic Brant**.

If you have any thoughts/suggestions/problems, feel free to open an [issue](https://github.com/dombrant/get/issues).

## License

MIT© [Dominic Brant](http://dombrant.com)
