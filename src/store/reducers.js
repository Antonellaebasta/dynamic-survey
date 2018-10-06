//import { combineReducers } from 'redux';
import {INITIAL_STATE, SURVEY_INIT, SURVEY_UPDATE, GO_TO_NEXT_VIEW, GO_TO_PREV_VIEW, SURVEY_STEPS } from './constants';

const surveyReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SURVEY_INIT:
      return INITIAL_STATE;
    case SURVEY_UPDATE:
      console.log(action);
      return {...INITIAL_STATE, currentIndex: action.currentIndex, currentView: action.currentView, question: action.question, surveyData: action.surveyData};
    default:
      return state;
  }
};

export default surveyReducers;