import React, { useRef } from 'react';

import config from 'config';
import { Event } from '@html/CardOverlay/types';
import useEnvStore from 'stores/useEnvStore';
import useCardStore from 'stores/html/useCardStore';
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useRegisterHotspot from '../hooks/useRegisterHotspot';
import useCameraStore from 'stores/webgl/useCameraStore';
import useAnimation from './useAnimation';

import WireframeBox from '@webgl/debug/WireframeBox';
import VecnaBoard from '@hellfire/components/VecnaBoard';
import Card from '@hellfire/components/Card';

export default (props: JSX.IntrinsicElements["group"]) => {
  const env = useEnvStore(state => state.env);

  const flippedEncounter = useCardStore(state => state.flippedEncounter);
  const flippedWhenWhere = useCardStore(state => state.flippedWhenWhere);
  const setCardStore = useCardStore(state => state.set);

  const currentZoom = useCameraStore(state => state.currentZoom);

  const ref = useRef<THREE.Group>(null);
  const cameraBox = useRef<THREE.Mesh>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const encounterCard = useRef<THREE.Group>(null);
  const whenWhereCard = useRef<THREE.Group>(null);

  useAnimation(encounterCard, whenWhereCard);

  const triggerModelControl = useTriggerDebugModel(ref);
  const triggerZoom = useRegisterHotspot("vecnaBoard", cameraBox, cameraTarget);

  const handleClick = () => {
    triggerModelControl();
    triggerZoom();
  }

  const handleCardClick = (event: Event) => {
    if (env === "development") return;
    if (currentZoom !== "vecnaBoard") return;

    setCardStore("webglEvent", event);
  }

  return (
    <group ref={ref} {...props}>
      <VecnaBoard onClick={handleClick} />

      <Card.TheEncounter
        ref={encounterCard}
        position={config.cards.theEncounter.position}
        rotation={[0, config.cards.theEncounter.rotateY, 0]}
        onClick={() => handleCardClick("the-encounter")}
        flipped={flippedEncounter}
      />

      <Card.WhenWhere
        ref={whenWhereCard}
        position={config.cards.whenWhere.position}
        rotation={[0, config.cards.whenWhere.rotateY, 0]}
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