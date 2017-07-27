import React, { Component } from 'react';

class PostCard extends Component {
  render() {
    return(
      <div className='centered'>
        <section className='cards'>
          <article className='card'>
            <figure className='thumbnail'>
              <img src={require('../../style/images/cropped/banana-wide.jpg')} alt='img'/>
            </figure>
            <div className='card-content'>
              <p className='publish-date'><em>Publish:</em> 02 January 2017</p>
              <h2>Prinsip-prinsip component di React</h2>
              <p className='content-paragraph'>Lorem ipsum dolor sit amet, nec te delenit debitis, duo eu aeque ceteros appellantur, cu facilis verterem repudiandae eos. Has ne agam prima deserunt, at his tantas deni...</p>
              <div className='read-btn'>
                <strong><a href='/blog/4'>Read more</a></strong>
              </div>
            </div>
          </article>
          <article className='card'>
            <figure className='thumbnail'>
              <img src={require('../../style/images/cropped/banana-wide.jpg')} alt='img'/>
            </figure>
            <div className='card-content'>
              <p className='publish-date'>02 January 2017</p>
              <h2>Prinsip-prinsip component di React</h2>
              <p className='content-paragraph'>Lorem ipsum dolor sit amet, nec te delenit debitis, duo eu aeque ceteros appellantur, cu facilis verterem repudiandae eos. Has ne agam prima deserunt, at his tantas deni...</p>
              <div className='read-btn'>
                <strong><a href='#'>Read more</a></strong>
              </div>
            </div>
          </article>
          <article className='card'>
            <figure className='thumbnail'>
              <img src={require('../../style/images/cropped/banana-wide.jpg')} alt='img'/>
            </figure>
            <div className='card-content'>
              <p className='publish-date'>02 January 2017</p>
              <h2>Prinsip-prinsip component di React</h2>
              <p className='content-paragraph'>Lorem ipsum dolor sit amet, nec te delenit debitis, duo eu aeque ceteros appellantur, cu facilis verterem repudiandae eos. Has ne agam prima deserunt, at his tantas deni...</p>
              <div className='read-btn'>
                <strong><a href='#'>Read more</a></strong>
              </div>
            </div>
          </article>
          <article className='card'>
            <figure className='thumbnail'>
              <img src={require('../../style/images/cropped/banana-wide.jpg')} alt='img'/>
            </figure>
            <div className='card-content'>
              <p className='publish-date'>02 January 2017</p>
              <h2>Prinsip-prinsip component di React</h2>
              <p className='content-paragraph'>Lorem ipsum dolor sit amet, nec te delenit debitis, duo eu aeque ceteros appellantur, cu facilis verterem repudiandae eos. Has ne agam prima deserunt, at his tantas deni...</p>
              <div className='read-btn'>
                <strong><a href='#'>Read more</a></strong>
              </div>
            </div>
          </article>
          <article className='card'>
            <figure className='thumbnail'>
              <img src={require('../../style/images/cropped/banana-wide.jpg')} alt='img'/>
            </figure>
            <div className='card-content'>
              <p className='publish-date'>02 January 2017</p>
              <h2>Prinsip-prinsip component di React</h2>
              <p className='content-paragraph'>Lorem ipsum dolor sit amet, nec te delenit debitis, duo eu aeque ceteros appellantur, cu facilis verterem repudiandae eos. Has ne agam prima deserunt, at his tantas deni...</p>
              <div className='read-btn'>
                <strong><a href='#'>Read more</a></strong>
              </div>
            </div>
          </article>
        </section>
      </div>
    )
  }
}

export default PostCard;
