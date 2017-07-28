import { FETCH_CATEGORY } from './constant';
import axios from 'axios';

const URL = 'http://localhost:3001/category';

export const fetchCategory = () => {
  const request = axios.get(`${URL}`);
  return {
    type: FETCH_CATEGORY,
    payload: request
  }
}
