import React from 'react';
import styled from 'styled-components';

import locale from '@/locale';
import config from '@/config';
import api from '@/api';
import { MixpanelEvent } from '@/api/mixpanel';

export const Wrapper = styled.svg`
  aspect-ratio: 98/40;
  height: auto;
  width: auto;

  position: relative;
  display: block;
  cursor: pointer;
  pointer-events: auto;

  & > text {
    user-select: none;
    font-family: var(--font-benguiat);
    font-weight: 700;
    font-size: 12px;
  }
`;

export default () => {
  const handleClick = () => {
    window.open(config.link.ticketing, "_blank");
    api.mixpanel(MixpanelEvent.TICKETING);
  }

  return (
    <Wrapper
      width={98}
      height={40}
      viewBox="0 0 98 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
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

      <text fill="white" y={24} x={12}>
        {locale.overlayUI.ticketBtn}
      </text>
    </Wrapper>
  );
}