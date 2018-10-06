import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {COLORS} from "../../../constants";

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 16px 0 8px;
`;

const InputText = styled.input`
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

const Label = styled.span`
  position: absolute;
  left: 0;
  top: ${props => props.focused ? 7 : 25}px;
  font-size: ${props => props.focused ? 12 : 16}px;
  color: ${props => props.focused ? COLORS.PURPLE : COLORS.DARK_GREY};
  transition: all 0.2s;
`;

const AgeView = ({ currentView }) => {
  return(
      <InputWrapper>
        <InputText/>
        <Label>Insert your {currentView}</Label>
      </InputWrapper>
  )
};

AgeView.propTypes = {
  currentView: PropTypes.string.isRequired
};

export default AgeView;