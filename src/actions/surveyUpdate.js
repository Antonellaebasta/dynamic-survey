import { SURVEY_UPDATE } from '../store/constants';

export const surveyUpdate = ({ currentIndex, currentView, question }) => ({
    type: SURVEY_UPDATE,
    currentIndex,
    currentView,
    question
});