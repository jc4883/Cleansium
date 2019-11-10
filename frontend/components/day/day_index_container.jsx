<<<<<<< HEAD
import React from "react";
import DayIndex from "./day_index";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchDays, createDay } from "../../actions/day_actions";
=======
import React from 'react';
import DayIndex from './day_index';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchDays, createDay } from '../../actions/day_actions';
>>>>>>> c031285717795a9d674e4e487244b502ed5af249

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

<<<<<<< HEAD
export default connect(
  mapStateToProp,
  mapDispatchToProps
)(DayIndex);
=======
export default connect(mapStateToProp, mapDispatchToProps)(DayIndex)
>>>>>>> c031285717795a9d674e4e487244b502ed5af249
