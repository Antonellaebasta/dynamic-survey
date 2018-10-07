import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS, DESKTOP } from "../../../constants";
import { ANSWER_OPTIONS } from '../../../store/constants';

const SelectWrapper = styled.select`
  width: 100%;
  min-height: 34px;
  margin: 0;
  padding: 8px;
  border: none;
  outline: none;
  appearance: none;
  border-radius: 0;
  border-bottom: 2px solid ${COLORS.YELLOW};
  background-color: transparent;
  color: ${COLORS.DARK_GREY};
  font-size: 16px;
  cursor: pointer;
  
  @media ${DESKTOP} {
    width: 65%;
  }
`;

class Select extends React.Component {
  handleChange = event => {
    const { surveyUpdate, surveyObj } = this.props;
    const key = surveyObj.currentView;

    surveyUpdate({ ...surveyObj, surveyData: {...surveyObj.surveyData, [key]: event.target.value} });
  };

  render() {
    const { surveyObj: { currentView, surveyData } } = this.props;
    const optionSelected = surveyData[currentView] || `Select your ${currentView}`;

    return (
        <SelectWrapper onChange={this.handleChange}>
          <option value={optionSelected}>{optionSelected}</option>
          {ANSWER_OPTIONS[currentView].map((option, index) => (<option key={index} value={option}>{option}</option>))}
        </SelectWrapper>
    );
  }
}

Select.propTypes = {
  surveyObj: PropTypes.object.isRequired,
  surveyUpdate: PropTypes.func
};

Select.defaultProps = {
  surveyUpdate: () => {}
};

export default Select;
