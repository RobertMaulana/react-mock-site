import { FETCH_POSTS } from '../action/constant';

export default function(state = [], {type, payload}) {
  switch (type) {
    case FETCH_POSTS:
      return payload.data;
    default:
      return state;
  }
}
