import React from 'react';
import styled from 'styled-components';

import locale from 'locale';

import Netflix, { Wrapper as $Netflix } from '@html/svg/Netflix';
import StrangerThings, { Wrapper as $StrangerThings } from '@html/svg/StrangerThings';

export const Wrapper = styled.div`
  width: 160px;

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
  font-family: var(--font-inter);
  font-weight: 900;
  font-size: 16px;

  color: white;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLDivElement>) => (
  <Wrapper ref={ref}>
    <Netflix />

    <StrangerThings />

    <Footer>
      {locale.global.stEncounter}
    </Footer>
  </Wrapper>
));