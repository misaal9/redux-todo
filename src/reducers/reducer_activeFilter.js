import { SET_FILTER } from '../actions';
import { FILTER } from '../actions'

export const ActiveFilterReducer = (state=FILTER.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}
