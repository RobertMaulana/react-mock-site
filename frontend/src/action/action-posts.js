import { FETCH_POSTS } from './constant';
import axios from 'axios';

const URL = 'http://localhost:3001/posts';

export const fetchPosts = () => {
  const request = axios.get(`${URL}`);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}
