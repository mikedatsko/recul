const getHash = function(str){
  let hash = 0;
  const len = str.length;

  if (len === 0) {
    return hash;
  }

  let char;
  for (let i = 0; i < len; i++) {
    char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }

  return hash;
};

const immutableValue = {
  object: value => JSON.parse(JSON.stringify(value)),
  array: value => JSON.parse(JSON.stringify(value))
};

const config = {
  localStorage: false
};

const getRandomId = () => {
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return generateRandomNumber(1000000, 9999999) + new Date().getTime();
};

class Listener {
  constructor(name, callback, unsubscribeCallback) {
    this.id = getRandomId();
    this.name = name;
    this.callback = callback;
    this.unsubscribeCallback = unsubscribeCallback;
  }

  unsubscribe() {
    this.unsubscribeCallback();
  }
}

class Recul {
  constructor() {
    this.store = {};
    this.listeners = {};
  }

  setValue(name, value, isDispatch) {
    const self = this;

    if (!self.store[name]) {
      self.store[name] = {
        type: typeof value === 'object' && value.hasOwnProperty('length') ? 'array' : typeof value,
        hash: 0,
        getValue: function() {
          if (immutableValue[this.type]) {
            return immutableValue[this.type](this.value);
          }

          return this.value;
        },
        setValue: function(value) {
          const hash = getHash(JSON.stringify(value) || '');

          if (hash === this.hash) {
            return;
          }

          this.hash = hash;
          Object.defineProperty(this, 'value', {
            value: value,
            writable: false,
            configurable: true
          });

          if (isDispatch !== false && self.listeners[name]) {
            self.listeners[name].forEach(listener => listener.callback(value));
          }

          if (config.localStorage && localStorage) {
            localStorage.setItem(name, value);
          }
        }
      };

      Object.defineProperty(self.store[name], 'value', {
        value: value,
        writable: false,
        configurable: true
      });
    }

    self.store[name].setValue(value);
  }

  getValue(name, defaultValue) {
    if (typeof this.store[name] === 'undefined') {
      if (config.localStorage && localStorage) {
        return localStorage.getItem(name);
      }

      if (typeof defaultValue !== 'undefined') {
        return defaultValue;
      }

      return undefined;
    }

    return this.store[name].getValue();
  }

  reset() {
    this.store = {};
  }

  on(name, callback) {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }

    const listener = new Listener(name, callback, () => {
      this.unsubscribe(listener);
    });
    this.listeners[name].push(listener);

    return listener;
  }

  off(listeners) {
    if (!listeners.length) {
      listeners = [listeners];
    }

    listeners.forEach(listener => {
      this.listeners[listener.name] = this.listeners[listener.name].filter(listener_ => listener_.id !== listener.id);
    });
  }

  subscribe(name, callback) {
    return this.on(name, callback);
  }

  unsubscribe(listeners) {
    return this.off(listeners);
  }
}

const recul = new Recul();
const ReculOn = function(target, key) {
  console.log('ReculOn', arguments);

  return function() {
    console.log('ReculOn', 'function', arguments);
  };
};

module.exports = {
  recul: recul,
  ReculOn: ReculOn,
  config: config,
};
