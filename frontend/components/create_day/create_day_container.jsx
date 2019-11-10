import React from "react";
import CreateDayForm from "./create_day_form";
import { connect } from "react-redux";
import { createDay, updateDay } from "../../actions/day_actions";
import { createPhotoUpload } from '../../actions/photo_upload_actions';
const mapStateToProp = (state, ownProps) => {
  return {
    // currentUser: state.entities.users[state.session.id]
    formType: "create",
    buttonText: "Create entry",
    dayIndex: ownProps.match.params.day_index,
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: day => dispatch(createDay(day)),
    createPhotoUpload: (dayId, formData) => dispatch(createPhotoUpload(dayId, formData)),
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(CreateDayForm);
