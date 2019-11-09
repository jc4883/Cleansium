import * as API_Day_Util from '../util/days_api_util';

export const RECEIVE_DAY = 'RECEIVE_DAY';
export const REMOVE_DAY = 'REMOVE_DAY';
export const RECEIVE_ALL_DAYS = 'RECEIVE_ALL_DAYS';

const receiveDays = (days) => {
  return ({
    type: RECEIVE_ALL_DAYS,
    days
  })
}

const receiveDay = (day) => {
  return ({
    type: RECEIVE_DAY,
    day,
  })
}

const removeDay = (id) => {
  return ({
    type: REMOVE_DAY,
    dayId: id,
  })
}

export const fetchDays = () => dispatch => {
  return API_Day_Util.fetchDays().then(days => {
    return dispatch(receiveDays(days));
  })
}

export const fetchDay = (id) => dispatch => {
  return API_Day_Util.fetchDay(id).then(day => {
    return dispatch(receiveDay(day));
  })
}

export const createDay = (day) => dispatch => {
  return API_Day_Util.createDay(Day).then(day => {
    return dispatch(receiveDay(day))
  });
}

export const updateDay = (day) => dispatch => {
  return API_Day_Util.updateDay(day).then(day => {
     return dispatch(receiveDay(day))
  })
}

export const deleteDay = (id) => dispatch => { 
  return API_Day_Util.deleteDay(id).then(day => {
    return dispatch(removeDay(day.id))
  })
}