import React, { Component } from 'react';
import Navigation from '../../Navigation';
import SideNavigation from '../SideNavigation';
import ContentSinglePost from './ContentSinglePost';

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return(
      <div>
        <div>
          <Navigation />
        </div>
        <div className='singlepost-content-container'>
            <SideNavigation />
            <ContentSinglePost content={this.props}/>
        </div>
      </div>
    )
  }
}

export default SinglePost;
