import React from 'react';
import styled from 'styled-components';

import config from 'config';
import { Camera } from 'types';
import useCameraStore from 'stores/webgl/useCameraStore';
import Arrow, { Viewport } from './Arrow';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default ({ viewport }: {
  viewport: Viewport
}) => {
  const currentZoom = useCameraStore(state => state.currentZoom);
  const goNextZoom = useCameraStore(state => state.goNextZoom);
  const goPrevZoom = useCameraStore(state => state.goPrevZoom);

  const keys = Object.keys(config.zoomSettings) as Camera.Hotspot[];
  const index = keys.findIndex(k => k === currentZoom);

  const prevIndex = (index - 1) < 0 ? keys.length - 1 : index - 1;
  const nextIndex = (index + 1) > keys.length - 1 ? 0 : index + 1;

  const replaceWsWithNewline = (s: string) => {
    return s.trim().replace(/\s/, '\n');
  }

  return (
    <Wrapper>
      <Arrow
        label={replaceWsWithNewline(config.zoomSettings[keys[prevIndex]].name)}
        viewport={viewport}
        arrowDirection="left"
        onClick={goPrevZoom}
      />

      <Arrow
        label={replaceWsWithNewline(config.zoomSettings[keys[nextIndex]].name)}
        viewport={viewport}
        arrowDirection="right"
        onClick={goNextZoom}
      />
    </Wrapper>
  );
}