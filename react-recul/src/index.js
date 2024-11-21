import { connect } from 'react-redux';
import {
  actionSync,
  actionCreate,
  actionRead,
  actionUpdate,
  actionRemove
} from './Cora.actions';
import { getProp } from './Cora.selectors';
// import Cora from './Cora';

export {
  connect,
  actionSync,
  actionCreate,
  actionRead,
  actionUpdate,
  actionRemove,
  getProp
};
// export default Cora;

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

console.log('Provider', Provider);

const Cora = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

console.log('Cora-1', Cora);

export default Cora;
