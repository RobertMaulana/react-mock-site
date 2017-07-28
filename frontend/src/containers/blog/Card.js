import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../action/index';

class PostCard extends Component {

  componentWillMount() {
    this.props.fetchPosts()
  }

  sliceContent(text) {
    return text.slice(0, 200);
  }

  renderPostsList() {
    const { posts } = this.props;
    if (!posts) {
      return(
        <div>
          Loading...
        </div>
      )
    }
    return posts.map((post, index) => {
      return(
        <article className='card' key={index}>
          <figure className='thumbnail'>
            <img src={require('../../style/images/cropped/banana-wide.jpg')} alt='img'/>
          </figure>
          <div className='card-content'>
            <p className='publish-date'><em>Publish:</em> {post.createdAt}</p>
            <h2>{post.title}</h2>
            <p className='content-paragraph'>{this.sliceContent(post.content)}...</p>
            <div className='read-btn'>
              <strong><Link to={{pathname: `/blog/${post._id}`, state: {query: post}}}>Read more</Link></strong>
            </div>
          </div>
        </article>
      )
    })
  }

  render() {
    return(
      <div className='centered'>
        <section className='cards'>
          {this.renderPostsList()}
        </section>
      </div>
    )
  }
}

function mapStateToProps({posts}) {
  return{
    posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(PostCard);
