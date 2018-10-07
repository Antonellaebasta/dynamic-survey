import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Summary = ({ surveyObj: { surveyData }}) => {
  return(
      <SummaryWrapper>
        {Object.entries(surveyData).map(([key, value]) => (<p key={key}>{key}: <b>{value}</b></p>))}
      </SummaryWrapper>
      )
};

Summary.propTypes = {
  surveyObj: PropTypes.object.isRequired
};

export default Summary;