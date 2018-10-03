import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DESKTOP, COLORS } from '../../../constants';
import { SURVEY_STEPS, PAGES } from '../../../store/constants';

const Wrapper = styled.div`
  /* Start fallback for non-supporting-grid browsers */
  flex-basis: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.BROWN};
  text-align: center;
  /* End fallback */

  @supports (display: grid) {
    grid-column: 1 / 4;
    grid-row: 3 / 4;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavigationButton = styled.button`
  outline: none;
  font-size: 18px;
  font-weight: bold;
  width: 130px;
  height: 47px;
  border: 2px solid ${COLORS.PURPLE};
  color: ${COLORS.PURPLE};
  background-color: transparent;
  box-shadow: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  
  &:hover {
    color: ${COLORS.WHITE};
    background-color: ${COLORS.PURPLE};
  }
  
  @media ${DESKTOP} {
    width: 200px;
  }
`;

class Footer extends React.Component {
  handleButtonClick = p => {
    const { surveyUpdate, currentPage, currentIndex } = this.props;

    surveyUpdate({currentIndex: p, currentPage: SURVEY_STEPS[p].name, question: SURVEY_STEPS[p].question});
    window.history.pushState({currentIndex: p, currentPage: SURVEY_STEPS[p].name}, `page${p}`,  `/${currentPage}`);
  };

  render() {
    const { currentPage, currentIndex } = this.props;
    return (
        <Wrapper>
          <ButtonsWrapper>
            {currentPage !== PAGES.AGE && <NavigationButton onClick={() => this.handleButtonClick(currentIndex - 1)}>Prev</NavigationButton>}
            {currentPage !== PAGES.COMMENTS && <NavigationButton onClick={() => this.handleButtonClick(currentIndex + 1)}>Next</NavigationButton>}
            {currentPage === PAGES.COMMENTS && <NavigationButton>Send Survey</NavigationButton>}
          </ButtonsWrapper>
        </Wrapper>
    )
}
};

Footer.propTypes = {
  surveyUpdate: PropTypes.func,
  currentPage: PropTypes.string.isRequired,
  currentIndex: PropTypes.number.isRequired
};

Footer.defaultProps = {
  surveyUpdate: () => {}
};

export default Footer;
