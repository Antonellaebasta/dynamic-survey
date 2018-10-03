import React from 'react';
import styled from 'styled-components';
import { DESKTOP, COLORS } from '../constants';
//import logo from '../../logo.svg';

const Wrapper = styled.div`
  /* Start fallback for non-supporting-grid browsers */
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  color: ${COLORS.BROWN};
  background-color: ${COLORS.YELLOW};
  /* End fallback */

  @supports (display: grid) {
    grid-column: 1 / span 3;
    grid-row: 1;
  }
`;

const ContentWrapper = styled.div`
  margin: auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 10px;

  @media ${DESKTOP} {
    font-size: 36px;
  }
`;

const Header = () => (
    <Wrapper>
      <ContentWrapper>
        <Title>Dynamic Survey</Title>
      </ContentWrapper>
    </Wrapper>
);

export default Header;
