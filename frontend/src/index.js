import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ReduxPromise from 'redux-promise';

import './style/index.css';
import Home from './components/home';
import Blog from './components/blog';
import SinglePost from './components/singlePost';

import Reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducer)}>
    <Router>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blog' component={Blog} />
          <Route path='/blog/:id' component={SinglePost} />
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
