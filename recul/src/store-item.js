class StoreItem {
  constructor(name, value, config) {
    this.name = name;
    this.listeners = [];
    this.config = config;
  }

  getValue() {
    return this.value;
  }

  setValue(value, isDispatch) {
    Object.defineProperty(this, 'value', {
      value: value,
      writable: false,
      configurable: true
    });

    if (isDispatch && this.listeners.length) {
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
    this.listeners = this.listeners.filter(l => l.id !== listener.id);
  }
}

module.exports = StoreItem;
