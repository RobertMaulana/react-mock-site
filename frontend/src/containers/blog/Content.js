import React, { Component } from 'react';
import Card from './Card';
import SideNavigation from './SideNavigation';

class Content extends Component {
  render() {
    return(
      <div className='content-container'>
        <SideNavigation />
        <Card />
      </div>
    )
  }
}

export default Content;
