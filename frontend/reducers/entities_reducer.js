import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import daysReducer from './days_reducer';
import photoUploadsReducer from './photo_uploads_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  days: daysReducer,
  photoUploads: photoUploadsReducer,
});

export default entitiesReducer;
