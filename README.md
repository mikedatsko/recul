# Recul

### Sync State Management

[![npm version](http://img.shields.io/npm/v/recul.svg?style=flat)](https://npmjs.org/package/recul)

## Install

```
npm i -S recul
```

## Get started

### Simple usage

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
```

### Flux app store usage

#### Action types

`userActionTypes.js`

```
export const USER = {
  _NAME: 'USER',
  ACCOUNT: 'USER.ACCOUNT',
  IS_AUTHENTICATED: 'USER.IS_AUTHENTICATED'
};
```

#### Action

`userActions.js`

```
import { userReducer } from './userReducer';
import { USER } from './userActionTypes';

export const userActions = {
  setAccount: account => userReducer({
    type: USER.ACCOUNT,
    payload: {
      account
    }
  }),
  authenticate: () => userReducer({
    type: USER.IS_AUTHENTICATED,
    payload: {
      isAuthenticated: true
    }
  }),
  login: (email, password) => {
    httpService
      .post('http://api.your-domain.com/auth')
      .then(response => {
        userActions.setAccount(response.user);
        userActions.authenticate();
      })
      .catch(error => {
        userActions.setAccount();
        userActions.logout();
      });
  },
  logout: userReducer({
    type: USER.IS_AUTHENTICATED,
    payload: {
      isAuthenticated: false
    }
  })
};
```

#### Reducer

`userReducer.js`

```
import { recul } from 'recul';
import { USER } from './userActionTypes';

export const userInitialState = {
  [USER.ACCOUNT]: undefined,
  [USER.IS_AUTHENTICATED]: false
};

recul.setValue(USER._NAME, userInitialState);

export const userReducer = (action, state) => {
  switch(action.type) {
    case USER.ACCOUNT: {
      return {
        ...state,
        [USER.ACCOUNT]: action.payload.account
      };
    }
  }
};
```

#### Selector (with RxJS)

```
import { recul } from 'recul';
import { BehaviorSubject } from 'rxjs';
import { USER } from './userActionTypes';

export const userSelectors = {
  account: () => {
    const subject = new BehaviorSubject(recul.getValue(USER.ACCOUNT));
    recul.subscribe(USER.ACCOUNT, account => subject.next(account));
    return subject;
  },
  isAuthenticated: () => {
    const subject = new BehaviorSubject(recul.getValue(USER.IS_AUTHENTICATED));
    recul.subscribe(USER.IS_AUTHENTICATED, isAuthenticated => subject.next(isAuthenticated));
    return subject;
  }
};
```

## Test

```
npm test
```
