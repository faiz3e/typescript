import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createBrowserHistory } from 'history';
// import { configureStore } from 'app/store';
// import { Router } from 'react-router';
// import { App } from './app';
import { Home } from "./home/Home";
import { Provider } from 'react-redux';
// import { createStore } from './common/store';

// const store = createStore();



// prepare store
// const history = createBrowserHistory();
// const store = configureStore();

ReactDOM.render(
  <Provider>
    <Home />
  </Provider>
  ,

  document.getElementById('root')
);

//   <Provider store={store}>
//     <Router history={history}>
      // <App />
  //   </Router>
  // </Provider>,
