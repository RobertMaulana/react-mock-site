import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchCategory from '../../action/action-category';
import Fontawesome from 'react-fontawesome';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

class SideNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchCategory();
  }

  renderSidebarNavigation() {
    const { categories } = this.props;
    return categories.map((category, index) => {
      return(
        <a href='#'>
          <li className='sidebar-list' key={index}>
            <Fontawesome className='sidebar-icon' name='chevron-right'>
            </Fontawesome>
            {category.category_name}
          </li>
        </a>
      )
    })
  }
  render() {

    return(
      <div className='side-navigation'>
        <ul>
          <li className='sidebar-title'>Category</li>
          {this.renderSidebarNavigation()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({categories}) {
  return{
    categories
  }
}

export default connect(mapStateToProps, {fetchCategory})(SideNavigation);
