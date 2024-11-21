"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProp = void 0;

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getState = function getState(state) {
  return state.APP;
};

var getProp = function getProp(state, propPath) {
  return (0, _get["default"])(getState(state), propPath);
};

exports.getProp = getProp;