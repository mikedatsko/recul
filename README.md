# Recul
#### Sync Stage Management library

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

// Subscribe with listener
const listener = recul.on('a', value => {
  console.log('a', value);
});
recul.setValue('a', 1);

// Unsubscribe
recul.off(listener);
recul.setValue('a', 2);

// Subscribe to many listeners
const listener1 = recul.on('a', value => console.log('a', value));
const listener2 = recul.on('a', value => console.log('a', value));
const listener3 = recul.on('a', value => console.log('a', value));
recul.setValue('a', 3);

// Unsubscribe many listeners
recul.off([listener1, listener2, listener3]);
recul.setValue('a', 4);
```

## Test

```
npm run test
```

