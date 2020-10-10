const Listener = require('./listener');
const StoreItem = require('./store-item');

class Recul {
  constructor(config) {
    this.store = {};
    this.config = config;
  }

  create(name, value) {
    this.store[name] = new StoreItem(name, value, this.config);
  }

  setValue(name, value, isDispatch) {
    if (!this.store[name]) {
      this.create(name, value);
    }

    this.store[name].setValue(value, isDispatch);
  }

  getValue(name, defaultValue) {
    if (typeof this.store[name] === 'undefined') {
      if (this.config.localStorage && window && window.localStorage) {
        const value = JSON.parse(localStorage.getItem(name));
        this.setValue(name, value);
        return value;
      }

      if (typeof defaultValue !== 'undefined') {
        return defaultValue;
      }

      return undefined;
    }

    return this.store[name].getValue();
  }

  reset() {
    const keys = Object.keys(this.store);
    keys.forEach(key => delete this.store[key]);
  }

  on(name, callback) {
    const listener = new Listener(name, callback, () => {
      this.off(listener);
    });

    if (!this.store[name]) {
      this.create(name);
    }

    this.store[name].addListener(listener);

    return listener;
  }

  off(listeners) {
    if (typeof listeners.length === 'undefined') {
      listeners = [listeners];
    }

    listeners.forEach(listener => {
      this.store[listener.name].removeListener(listener);
    });
  }

  subscribe(name, callback) {
    return this.on(name, callback);
  }

  unsubscribe(listeners) {
    return this.off(listeners);
  }
}

module.exports = Recul;
