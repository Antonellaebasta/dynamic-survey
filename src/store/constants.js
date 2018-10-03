export const SURVEY_INIT = 'App/Survey/SURVEY_INIT';
export const SURVEY_UPDATE = 'App/Survey/SURVEY_UPDATE';
export const GO_TO_NEXT_PAGE = 'App/Survey/GO_TO_NEXT_PAGE';
export const GO_TO_PREV_PAGE = 'App/Survey/GO_TO_PREV_PAGE';

export const PAGES = {
  AGE: 'age',
  GENDER: 'gender',
  NEEDS: 'needs',
  USER_EXPERIENCE: 'userExperience',
  LOOK_AND_FEEL: 'lookAndFeel',
  COMMENTS: 'comments'
};

export const SURVEY_STEPS = [
  {name: PAGES.AGE, question: 'How old are you?'},
  {name: PAGES.GENDER, question: 'Female or Male?'},
  {name: PAGES.NEEDS, question: 'Overall, how well does the website meet your needs?'},
  {name: PAGES.USER_EXPERIENCE, question: 'How easy was to find what you were looking for?'},
  {name: PAGES.LOOK_AND_FEEL, question: 'How visually appealing is the website?'},
  {name: PAGES.COMMENTS, question: 'Do you have comments to share?'}
];

export const INITIAL_STATE = {
  currentIndex: 0,
  currentPage: SURVEY_STEPS[0].name,
  question: SURVEY_STEPS[0].question,
  surveyData: {}
};