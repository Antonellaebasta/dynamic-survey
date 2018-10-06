export const SURVEY_INIT = 'App/Survey/SURVEY_INIT';
export const SURVEY_UPDATE = 'App/Survey/SURVEY_UPDATE';
export const GO_TO_NEXT_VIEW = 'App/Survey/GO_TO_NEXT_VIEW';
export const GO_TO_PREV_VIEW = 'App/Survey/GO_TO_PREV_VIEW';

export const VIEW = {
  AGE: 'age',
  GENDER: 'gender',
  NEEDS: 'needs',
  USER_EXPERIENCE: 'userExperience',
  LOOK_AND_FEEL: 'lookAndFeel',
  COMMENTS: 'comments'
};

export const SURVEY_STEPS = [
  {name: VIEW.AGE, question: 'How old are you?'},
  {name: VIEW.GENDER, question: 'Female or Male?'},
  {name: VIEW.NEEDS, question: 'Overall, how well does the website meet your needs?'},
  {name: VIEW.USER_EXPERIENCE, question: 'How easy was to find what you were looking for?'},
  {name: VIEW.LOOK_AND_FEEL, question: 'How visually appealing is the website?'},
  {name: VIEW.COMMENTS, question: 'Do you have comments to share?'}
];

export const INITIAL_STATE = {
  currentIndex: 0,
  currentView: SURVEY_STEPS[0].name,
  question: SURVEY_STEPS[0].question,
  surveyData: {}
};