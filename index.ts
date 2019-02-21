const getHash = function(str: string){
  let hash: number = 0;
  const len: number = str.length;

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

const immutableValue: any = {
  object: (value: any) => JSON.parse(JSON.stringify(value)),
  array: (value: any) => JSON.parse(JSON.stringify(value))
};

export const config: any = {
  localStorage: false
};

const getRandomId = () => {
  function generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return generateRandomNumber(1000000, 9999999) + new Date().getTime();
};

class Listener {
  id: number;
  name: string;
  callback: any;
  unsubscribeCallback: any;

  constructor(name: string, callback: any, unsubscribeCallback: any) {
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
  store: any;
  listeners: any;

  constructor() {
    this.store = {};
    this.listeners = {};
  }

  setValue(name: string, value: any, isDispatch?: boolean) {
    const self = this;

    if (!self.store[name]) {
      self.store[name] = {
        value: value,
        type: typeof value === 'object' && value.hasOwnProperty('length') ? 'array' : typeof value,
        hash: 0,
        getValue: function() {
          if (immutableValue[this.type]) {
            return immutableValue[this.type](this.value);
          }

          return this.value;
        },
        setValue: function(value: any) {
          this.value = value;
          this.hash = getHash(JSON.stringify(value));

          if (isDispatch !== false && self.listeners[name]) {
            self.listeners[name].forEach((listener: any) => listener.callback(value));
          }

          if (config.localStorage && localStorage) {
            localStorage.setItem(name, value);
          }
        }
      };
    }

    self.store[name].setValue(value);
  }

  getValue(name: string, defaultValue?: any) {
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

  on(name: string, callback: any) {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }

    const listener = new Listener(name, callback, () => {
      this.unsubscribe(listener);
    });
    this.listeners[name].push(listener);

    return listener;
  }

  off(listeners: any | any[]) {
    if (!listeners.length) {
      listeners = [listeners];
    }

    listeners.forEach((listener: any) => {
      this.listeners[listener.name] = this.listeners[listener.name].filter((listener_: any) => listener_.id !== listener.id);
    });
  }

  subscribe(name: string, callback: any) {
    return this.on(name, callback);
  }

  unsubscribe(listeners: any | any[]) {
    return this.off(listeners);
  }
}

export const recul = new Recul();
export const ReculOn = function(target: any, key: string) {
  console.log('ReculOn', arguments);

  return function() {
    console.log('ReculOn', 'function', arguments);
  };
};
