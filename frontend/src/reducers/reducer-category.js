import { FETCH_CATEGORY } from '../action/constant';

export default function(state = [], {type, payload}) {

  switch (type) {
    case FETCH_CATEGORY:
      return payload.data
    default:
      return state;
  }
}
