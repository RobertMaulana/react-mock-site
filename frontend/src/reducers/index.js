import React from 'react';
import { combineReducers } from 'redux';
import ListNavigation from './ListNavigation';
import ListSidebarNavigation from './ListSidebarNavigation';
import categories from './reducer-category';
import posts from './reducer-posts';

const rootReducer = combineReducers({
  Navigation: ListNavigation,
  SidebarNavigation: ListSidebarNavigation,
  categories,
  posts
})

export default rootReducer;
