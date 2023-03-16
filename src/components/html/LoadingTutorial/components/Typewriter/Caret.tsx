import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 36px;
  width: 4px;
  background: var(--color-cherry);

  position: fixed;
  transform: translateY(-2px);
  opacity: 0;
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLDivElement>) => (
  <Wrapper ref={ref} />
));