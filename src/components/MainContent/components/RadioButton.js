import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from "../../../constants";
import {ANSWER_OPTIONS} from "../../../store/constants";

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0;
`;

const Option = styled.input`
  margin: 10px;
  padding: 7px 0 8px;
  border: none;
  outline: none;
  color: ${COLORS.DARK_GREY};
  cursor: pointer;
`;

const Label = styled.label`
  color: ${COLORS.DARK_GREY};
  font-size: 16px;
  cursor: pointer;
`;

class RadioButton extends React.Component {

  handleChange = event => {
    const { surveyUpdate, surveyObj } = this.props;
    const key = surveyObj.currentView;

    surveyUpdate({ ...surveyObj, surveyData: {...surveyObj.surveyData, [key]: event.target.value} });
  };

  render() {
    const { surveyObj: { currentView, surveyData } } = this.props;

    return (
        <RadioGroup>
          {ANSWER_OPTIONS[currentView].map((option, index) => (
              <RadioWrapper key={`${currentView}-${index}`} name={currentView}>
                <Option type="radio" id={`${currentView}-${index}`} name={currentView} value ={option} checked={option===surveyData[currentView]} onChange={this.handleChange} />
                <Label htmlFor={`${currentView}-${index}`}>{option}</Label>
              </RadioWrapper>
          ))}
        </RadioGroup>
    );
  }
}

RadioButton.propTypes = {
  surveyObj: PropTypes.object.isRequired,
  surveyUpdate: PropTypes.func
};

RadioButton.defaultProps = {
  surveyUpdate: () => {}
};

export default RadioButton;
