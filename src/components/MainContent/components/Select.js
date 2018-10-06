import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from "../../../constants";
import { ANSWER_OPTIONS } from '../../../store/constants';

const SelectWrapper = styled.select`
  width: 100%;
  margin: 0;
  padding: 7px 0 8px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${COLORS.YELLOW};
  color: ${COLORS.DARK_GREY};
  font-size: 16px;
`;

const Option = styled.option`
  width: 100%;
  margin: 0;
  padding: 7px 0 8px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${COLORS.YELLOW};
  color: ${COLORS.DARK_GREY};
  font-size: 16px;
`;

class Select extends React.Component {

  handleChange = event => {
    const { surveyUpdate, surveyObj } = this.props;
    const key = surveyObj.currentView;
    surveyUpdate({ ...surveyObj, surveyData: {...surveyObj.surveyData, [key]: event.target.value} });
  };

  render() {
    const { surveyObj: { currentView } } = this.props;
    const placeholder = `Select ${currentView}`;

    return (
        <SelectWrapper placeholder={placeholder} onChange={this.handleChange}>
          {ANSWER_OPTIONS[currentView].map((option, index) => (<Option key={index} value={option}>{option}</Option>))}
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
