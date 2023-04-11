import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div(({ $height }: {
  $height: number
}) => `
  height: ${$height}px;
  width: 4px;
  background: var(--color-cherry);

  position: fixed;
  transform: translateY(1px);
  opacity: 0;
`);

export default React.forwardRef(({ height }: {
  height: number
}, ref: React.ForwardedRef<HTMLDivElement>) => (
  <Wrapper ref={ref} $height={height} />
));