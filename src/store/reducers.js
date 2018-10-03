//import { combineReducers } from 'redux';
import {INITIAL_STATE, SURVEY_INIT, SURVEY_UPDATE, GO_TO_NEXT_PAGE, GO_TO_PREV_PAGE, SURVEY_STEPS } from './constants';

const surveyReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SURVEY_INIT:
      return INITIAL_STATE;
    case SURVEY_UPDATE:
      return {...INITIAL_STATE, currentIndex: action.currentIndex, currentPage: action.currentPage, question: action.question};
    default:
      return state;
  }
};

export default surveyReducers;