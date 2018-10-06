import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from "../../../constants";

const Input = styled.input`
  width: 100%;
  margin: 0;
  padding: 7px 0 8px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${COLORS.YELLOW};
  color: ${COLORS.DARK_GREY};
  font-size: 16px;
  
  &:focus {
    border-color: ${COLORS.PURPLE};
    border-width: 2px;
  }
`;

class InputText extends React.Component {
  state = {
    value: ''
  };

  handleChange = event => {
    this.setState({value: event.target.value});
  };

  handleBlur = () => {
    const { surveyUpdate, surveyObj} = this.props;
    const { value } = this.state;
    const key = surveyObj.currentView;

    surveyUpdate({ ...surveyObj, surveyData: {...surveyObj.surveyData, [key]: value} });
  };

  render() {
    const { surveyObj: { currentView }} = this.props;
    const placeholder = `Insert your ${currentView}`;
    return (
        <Input placeholder={placeholder} onChange={this.handleChange} onBlur={this.handleBlur} />
    );
  }
}

InputText.propTypes = {
  surveyObj: PropTypes.object.isRequired,
  surveyUpdate: PropTypes.func
};

InputText.defaultProps = {
  surveyUpdate: () => {}
};

export default InputText;
