import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from "../../../constants";
import {ANSWER_OPTIONS} from "../../../store/constants";

const RadioGroup = styled.div`
  width: 100%;
`;

const Option = styled.input`
  width: 100%;
  margin: 10px;
  padding: 7px 0 8px;
  border: none;
  outline: none;
  color: ${COLORS.DARK_GREY};
  font-size: 16px;
`;

class RadioButton extends React.Component {

  handleChange = event => {
    const { surveyUpdate, surveyObj } = this.props;
    const key = surveyObj.currentView;
    surveyUpdate({ ...surveyObj, surveyData: {...surveyObj.surveyData, [key]: event.target.value} });
  };

  render() {
    const { surveyObj: {currentView} } = this.props;

    return (
        <RadioGroup name={currentView} onChange={this.handleChange}>
          {ANSWER_OPTIONS[currentView].map((option, index) => <Option key={index} type="radio" value={option} /> )}
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
