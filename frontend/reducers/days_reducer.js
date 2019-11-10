import {
  RECEIVE_ALL_DAYS,
  RECEIVE_DAY,
  REMOVE_DAY
} from "../actions/day_actions";

const daysReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_DAYS:
    debugger
      return Object.assign({}, action.days);
    case RECEIVE_DAY:
      return Object.assign({}, state, { [action.days.id]: action.day });
    case REMOVE_DAY:
      let newState = Object.assign({}, state);
      delete newState[action.dayId];
      return newState;
    default:
      return state;
  }
};

export default daysReducer;
