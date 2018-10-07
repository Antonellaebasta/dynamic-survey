import { INITIAL_STATE, SURVEY_INIT, SURVEY_UPDATE } from './constants';

const surveyReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SURVEY_INIT:
      return INITIAL_STATE;
    case SURVEY_UPDATE:
      return {...INITIAL_STATE, currentIndex: action.currentIndex, currentView: action.currentView, text: action.text, surveyData: action.surveyData};
    default:
      return state;
  }
};

export default surveyReducers;