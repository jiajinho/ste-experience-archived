import React from 'react';
import styled from 'styled-components';

import locale from 'locale';
import { IntrinsicHTML } from 'types';

import Netflix, { Wrapper as $Netflix } from '@html/common/svg/Netflix';
import StrangerThings, { Wrapper as $StrangerThings } from '@html/common/svg/StrangerThings';

export const Wrapper = styled.div`
  --width: 160px;

  width: var(--width);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(var(--width) / 16);

  user-select: none;

  ${$Netflix} { width: 40% }
  ${$StrangerThings} { width: 100% }
`;

const Footer = styled.p(({ $color }: {
  $color: string
}) => `
  text-transform: uppercase;
  font-family: var(--font-inter);
  font-weight: 900;
  font-size: calc(var(--width) / 13);

  color: ${$color};
`);

export default React.forwardRef(({ color, altColor = 'white', ...props }: {
  color?: string,
  altColor?: string
} & IntrinsicHTML<"div">,
  ref: React.ForwardedRef<HTMLDivElement>
) => (
  <Wrapper ref={ref} {...props}>
    <Netflix color={color} />
    <StrangerThings color={color} />

    <Footer $color={altColor}>
      {locale.global.stEncounter}
    </Footer>
  </Wrapper>
));