import { SURVEY_UPDATE } from '../store/constants';

export const surveyUpdate = ({ currentIndex, currentView, text, surveyData }) => ({
    type: SURVEY_UPDATE,
    currentIndex,
    currentView,
    text,
    surveyData
});