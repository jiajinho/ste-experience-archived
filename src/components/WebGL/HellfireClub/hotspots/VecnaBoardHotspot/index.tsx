import React, { useEffect, useRef } from 'react';

import config from 'config';
import { LightColor } from '@webgl/config';
import { Event } from '@html/CardOverlay/types';
import useEnvStore from 'stores/useEnvStore';
import useCardStore from 'stores/html/useCardStore';
import useOutlineMeshStore from 'stores/webgl/useOutlineMeshStore';
import useCameraStore from 'stores/webgl/useCameraStore';
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';
import useRegisterHotspot from '../hooks/useRegisterHotspot';
import useAnimation from './useAnimation';

import WireframeBox from '@webgl/debug/WireframeBox';
import VecnaBoard from '@hellfire/components/VecnaBoard';
import Card from '@hellfire/components/Card';

export default (props: JSX.IntrinsicElements["group"]) => {
  /**
   * Hooks
   */
  const env = useEnvStore(state => state.env);

  const flippedEncounter = useCardStore(state => state.flippedEncounter);
  const flippedWhenWhere = useCardStore(state => state.flippedWhenWhere);
  const setCardStore = useCardStore(state => state.set);

  const currentZoom = useCameraStore(state => state.currentZoom);

  const setOutlineMeshStore = useOutlineMeshStore(state => state.set);

  const ref = useRef<THREE.Group>(null);
  const spotlight = useRef<THREE.SpotLight>(null);
  const lightBox = useRef<THREE.Mesh>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const encounterCard = useRef<THREE.Group>(null);
  const whenWhereCard = useRef<THREE.Group>(null);

  useAnimation(encounterCard, whenWhereCard);

  useEffect(() => {
    if (!spotlight.current) return;

    spotlight.current.target.position.set(0, -15, -15);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  useEffect(() => {
    if (env === "development") return;
    if (!encounterCard.current) return;
    if (!whenWhereCard.current) return;
    if (currentZoom !== "vecnaBoard") return;

    setOutlineMeshStore([
      encounterCard.current.children[0] as THREE.Mesh,
      whenWhereCard.current.children[0] as THREE.Mesh
    ]);

    return () => { setOutlineMeshStore([]) }
  }, [currentZoom, env]);

  const triggerSpotlightControl = useTriggerDebugSpotlight(spotlight, lightBox);
  const triggerModelControl = useTriggerDebugModel(ref);

  const triggerZoom = useRegisterHotspot("vecnaBoard");

  /**
   * Not hook
   */
  const handleModelClick = () => {
    triggerModelControl();
    triggerZoom();
  }

  const handleCardClick = (event: Event) => {
    if (env === "development") return;
    if (currentZoom !== "vecnaBoard") return;

    setCardStore("webglEvent", event);
  }

  const handleCallToAction = () => {
    if (currentZoom !== "vecnaBoard") return;

    window.open(config.link.ticketing, "_blank");
  }

  /**
   * Render
   */
  return (
    <group ref={ref} {...props}>
      <VecnaBoard
        onClick={handleModelClick}
        onCallToAction={handleCallToAction}
        rotation={[0, Math.PI / 2, 0]}
      />

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

      <spotLight
        ref={spotlight}
        castShadow
        penumbra={1}
        position={[0, 1.61, 1.49]}
        angle={0.47}
        intensity={3.5}
        distance={6.6}
        color={LightColor.Crimson}
      />

      {env === "development" &&
        <>
          <WireframeBox.Light
            ref={lightBox}
            position={spotlight.current?.position}
            onClick={triggerSpotlightControl}
          />

          <WireframeBox.Camera
            target={cameraTarget}
            position={[0, 1, 0]}
            lookAt={[0, -1, 0]}
            hotspot="vecnaBoard"
          />
        </>
      }
    </group>
  )
}