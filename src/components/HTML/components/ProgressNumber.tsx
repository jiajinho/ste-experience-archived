import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 160px;
  font-family: var(--font-benguiat);
  letter-spacing: -0.75px;
  color: var(--color-cherry);
`;

export default React.forwardRef(({ data }: {
  data: number
}, ref: React.ForwardedRef<HTMLDivElement>
) => (
  <Wrapper ref={ref}>
    {data}%
  </Wrapper>
));