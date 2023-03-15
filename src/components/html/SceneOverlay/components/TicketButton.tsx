import locale from 'locale';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.svg`
  aspect-ratio: 98/40;
  height: auto;
  width: auto;

  position: relative;
  display: block;
  cursor: pointer;

  & > text {
    
    font-family: var(--font-benguiat);
  }
`;

export default () => {
  const router = useRouter();

  const goToTicketPage = () => {
    router.push("https://www.google.com/");
  }

  return (
    <Wrapper
      width={98}
      height={40}
      viewBox="0 0 98 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M97.4 39.18H0V0H97.4V39.18ZM1.2 37.98H96.21V1.2H1.2V37.99V37.98Z"
        fill="#EC1A3B"
      />
      <path
        d="M94.4102 36.19V2.98999L2.99015 2.98999V36.19L94.4102 36.19Z"
        fill="black"
      />
      <path
        d="M95.0101 36.7899H2.39014V2.38989H95.0001V36.7799L95.0101 36.7899ZM3.59014 35.5899H93.8101V3.58989H3.59014V35.5899Z"
        fill="#EC1A3B"
      />

      <text
        x={18} y={25}
        fill="var(--color-bone)"
      >
        {locale.overlayUI.ticketBtn}
      </text>
    </Wrapper>
  );
}