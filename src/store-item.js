const getHash = require('./hash');

const immutableValue = {
  object: value => JSON.parse(JSON.stringify(value)),
  array: value => JSON.parse(JSON.stringify(value))
};

class StoreItem {
  constructor(name, value, config) {
    this.name = name;
    this.type = Array.isArray(value) ? 'array' : typeof value;
    this.hash = 0;
    this.listeners = [];
    this.config = config;
  }

  getValue() {
    if (immutableValue[this.type]) {
      return immutableValue[this.type](this.value);
    }

    return this.value;
  }

  setValue(value, isDispatch) {
    const hash = getHash(JSON.stringify(value) || '');
    const isHashEqual = hash === this.hash;

    if (!isHashEqual) {
      this.hash = hash;
      Object.defineProperty(this, 'value', {
        value: value,
        writable: false,
        configurable: true
      });
    }

    if ((isDispatch || !isHashEqual) && this.listeners.length) {
      this.listeners.forEach(listener => listener.callback(value));
    }

    if (this.config.localStorage && localStorage) {
      localStorage.setItem(this.name, value);
    }
  }

  getListeners() {
    return this.listeners;
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  removeListener(listener) {
    this.listeners = this.listeners.filter(
      listener_ => listener_.id !== listener.id
    );
  }
}

module.exports = StoreItem;
