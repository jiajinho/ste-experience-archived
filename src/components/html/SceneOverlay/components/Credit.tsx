import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import MightyExperience, { Wrapper as $MightyExperience } from '@html/svg/MightyExperience';
import Netflix, { Wrapper as $Netflix } from '@html/svg/Netflix';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  
  user-select: none;

  & > p {
    text-transform: uppercase;
    font-family: var(--font-inter);
    font-weight: 700;
    font-size: 10px;
    
    letter-spacing: 0.2px;
    color: white;
  }
`;

const BrandGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${$MightyExperience} { width: 110px }
  ${$Netflix} { width: 70px }
`;

export default () => (
  <Wrapper>
    <p>
      {locale.overlayUI.presentedBy}
    </p>

    <BrandGroup>
      <Netflix color="white" />
      <MightyExperience />
    </BrandGroup>
  </Wrapper>
);
