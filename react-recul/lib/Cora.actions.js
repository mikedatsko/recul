"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionRemove = exports.actionUpdate = exports.actionRead = exports.actionCreate = exports.actionSync = exports.APP_REMOVE_FAILURE = exports.APP_REMOVE_SUCCESS = exports.APP_REMOVE_REQUEST = exports.APP_UPDATE_FAILURE = exports.APP_UPDATE_SUCCESS = exports.APP_UPDATE_REQUEST = exports.APP_READ_FAILURE = exports.APP_READ_SUCCESS = exports.APP_READ_REQUEST = exports.APP_CREATE_FAILURE = exports.APP_CREATE_SUCCESS = exports.APP_CREATE_REQUEST = exports.APP_SYNC = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var APP_SYNC = '@@app/APP_SYNC';
exports.APP_SYNC = APP_SYNC;
var APP_CREATE_REQUEST = '@@app/APP_CREATE_REQUEST';
exports.APP_CREATE_REQUEST = APP_CREATE_REQUEST;
var APP_CREATE_SUCCESS = '@@app/APP_CREATE_SUCCESS';
exports.APP_CREATE_SUCCESS = APP_CREATE_SUCCESS;
var APP_CREATE_FAILURE = '@@app/APP_CREATE_FAILURE';
exports.APP_CREATE_FAILURE = APP_CREATE_FAILURE;
var APP_READ_REQUEST = '@@app/APP_READ_REQUEST';
exports.APP_READ_REQUEST = APP_READ_REQUEST;
var APP_READ_SUCCESS = '@@app/APP_READ_SUCCESS';
exports.APP_READ_SUCCESS = APP_READ_SUCCESS;
var APP_READ_FAILURE = '@@app/APP_READ_FAILURE';
exports.APP_READ_FAILURE = APP_READ_FAILURE;
var APP_UPDATE_REQUEST = '@@app/APP_UPDATE_REQUEST';
exports.APP_UPDATE_REQUEST = APP_UPDATE_REQUEST;
var APP_UPDATE_SUCCESS = '@@app/APP_UPDATE_SUCCESS';
exports.APP_UPDATE_SUCCESS = APP_UPDATE_SUCCESS;
var APP_UPDATE_FAILURE = '@@app/APP_UPDATE_FAILURE';
exports.APP_UPDATE_FAILURE = APP_UPDATE_FAILURE;
var APP_REMOVE_REQUEST = '@@app/APP_REMOVE_REQUEST';
exports.APP_REMOVE_REQUEST = APP_REMOVE_REQUEST;
var APP_REMOVE_SUCCESS = '@@app/APP_REMOVE_SUCCESS';
exports.APP_REMOVE_SUCCESS = APP_REMOVE_SUCCESS;
var APP_REMOVE_FAILURE = '@@app/APP_REMOVE_FAILURE'; // Async action's data
// data: {
//   path: string,
//   ...other data
// }

exports.APP_REMOVE_FAILURE = APP_REMOVE_FAILURE;

var actionSync = function actionSync() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    type: APP_SYNC,
    payload: _objectSpread({}, data)
  };
};

exports.actionSync = actionSync;

var actionCreate = function actionCreate() {
  var propName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'demo';
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return {
    type: APP_CREATE_REQUEST,
    payload: _objectSpread({
      propName: propName,
      path: ''
    }, data)
  };
};

exports.actionCreate = actionCreate;

var actionRead = function actionRead() {
  var propName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'demo';
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return {
    type: APP_READ_REQUEST,
    payload: _objectSpread({
      propName: propName,
      path: ''
    }, data)
  };
};

exports.actionRead = actionRead;

var actionUpdate = function actionUpdate() {
  var propName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'demo';
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return {
    type: APP_UPDATE_REQUEST,
    payload: _objectSpread({
      propName: propName,
      path: ''
    }, data)
  };
};

exports.actionUpdate = actionUpdate;

var actionRemove = function actionRemove() {
  var propName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'demo';
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return {
    type: APP_REMOVE_REQUEST,
    payload: _objectSpread({
      propName: propName,
      path: ''
    }, data)
  };
};

exports.actionRemove = actionRemove;