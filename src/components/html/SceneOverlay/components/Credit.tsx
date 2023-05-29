import React from 'react';
import styled from 'styled-components';

import locale from '@/locale';
import config from '@/config';
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
  max-width: 200px;

  & > p {
    text-transform: uppercase;
    font-family: var(--font-inter);
    font-weight: 700;
    font-size: max(1.3vmin, 8px);
    color: white;
  }

  @media screen and (min-width: ${config.viewport.md}) {
    max-width: 30vmin;
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
