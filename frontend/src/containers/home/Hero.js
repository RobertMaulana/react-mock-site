import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hero extends Component {
  render() {
    return(
      <div>
        <section className='hero-area'>
          <div className='caption'>
            <h1>Learn something new and share it :)</h1>
            <Link to='/blog'>Explore</Link>
          </div>
        </section>
      </div>

    )
  }
}

export default Hero;
