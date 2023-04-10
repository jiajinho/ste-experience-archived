import React, { useRef } from 'react';

import { Event } from '@html/CardOverlay/types';
import useEnvStore from 'stores/useEnvStore';
import useCardStore from 'stores/html/useCardStore';
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useRegisterHotspot from './useRegisterHotspot';

import WireframeBox from '@webgl/debug/WireframeBox';
import VecnaBoard from '@hellfire/components/VecnaBoard';
import Card from '@hellfire/components/Card';
import useCameraStore from 'stores/webgl/useCameraStore';

export default (props: JSX.IntrinsicElements["group"]) => {
  const env = useEnvStore(state => state.env);

  const flippedEncounter = useCardStore(state => state.flippedEncounter);
  const flippedWhenWhere = useCardStore(state => state.flippedWhenWhere);
  const setCardStore = useCardStore(state => state.set);

  const currentZoom = useCameraStore(state => state.currentZoom);

  const ref = useRef<THREE.Group>(null);
  const cameraBox = useRef<THREE.Mesh>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const triggerModelControl = useTriggerDebugModel(ref);

  const triggerZoom = useRegisterHotspot("vecnaBoard", cameraBox, cameraTarget);

  const handleClick = () => {
    triggerModelControl();
    triggerZoom();
  }

  const handleCardClick = (event: Event) => {
    if (env === "development") return;
    if (currentZoom !== "vecnaBoard") return;

    setCardStore("event", event);
  }

  return (
    <group ref={ref} {...props}>
      <VecnaBoard onClick={handleClick} />

      <Card.TheEncounter
        position={[-0.1, 0.01, 0.17]}
        rotation={[0, 0.31, 0]}
        onClick={() => handleCardClick("the-encounter")}
        flipped={flippedEncounter}
      />

      <Card.WhenWhere
        position={[-0.05, 0.01, -0.18]}
        rotation={[0, -0.38, 0]}
        onClick={() => handleCardClick("when-where")}
        flipped={flippedWhenWhere}
      />

      <WireframeBox.Camera
        ref={cameraBox}
        target={cameraTarget}
        position={[0, 1, 0]}
        lookAt={[0, -1, 0]}
      />
    </group>
  )
}