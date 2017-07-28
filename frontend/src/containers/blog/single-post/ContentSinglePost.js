import React, { Component } from 'react';
import Fontawesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { createdAt, title, content, img} = this.props.content.data;
    console.log(this.props.content.data);
    return(
      <div className='post-container'>
        <div className='post'>
          <p className='date-post'>publish date at: {createdAt}</p>
          <h2>{title}</h2>
          <figure className='img-description'>
            <img src={img} alt='img' />
          </figure>
          <p className='content'>
          {content}
          </p>
        </div>
        <hr />
        <div className='comment-container'>
          <div className='title-comment-box'>
            <Fontawesome name='commenting-o' />
            <p>Submit your comment</p>
          </div>
          <div className='input-group'>
            <textarea type='text' name='comment'/>
          </div>
          <div className='btn-submit-comment'>
            <Link to='#'>Submit</Link>
          </div>
        </div>
        <hr />
        <div className='list-comment-container'>
          <div className='icon-user-comment'>
            <Fontawesome name='user-circle-o' />
          </div>
          <div className='user-comment-detail'>
            <p>02 January 2017</p>
            <p className='comment-username'>Erick</p>
            <div className='detail-comment'>
              <p> A *paragraph* of with an [unassigned link].
                  A _second_ &row& of ~text~ with a [web link](https://docs.balsamiq.com/desktop/text/#basic-formatting)
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostCard;
