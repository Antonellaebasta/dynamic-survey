import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS, DESKTOP } from "../../../constants";
import { VIEW } from "../../../store/constants";

const Input = styled.input`
  width: 100%;
  margin: 0;
  padding: 7px 0 8px;
  border: none;
  outline: none;
  border-bottom: 2px solid ${COLORS.YELLOW};
  color: ${COLORS.DARK_GREY};
  font-size: 16px;
  
  &:focus {
    border-color: ${COLORS.PURPLE};
    border-width: 2px;
  }
  
  @media ${DESKTOP} {
    width: 65%;
  }
`;

class InputText extends React.Component {
  constructor(props) {
    super(props);
    const { surveyObj: { surveyData, currentView }} = props;
    this.state = {
      inputValue: surveyData[currentView] || ''
    }
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleBlur = () => {
    const { surveyUpdate, surveyObj} = this.props;
    const { inputValue } = this.state;
    const key = surveyObj.currentView;

    surveyUpdate({ ...surveyObj, surveyData: {...surveyObj.surveyData, [key]: inputValue} });
  };

  render() {
    const { surveyObj: { currentView }} = this.props;
    const { inputValue } = this.state;
    const placeholder = `Insert your ${currentView}`;
    const inputType = currentView === VIEW.AGE ? 'number' : 'text';

    return (
        <Input placeholder={placeholder} type={inputType} onChange={this.handleChange} onBlur={this.handleBlur} value={inputValue} />
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
