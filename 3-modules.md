# Modules & Concurrency

## Refs

These are my working notes from Node.js Getting Started.

_arguments_ is a special keyword that prints the arguments object in function scope
_arguments_ returns parameters passed to hidden wrapping file (module)

## Hidden wrapping function

```js
function(exports, module, require, __filename /*path to file*/, __dirname /*path to folder*/) {
    // path to file
}
```

browsers don't have a hidden wrapping function, so variables defined here would be global.

wrapping function returns module.exports for every file.

`exports` is just an alias for `module.exports`

## Top level API

A top-level API can either be a simple object or a function.
If your top-level API is an object, you can use the alias `exports`

```js
exports.myfuc = () => {};
exports.myProps = "test";
```

For a function or array, you don't want to re-assign the `exports` reference; use this instead

```js
module.exports = () => {};
module.exports = [1, 2, 3];
```

## Global variable

`global` in Node and `window` in browser.

Node's `global` variable has access to timeout function, `process`, `Buffer`, etc.

### process object

process.env

## The Event Loop

Allows of asynchronous processing in Node w/out the use of threads.
If there's no asynchronous code, the Event Loop will stop and kill the node process.

Callback function is idiomatically the last parameter in an async function call. Node uses an error first callback paradigm where the first object is the error object and the second object is the data object. If no errors are encountered, errors is returned as null.

## Event Emitters

```js
const EventEmitter = require("events"); // class
const myEventEmitter = new EventEmitter();
myEventEmitter.emit("myEvent");
myEventEmitter.on("myEvent", cb);
```

## Debuggers

```bash
node --inspect-brk
```
