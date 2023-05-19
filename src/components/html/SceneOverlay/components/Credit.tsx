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
  gap: max(10px, 1vmin);
  flex-grow: 1;
  align-self: end;

  user-select: none;
  max-width: 30vmin;

  & > p {
    text-transform: uppercase;
    font-family: var(--font-inter);
    font-weight: 700;
    font-size: max(1.3vmin, 8px);
    color: white;
  }
`;

const BrandGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;

  svg {
    width: 1px;
    flex-grow: 1;
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
