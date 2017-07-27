import React, { Component } from 'react';
import Navigation from '../containers/Navigation';
import HeroArea from '../containers/home/Hero';

class App extends Component {
  render() {
    return(
      <div>
        <Navigation />
        <HeroArea />
      </div>
    )
  }
}

export default App;
