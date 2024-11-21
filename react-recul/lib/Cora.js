"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _react2 = require("redux-persist/integration/react");

var _store = require("./store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Cora = function Cora(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: _store.store
  }, /*#__PURE__*/_react["default"].createElement(_react2.PersistGate, {
    loading: null,
    persistor: _store.persistor
  }, children));
};

var _default = Cora;
exports["default"] = _default;