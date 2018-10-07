export const SURVEY_INIT = 'App/Survey/SURVEY_INIT';
export const SURVEY_UPDATE = 'App/Survey/SURVEY_UPDATE';

export const VIEW = {
  AGE: 'age',
  GENDER: 'gender',
  NEEDS: 'needs',
  USER_EXPERIENCE: 'userExperience',
  LOOK_AND_FEEL: 'lookAndFeel',
  COMMENTS: 'comments',
  SUMMARY: 'summary'
};

export const SURVEY_STEPS = [
  {name: VIEW.AGE, text: 'How old are you'},
  {name: VIEW.GENDER, text: 'Female or Male'},
  {name: VIEW.NEEDS, text: 'Overall, how well does the website meet your needs'},
  {name: VIEW.USER_EXPERIENCE, text: 'How easy was to find what you were looking for'},
  {name: VIEW.LOOK_AND_FEEL, text: 'How visually appealing is the website'},
  {name: VIEW.COMMENTS, text: 'Do you have any other comments about how the website can be improved'},
  {name: VIEW.SUMMARY, text: 'Survey sent, thank you for your time!'}
];

export const INITIAL_STATE = {
  currentIndex: 0,
  currentView: SURVEY_STEPS[0].name,
  text: SURVEY_STEPS[0].text,
  surveyData: {}
};

export const ANSWER_OPTIONS = {
  gender: ['F', 'M'],
  needs: ['Extremely well', 'Very well', 'Not so well', 'Not at all well'],
  userExperience: ['Extremely easy', 'Very easy', 'Not so easy', 'Not at all easy'],
  lookAndFeel: ['Extremely appealing', 'Very appealing', 'Not so appealing', 'Not at all appealing']
};