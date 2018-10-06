import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AgeView from './AgeView';
import GenderView from './GenderView';
import NeedsView from './NeedsView';
import UserExperienceView from './UserExperienceView';
import LookAndFeelView from './LookAndFeelView';
import CommentsView from './CommentsView';
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
    const { surveyInit, currentIndex, currentView } = this.props;

    surveyInit();
    window.history.pushState({currentIndex, currentView}, `page${currentIndex}`,  `/${currentView}`);
    window.addEventListener('popstate', this.onPopState);
  }

  onPopState = event => {
    const { surveyUpdate } = this.props;
    const { currentIndex, currentView } = event.state;

    surveyUpdate({currentIndex, currentView, question: SURVEY_STEPS[currentIndex].question});
  };

  getAnswerComponent = currentView => {
    switch (currentView) {
      case VIEW.AGE:
        return AgeView;
      case VIEW.GENDER:
        return GenderView;
      case VIEW.NEEDS:
        return NeedsView;
      case VIEW.USER_EXPERIENCE:
        return UserExperienceView;
      case VIEW.LOOK_AND_FEEL:
        return LookAndFeelView;
      case VIEW.COMMENTS:
        return CommentsView;
      default:
        throw new Error(`No view defined for ${currentView}`)
    }
  };


  render() {
    const { currentIndex, currentView, question } = this.props;
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
  currentIndex: PropTypes.number.isRequired,
  currentView: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired
};

MainContent.defaultProps = {
  surveyInit: () => {}
};

export default MainContent;
