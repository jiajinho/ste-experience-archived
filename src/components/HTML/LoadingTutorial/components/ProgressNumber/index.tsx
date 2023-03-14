import React, { useRef } from 'react';
import styled from 'styled-components';
import useAnimation from './useAnimation';

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

export default ({ data }: { data: string }) => {
  const wrapper = useRef<HTMLDivElement>(null);

  useAnimation(wrapper);

  return (
    <Wrapper ref={wrapper}>
      {data}%
    </Wrapper>
  );
}