import React from 'react';
import { combineReducers } from 'redux';
import ListNavigation from './ListNavigation';
import ListSidebarNavigation from './ListSidebarNavigation';
import categories from './reducer-category';

const rootReducer = combineReducers({
  Navigation: ListNavigation,
  SidebarNavigation: ListSidebarNavigation,
  categories
})

export default rootReducer;
