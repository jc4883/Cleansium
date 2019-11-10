import React from "react";
import DayForm from "./day_form";
import { connect } from "react-redux";
import { createDay, updateDay } from "../../actions/day_actions";

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
    // logout: () => dispatch(logout())
    // fetchDays: () => dispatch(fetchDays()),
    // createDay: day => dispatch(createDay(day)),
    // updateDay: day => dispatch(receiveDay(day)),
    processForm: day => dispatch(createDay(day))
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(DayForm);
