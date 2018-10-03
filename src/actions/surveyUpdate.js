import { SURVEY_UPDATE } from '../store/constants';

export const surveyUpdate = ({ currentIndex, currentPage, question }) => ({
    type: SURVEY_UPDATE,
    currentIndex,
    currentPage,
    question
});