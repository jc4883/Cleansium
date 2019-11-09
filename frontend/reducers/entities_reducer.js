import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import daysReducer from './days_reducer';
const entitiesReducer = combineReducers({
  users: usersReducer,
  days: daysReducer,
});

export default entitiesReducer;
