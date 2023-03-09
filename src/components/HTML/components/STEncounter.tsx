import React from 'react';
import styled from 'styled-components';

import fonts from 'fonts';
import locale from 'locale';

import Netflix, { Wrapper as $Netflix } from '../svg/Netflix';
import StrangerThings, { Wrapper as $StrangerThings } from '../svg/StrangerThings';

const Wrapper = styled.div`
  position: fixed;
  width: 160px;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  ${$Netflix} { width: 40% }
  ${$StrangerThings} { width: 100% }
`;

const Footer = styled.p`
  margin-top: 4px;

  text-transform: uppercase;
  font-family: ${fonts.inter.style.fontFamily};
  font-weight: 900;
  font-size: 14px;

  color: white;
`;

export default () => (
  <Wrapper>
    <Netflix />

    <StrangerThings />

    <Footer>
      {locale.global.stEncounter}
    </Footer>
  </Wrapper>
);