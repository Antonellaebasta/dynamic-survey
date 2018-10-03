import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from "../../../constants";
import {SURVEY_STEPS} from "../../../store/constants";

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
    const { currentPage, currentIndex, surveyInit } = this.props;
    const stateObj = { currentPage, currentIndex };
    surveyInit();
    window.history.pushState({ stateObj }, `page${currentIndex}`,  `/${currentPage}`);
  }

  render() {
    const { currentIndex, question } = this.props;

    return (
        <Wrapper>
          <ProgressBar>
            <InnerProgressBar currentIndex={currentIndex} />
          </ProgressBar>
          <Question>
            {currentIndex + 1}. {question}
          </Question>
        </Wrapper>
    );
  }
}

MainContent.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  currentPage: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired
};

MainContent.defaultProps = {
  surveyInit: () => {}
};

export default MainContent;
