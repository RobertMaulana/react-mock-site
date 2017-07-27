import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';

class Navigation extends Component {

  renderListNavigation() {
    const { Navigation } = this.props;
    return Navigation.map((listNavigation, index) => {
      return(
        <li className='navigation-list' key={index}>
          <Link to={`/${listNavigation.route}`}>{listNavigation.name}</Link>
        </li>
      )
    })
  }
  render() {
    return(
      <div className='navigation-container'>
        <div className='logo-container'>
          <div className='burger-menu'>
            <FontAwesome name='bars' size='2x' aria-hidden="true"></FontAwesome>
          </div>
          <a href='#'>Logo</a>
        </div>
        <ul className='navigation gadget-hide-nav'>
          {this.renderListNavigation()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({Navigation}) {
  return{
    Navigation
  }
}

export default connect(mapStateToProps)(Navigation);
