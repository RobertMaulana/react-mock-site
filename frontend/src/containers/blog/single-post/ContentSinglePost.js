import React, { Component } from 'react';
import Fontawesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class PostCard extends Component {
  render() {
    return(
      <div className='post-container'>
        <div className='post'>
          <p className='date-post'>02 January 2017</p>
          <h2>Prinsip Component di React</h2>
          <figure className='img-description'>
            <img src={require('./images/cropped/banana-wide.jpg')} alt='img' />
          </figure>
          <p className='content'>
          Lorem ipsum dolor sit amet, novum corrumpit id sea. Nec ea viris omittam. Ad duo mediocrem petentium molestiae. Has ex errem incorrupte, eius vidisse omittam duo an, munere tibique sed cu. Est quando deleniti principes id, sed illud doctus erroribus cu. Ei ponderum molestiae eos. Est id dicit essent, omnesque scripserit ius te.
          No vero facete eleifend est, at falli elitr choro vim. Id eruditi apeirian deseruisse sed, et lorem nostro aliquam sea. Eros postulant adipiscing at mea, per consul nusquam eligendi te, sed sonet veniam dolore ut. Eu omnes regione cotidieque quo, brute tation quaeque usu te. Pro id tempor vulputate, falli evertitur ei vis. Eu utroque disputando ius.
          Populo appellantur at his. Mel te tamquam dolores, vis tritani accusam at. Duo ei decore voluptaria, te putant aliquam dolores vix. Id vis laboramus philosophia, ex usu viris partiendo instructior.
          Feugait principes cu pro, duo at illum error oporteat. An vim paulo urbanitas dissentias. Nam ne omnium apeirian consequat. Ad eos legere adipiscing. Congue iriure ex vel, eum ei rebum possit, dictas habemus ad sit.
          Eu sapientem consectetuer eos, ex iriure democritum cotidieque sea. Mei dictas mollis habemus at. Ex prima mazim ius. Vis euripidis philosophia at, at populo tamquam scribentur nec. Vix agam omnium aliquando ne, ea commune urbanitas quo, pertinax imperdiet signiferumque cu vim. Graece veritus id pri, eos magna conceptam ea, ad quo quas perpetua.
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
