# CORA

## State management for React application

Based on Redux, React-Redux, Redux Devtools Extension, Redux-Saga and Axios

## Getting started

### Install

```
yarn add cora
```

### Use

`index.js`

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Store, { Provider } from 'cora';
import App from './App';

const storeTree = {
  posts: {
    isLoading: false,
    list: [],
    error: ''
  }
};
const store = Store(storeTree);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

`app.js`

```
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { actionCreate, connect } from 'cora';

function App({ actionCreate, error }) {
  useEffect(() => {
    actionCreate({ path: 'api/post', propName: 'posts' });
  }, [token, actionCreate]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    error: state.APP.posts.error,
    isLoading: state.APP.posts.isLoading
  };
};

const mapDispatchToProps = { actionCreate };

export default connect(mapStateToProps, mapDispatchToProps)(App);
```
