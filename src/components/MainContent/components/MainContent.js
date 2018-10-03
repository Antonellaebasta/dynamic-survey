import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from "../../../constants";

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

const Question = styled.h2`
  color: ${COLORS.DARK_GREY};
`;

class MainContent extends React.Component {
  componentDidMount() {
    this.props.surveyInit();
  }

  render() {
    const { currentIndex, question } = this.props;

    return (
        <Wrapper>
          <Question>
            {currentIndex + 1}. {question}
          </Question>
        </Wrapper>
    );
  }
}

MainContent.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired
};

MainContent.defaultProps = {
  surveyInit: () => {}
};

export default MainContent;
