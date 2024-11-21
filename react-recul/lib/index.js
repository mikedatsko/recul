"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "connect", {
  enumerable: true,
  get: function get() {
    return _reactRedux.connect;
  }
});
Object.defineProperty(exports, "actionSync", {
  enumerable: true,
  get: function get() {
    return _Cora.actionSync;
  }
});
Object.defineProperty(exports, "actionCreate", {
  enumerable: true,
  get: function get() {
    return _Cora.actionCreate;
  }
});
Object.defineProperty(exports, "actionRead", {
  enumerable: true,
  get: function get() {
    return _Cora.actionRead;
  }
});
Object.defineProperty(exports, "actionUpdate", {
  enumerable: true,
  get: function get() {
    return _Cora.actionUpdate;
  }
});
Object.defineProperty(exports, "actionRemove", {
  enumerable: true,
  get: function get() {
    return _Cora.actionRemove;
  }
});
Object.defineProperty(exports, "getProp", {
  enumerable: true,
  get: function get() {
    return _Cora2.getProp;
  }
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _Cora = require("./Cora.actions");

var _Cora2 = require("./Cora.selectors");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("redux-persist/integration/react");

var _store = require("./store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Cora from './Cora';
// export default Cora;
console.log('Provider', _reactRedux.Provider);

var Cora = function Cora(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: _store.store
  }, /*#__PURE__*/_react["default"].createElement(_react2.PersistGate, {
    loading: null,
    persistor: _store.persistor
  }, children));
};

console.log('Cora-1', Cora);
var _default = Cora;
exports["default"] = _default;