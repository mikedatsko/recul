"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _callee;

var _effects = require("redux-saga/effects");

var _http = _interopRequireDefault(require("./http"));

var _Cora = require("./Cora.actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchCreate),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(fetchRead),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(fetchUpdate),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(fetchRemove),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(watchCreate),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(watchRead),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(watchUpdate),
    _marked8 = /*#__PURE__*/regeneratorRuntime.mark(watchRemove),
    _marked9 = /*#__PURE__*/regeneratorRuntime.mark(_callee);

function fetchCreate(action) {
  var response;
  return regeneratorRuntime.wrap(function fetchCreate$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(_http["default"].post, action.payload.path, action.payload);

        case 3:
          response = _context.sent;
          _context.next = 6;
          return (0, _effects.put)({
            type: _Cora.APP_CREATE_SUCCESS,
            payload: {
              propName: action.payload.propName,
              response: response
            }
          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return (0, _effects.put)({
            type: _Cora.APP_CREATE_FAILURE,
            payload: {
              propName: action.payload.propName,
              error: _context.t0.message
            }
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function fetchRead(action) {
  var response;
  return regeneratorRuntime.wrap(function fetchRead$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.call)(_http["default"].get, action.payload.path, action.payload);

        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return (0, _effects.put)({
            type: _Cora.APP_READ_SUCCESS,
            payload: {
              propName: action.payload.propName,
              response: response
            }
          });

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 12;
          return (0, _effects.put)({
            type: _Cora.APP_READ_FAILURE,
            payload: {
              propName: action.payload.propName,
              error: _context2.t0.message
            }
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function fetchUpdate(action) {
  var response;
  return regeneratorRuntime.wrap(function fetchUpdate$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _effects.call)(_http["default"].put, action.payload.path, action.payload);

        case 3:
          response = _context3.sent;
          _context3.next = 6;
          return (0, _effects.put)({
            type: _Cora.APP_UPDATE_SUCCESS,
            payload: {
              propName: action.payload.propName,
              response: response
            }
          });

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 12;
          return (0, _effects.put)({
            type: _Cora.APP_UPDATE_FAILURE,
            payload: {
              propName: action.payload.propName,
              error: _context3.t0.message
            }
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function fetchRemove(action) {
  var response;
  return regeneratorRuntime.wrap(function fetchRemove$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _effects.call)(_http["default"]["delete"], action.payload.path, action.payload);

        case 3:
          response = _context4.sent;
          _context4.next = 6;
          return (0, _effects.put)({
            type: _Cora.APP_REMOVE_SUCCESS,
            payload: {
              propName: action.payload.propName,
              response: response
            }
          });

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 12;
          return (0, _effects.put)({
            type: _Cora.APP_REMOVE_FAILURE,
            payload: {
              propName: action.payload.propName,
              error: _context4.t0.message
            }
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 8]]);
}

function watchCreate() {
  return regeneratorRuntime.wrap(function watchCreate$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.takeEvery)(_Cora.APP_CREATE_REQUEST, fetchCreate);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchRead() {
  return regeneratorRuntime.wrap(function watchRead$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.takeEvery)(_Cora.APP_READ_REQUEST, fetchRead);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function watchUpdate() {
  return regeneratorRuntime.wrap(function watchUpdate$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.takeEvery)(_Cora.APP_UPDATE_REQUEST, fetchUpdate);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchRemove() {
  return regeneratorRuntime.wrap(function watchRemove$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _effects.takeEvery)(_Cora.APP_REMOVE_REQUEST, fetchRemove);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _effects.all)([watchCreate(), watchRead(), watchUpdate(), watchRemove()]);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}