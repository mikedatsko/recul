const getRandomId = require('./random').id;

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

module.exports = Listener;
