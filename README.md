# Get

A bare bones Node.js HTTP get API that returns a promise. Automatically parses JSON.

## Usage

``const get = require('./get');

get('// http://api.zippopotam.us/us/90210')
.then(response => console.log(response))
.catch(error => console.log(error));``

## Contributors

**Dominic Brant**.

[Follow me on Twitter](https://twitter.com/dombrant), and feel free to let me know if you have any thoughts/suggestions/problems.

## License

MIT© [Dominic Brant](http://dombrant.com)
