"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistor = exports.store = void 0;

var _redux = require("redux");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _sagas = _interopRequireDefault(require("./sagas"));

var _Cora = _interopRequireDefault(require("./Cora.reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducers = {
  APP: (0, _Cora["default"])({})
};
var RootReducer = (0, _redux.combineReducers)(reducers);
var sagaMiddleware = (0, _reduxSaga["default"])();
var persistConfig = {
  key: 'root',
  storage: _storage["default"]
};
var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, RootReducer);
var store = (0, _redux.createStore)(persistedReducer, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(sagaMiddleware)));
exports.store = store;
sagaMiddleware.run(_sagas["default"]);
var persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;