import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

import Navigation from '../containers/Navigation';
import Footer from '../containers/Footer';
import Content from '../containers/blog/Content';

import SinglePost from './singlePost';

class App extends Component {
  render() {
    return (
      <div>
          <Navigation />
          <Content />
      </div>
    );
  }
}

export default App;
