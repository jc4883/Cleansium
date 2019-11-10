import { REMOVE_PHOTO_UPLOAD, RECEIVE_ALL_PHOTO_UPLOADS, RECEIVE_PHOTO_UPLOAD } from '../actions/photo_upload_actions';

const photoUploadsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case REMOVE_PHOTO_UPLOAD:
      let newState = Object.assign({}, state);
      delete newState.uploads[action.photoUploadId];
      return newState;
    case RECEIVE_ALL_PHOTO_UPLOADS:
      if (Object.values(action.photoUploads).length === 0) {
        return {uploads: {}};
      } else {
        return Object.assign(action.photoUploads)
      }
      // return Object.assign(action.photoUploads, state )
    case RECEIVE_PHOTO_UPLOAD:
      const key = Object.keys(action.photoUpload.uploads)[0];
      if (Object.values(state).length === 0) {
        return Object.assign({key: key }, {uploads : Object.assign({}, {[action.photoUpload.uploads[key].id] : action.photoUpload.uploads[key]})} )
      } else {
        return Object.assign({key: key}, {uploads : Object.assign(state.uploads, {[action.photoUpload.uploads[key].id] : action.photoUpload.uploads[key]})} )
      }
      // let uploads = Object.assign(state.photoUpload.uploads, action.photoUpload.uploads)
      //return Object.assign({project_title : action.photoUpload.project_title}, {uploads : Object.assign(state.uploads, {[action.photoUpload.uploads[key].id] : action.photoUpload.uploads[key]})} )
      return state;
      // return Object.assign({project_title : action.photoUpload.project_title}, {created_at : action.photoUpload.uploads[key].created_at}, {uploads : Object.assign(state.uploads, {[action.photoUpload.uploads[key].id] : action.photoUpload.uploads[key]})} )
      
    default: 
      return state;
  }
}

export default photoUploadsReducer;