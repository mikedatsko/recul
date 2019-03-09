# Recul
#### Sync Stage Management library with cache through hash

[![npm version](http://img.shields.io/npm/v/recul.svg?style=flat)](https://npmjs.org/package/recul)


## Introduction

The most important ability of the system is cache, especially in the state management.

The state of the application could be updated a lot of times per second. This cause a bunch of unnecessary reactions at the subscribed children of the system. To prevent such kind of reactions Recul use a cache through hash. Hash - is a number representation of the string. The implementation of hash generation is took from [here](https://stackoverflow.com/a/7616484/3434141).

## Install

```
npm i -S recul
```

## Get started

```
const recul = require('recul');

// Set value
recul.setValue('a', 1);

// Get value
console.log(recul.getValue('a'));

// Reset (clear) store
recul.reset();

// Subscribe to value changes
recul.on('a', value => {
  console.log('a', value);
});


// Alias for "on"
recul.subscribe('a', value => {
  console.log('a', value);
});

// Subscribe with listener
const listener = recul.on('a', value => {
  console.log('a', value);
});
recul.setValue('a', 1);

// Unsubscribe
recul.off(listener);
recul.setValue('a', 2);

// Alias for "off"
recul.unsubscribe(listener);

// Subscribe to many listeners
const listener1 = recul.on('a', value => console.log('a', value));
const listener2 = recul.on('a', value => console.log('a', value));
const listener3 = recul.on('a', value => console.log('a', value));
recul.setValue('a', 3);

// Unsubscribe many listeners
recul.off([listener1, listener2, listener3]);
recul.setValue('a', 4);

// Check hash
recul.subscribe('a', value => {
  console.log('a', recul.getValue('a'));
});

recul.setValue('a', 1); // console.log -> 1
recul.setValue('a', 1); // no reaction
recul.setValue('a', 2); // console.log -> 2
```

## Test

```
npm run test
```

