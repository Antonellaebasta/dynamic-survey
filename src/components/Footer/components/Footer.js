import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DESKTOP, COLORS } from '../../../constants';
import { SURVEY_STEPS, VIEW } from '../../../store/constants';

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

export const NavigationButton = styled.button`
  outline: none;
  font-size: 18px;
  font-weight: bold;
  width: 130px;
  height: 47px;
  border: 2px solid ${props => props.disabled ? COLORS.GREY : COLORS.PURPLE};
  color: ${props => props.disabled ? COLORS.WHITE : COLORS.PURPLE};
  background-color: ${props => props.disabled ? COLORS.GREY : 'transparent'};
  box-shadow: none;
  border-radius: 8px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.1s ease-in-out;
  
  &:hover {
    color: ${COLORS.WHITE};
    background-color: ${props => props.disabled ? COLORS.GREY : COLORS.PURPLE};;
  }
  
  @media ${DESKTOP} {
    width: 200px;
  }
`;

class Footer extends React.Component {
  handleButtonClick = p => {
    const { surveyUpdate, surveyObj } = this.props;
    const { name, text } = SURVEY_STEPS[p];

    surveyUpdate({...surveyObj, currentIndex: p, currentView: name, text});
    window.history.pushState({...surveyObj, currentIndex: p, currentView: name, text}, `page${p}`,  `/${name}`);
  };

  render() {
    const { surveyObj: {currentView, currentIndex, surveyData} } = this.props;
    const isDisabled = !surveyData[currentView];
    const nextButtonText = currentView === VIEW.COMMENTS ? 'Send Survey' : 'Next';

    return (
        <Wrapper>
          {currentView !== VIEW.SUMMARY &&
          <ButtonsWrapper>
            {currentView !== VIEW.AGE && <NavigationButton onClick={() => this.handleButtonClick(currentIndex - 1)}>Prev</NavigationButton>}
            <NavigationButton onClick={() => this.handleButtonClick(currentIndex + 1)} disabled={isDisabled}>{nextButtonText}</NavigationButton>
          </ButtonsWrapper>}
        </Wrapper>
    )
  }
}

Footer.propTypes = {
  surveyUpdate: PropTypes.func,
  surveyObj: PropTypes.object.isRequired
};

Footer.defaultProps = {
  surveyUpdate: () => {}
};

export default Footer;
