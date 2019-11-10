import React from "react";
import UpdateDayForm from "./update_day_form";
import { connect } from "react-redux";
import { createDay, updateDay } from "../../actions/day_actions";
import { createPhotoUpload, fetchPhotoUploads } from '../../actions/photo_upload_actions';
import { logout } from '../../actions/session_actions';
const mapStateToProp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    day: state.entities.days[ownProps.match.params.dayId],
    formType: "update",
    buttonText: "Update entry",
    photoUploads: state.entities.photoUploads.uploads,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    processForm: day => dispatch(updateDay(day)),
    createPhotoUpload: (dayId, formData) => dispatch(createPhotoUpload(dayId, formData)),
    fetchPhotoUploads: (dayId) => dispatch(fetchPhotoUploads(dayId)),
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(UpdateDayForm);
