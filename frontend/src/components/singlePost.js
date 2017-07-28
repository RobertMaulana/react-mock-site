import React, { Component } from 'react';
import SinglePost from '../containers/blog/single-post/SinglePost';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { query } = this.props.location.state;
    return(
      <div>
        <SinglePost data={query}/>
      </div>
    )
  }
}

export default Post;
