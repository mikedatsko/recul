function Listener(c, off) {
  this.id = Rand();
  this.callback = c;
  this.offCallback = off;
}

Listener.prototype.off = function() {
  this.offCallback(this.id);
};

function StoreItem(value) {
  var self = this;
  this.listeners = [];
  this.id = Rand();
  var val = value;

  Object.defineProperty(this, 'value', {
    get: function() {
      return val;
    },
    set: function(newValue) {
      val = newValue;
      self.listeners.forEach(function(listener) {
        listener.callback(newValue);
      });
    }
  });

  Object.defineProperty(this, 'silentValue', {
    get: function() {
      return val;
    },
    set: function(newValue) {
      val = newValue;
    }
  });

  return this;
}

StoreItem.prototype.on = function(c) {
  var self = this;
  var listener = new Listener(c, function(l) {
    self.listeners = this.listeners.filter(function(listener_) {
      return listener_.id !== l.id;
    });
  });

  self.listeners.push(listener);

  return {
    id: listener.id,
    off: function() {
      self.listeners = self.listeners.filter(function(listener_) {
        return listener_.id !== listener.id;
      });
    }
  };
};

function Rand() {
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return generateRandomNumber(1000000, 9999999) + '-' + new Date().getTime();
}

var store = {};

function Recul(initialState) {
  var initialValues = Object.keys(initialState || {});
  var self = this;

  if (initialValues.length) {
    initialValues.forEach(function(key) {
      self.create(key, initialValues[key]);
    });
  }
}

Recul.prototype.create = function(name, value, isNotToDispatch) {
  if (store[name] && isNotToDispatch) {
    store[name].silentValue = value;
  } else if (store[name] && !isNotToDispatch) {
    store[name].value = value;
  } else {
    store[name] = new StoreItem(value);
  }

  return store[name];
};

Recul.prototype.read = function(name) {
  return store[name];
};

Recul.prototype.reset = function() {
  store = {};
};

Recul.prototype.store = function() {
  return Object.assign({}, store || {});
};

Recul.prototype.action = function() {};

module.exports = Recul;
