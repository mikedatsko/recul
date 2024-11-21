import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sagas from './sagas';
import CoraReducer from './Cora.reducer';

const reducers = {
  APP: CoraReducer({})
};
const RootReducer = combineReducers(reducers);
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, RootReducer);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(sagas);
export const persistor = persistStore(store);
