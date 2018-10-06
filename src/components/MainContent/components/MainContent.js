import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputText from '../containers/InputText';
import Select from '../containers/Select';
import RadioButton from '../containers/RadioButton';
import { COLORS } from "../../../constants";
import {SURVEY_STEPS, VIEW} from "../../../store/constants";

const Wrapper = styled.div`
  /* Start fallback for non-supporting-grid browsers */
  flex-basis: 60%;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 10px;
  /* End fallback */

  @supports (display: grid) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

const Question = styled.h3`
  color: ${COLORS.DARK_GREY};
  margin-bottom: 50px;
`;

const ProgressBar = styled.div`
  background-color: ${COLORS.GREY};
  width: 100%;
  height: 18px;
  border-radius: 10px;
  margin-bottom: 50px;
`;

const InnerProgressBar = styled.div`
  background-color: ${COLORS.PURPLE};
  width: ${props => ((props.currentIndex + 1) * 17)}%;
  height: inherit;
  border-radius: inherit;
  transition: width 0.3s ease-out;
`;

class MainContent extends React.Component {

  componentDidMount() {
    const { surveyInit, surveyObj } = this.props;

    surveyInit();
    window.history.pushState({surveyObj}, `page${surveyObj.currentIndex}`,  `/${surveyObj.currentView}`);
    window.addEventListener('popstate', this.onPopState);
  }

  onPopState = event => {
    const { surveyUpdate, surveyObj } = this.props;
    const { currentIndex, currentView, surveyData } = event.state;

    surveyUpdate({...surveyObj, currentIndex, currentView, question: SURVEY_STEPS[currentIndex].question, surveyData});
  };

  getAnswerComponent = currentView => {
    switch (currentView) {
      case VIEW.AGE:
      case VIEW.COMMENTS:
        return InputText;
      case VIEW.GENDER:
        return Select;
      case VIEW.NEEDS:
      case VIEW.USER_EXPERIENCE:
      case VIEW.LOOK_AND_FEEL:
        return RadioButton;
      default:
        throw new Error(`No view defined for ${currentView}`)
    }
  };


  render() {
    const { surveyObj: {currentIndex, currentView, question} } = this.props;
    const Answer = this.getAnswerComponent(currentView);
    return (
        <Wrapper>
          <ProgressBar>
            <InnerProgressBar currentIndex={currentIndex} />
          </ProgressBar>
          <Question>
            {currentIndex + 1}. {question}
          </Question>
          <Answer {...this.props} />
        </Wrapper>
    );
  }
}

MainContent.propTypes = {
  surveyObj: PropTypes.object.isRequired
};

MainContent.defaultProps = {
  surveyInit: () => {}
};

export default MainContent;
