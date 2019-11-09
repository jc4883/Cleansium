import React from "react";
import DayIndex from "./day_index";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchDays, createDay } from "../../actions/day_actions";

const mapStateToProp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    days: state.entities.days
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchDays: () => dispatch(fetchDays()),
    createDay: day => dispatch(createDay(day))
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(DayIndex);
