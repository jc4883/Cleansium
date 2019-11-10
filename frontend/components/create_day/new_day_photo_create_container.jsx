import React from 'react';
import NewDayPhotoCreate from './new_day_photo_create';
import { connect } from 'react-redux';
import { fetchDays } from '../../actions/day_actions';
import { createPhotoUpload, fetchPhotoUploads } from '../../actions/photo_upload_actions';

const mapStateToProp = (state, ownProps) => {
  return {
    days: state.entities.days,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      fetchDays: () => dispatch(fetchDays()),
      createPhotoUpload: (dayId, formData) => dispatch(createPhotoUpload(dayId, formData)),
  };
};


export default connect(mapStateToProp, mapDispatchToProps)(NewDayPhotoCreate) 