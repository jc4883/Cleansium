import React from "react";
import DayForm from "./day_form";
import { connect } from "react-redux";
import { createDay, updateDay } from "../../actions/day_actions";

const mapStateToProp = (state, ownProps) => {
  return {
    // currentUser: state.entities.users[state.session.id]
    formType: "update",
    buttonText: "Update entry"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // logout: () => dispatch(logout())
    // fetchDays: () => dispatch(fetchDays()),
    // createDay: day => dispatch(createDay(day)),
    // updateDay: day => dispatch(receiveDay(day)),
    processForm: day => dispatch(updateDay(day))
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(DayForm);
