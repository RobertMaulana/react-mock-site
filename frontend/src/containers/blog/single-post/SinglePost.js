import React, { Component } from 'react';
import Navigation from '../../Navigation';
import SideNavigation from '../SideNavigation';
import ContentSinglePost from './ContentSinglePost';

class SinglePost extends Component {
  render() {
    return(
      <div>
        <div>
          <Navigation />
        </div>
        <div className='singlepost-content-container'>
            <SideNavigation />
            <ContentSinglePost />
        </div>
      </div>
    )
  }
}

export default SinglePost;
