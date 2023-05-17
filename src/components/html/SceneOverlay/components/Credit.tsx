import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import MightyExperience from '@html/common/svg/MightyExperience';
import Netflix from '@html/common/svg/Netflix';
import MJGroup from '@html/common/svg/MJGroup';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vmin;
  user-select: none;

  & > p {
    text-transform: uppercase;
    font-family: var(--font-inter);
    font-weight: 700;
    font-size: 1.7vmin;
    color: white;
  }
`;

const BrandGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    width: 9vmin;
    min-width: 65px;
  }
`;

export default () => (
  <Wrapper>
    <p>
      {locale.overlayUI.presentedBy}
    </p>

    <BrandGroup>
      <Netflix color="var(--color-cherry)" />
      <MJGroup />
      <MightyExperience />
    </BrandGroup>
  </Wrapper>
);
