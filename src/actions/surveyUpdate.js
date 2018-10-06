import { SURVEY_UPDATE } from '../store/constants';

export const surveyUpdate = ({ currentIndex, currentView, question, surveyData }) => ({
    type: SURVEY_UPDATE,
    currentIndex,
    currentView,
    question,
    surveyData
});