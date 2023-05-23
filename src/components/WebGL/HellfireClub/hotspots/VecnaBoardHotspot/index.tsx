import React, { useEffect, useRef, useState } from 'react';

import config, { LightColor } from 'config';
import api from 'api';
import { MixpanelEvent } from 'api/mixpanel';

import { Card as CardType } from 'types';
import useEnvStore from 'stores/useEnvStore';
import useCardStore from 'stores/html/useCardStore';
import useOutlineMeshStore from 'stores/webgl/useOutlineMeshStore';
import useCameraStore from 'stores/webgl/useCameraStore';
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';
import useRegisterHotspot from '../hooks/useRegisterHotspot';
import useHoverHomeEvent from '../hooks/useHoverHomeEvent';
import useHoverHotspotEvent from '../hooks/useHoverHotspotEvent';
import useAnimation from './useAnimation';

import WireframeBox from '@webgl/debug/WireframeBox';
import VecnaBoard from '@hellfire/components/VecnaBoard';
import Card from '@hellfire/components/Card';

export default (props: JSX.IntrinsicElements["group"]) => {
  /**
   * Hooks
   */
  const env = useEnvStore(state => state.env);
  const setCardStore = useCardStore(state => state.set);
  const currentZoom = useCameraStore(state => state.currentZoom);
  const setOutlineMeshStore = useOutlineMeshStore(state => state.set);

  const ref = useRef<THREE.Group>(null);
  const spotlight = useRef<THREE.SpotLight>(null);
  const lightBox = useRef<THREE.Mesh>(null);
  const cameraBox = useRef<THREE.Group>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const encounterCard = useRef<THREE.Group>(null);
  const whenWhereCard = useRef<THREE.Group>(null);

  const [ctaGlow, setCTAGlow] = useState(false);

  const hoverEvent = {
    home: useHoverHomeEvent("layer1"),
    hotspot: useHoverHotspotEvent("layer1")
  }

  useAnimation(encounterCard, whenWhereCard);

  useEffect(() => {
    if (!spotlight.current) return;

    spotlight.current.target.position.set(-1, -9, -19);
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

  const triggerZoom = useRegisterHotspot("vecnaBoard", cameraBox, cameraTarget);

  /**
   * Not hook
   */
  const setting = config.zoomSettings["vecnaBoard"];

  const handleModelClick = () => {
    triggerModelControl();
    triggerZoom();
  }

  const handleCardClick = (event: CardType.Event) => {
    if (env === "development") return;
    if (currentZoom !== "vecnaBoard") return;

    setCardStore("webglEvent", event);
  }

  const handleCallToAction = () => {
    if (currentZoom !== "vecnaBoard") return;

    window.open(config.link.ticketing, "_blank");
    api.mixpanel(MixpanelEvent.EVENT_SUMMARY_CTA);
  }

  const handleCTAPointerEnter = () => {
    hoverEvent.hotspot.onPointerEnter();
    setCTAGlow(true);
  }

  const handleCTAPointerLeave = () => {
    hoverEvent.hotspot.onPointerLeave();
    setCTAGlow(false);
  }

  /**
   * Render
   */
  return (
    <group ref={ref} {...props}>
      <VecnaBoard
        onClick={handleModelClick}
        rotation={[0, Math.PI / 2, 0]}
        cta={{
          onClick: handleCallToAction,
          onPointerEnter: handleCTAPointerEnter,
          onPointerLeave: handleCTAPointerLeave
        }}
        buttonGlow={ctaGlow}
        {...hoverEvent.home}
      />

      <Card.TheEncounter
        ref={encounterCard}
        position={config.cards.theEncounter.position}
        rotation={[0, config.cards.theEncounter.rotateY, 0]}
        onClick={() => handleCardClick("the-encounter")}
        {...hoverEvent.hotspot}
      />

      <Card.WhenWhere
        ref={whenWhereCard}
        position={config.cards.whenWhere.position}
        rotation={[0, config.cards.whenWhere.rotateY, 0]}
        onClick={() => handleCardClick("when-where")}
        {...hoverEvent.hotspot}
      />

      <spotLight
        ref={spotlight}
        castShadow
        penumbra={1}
        position={[0.22, 1.32, 2.95]}
        angle={0.32}
        intensity={6.6}
        distance={7.8}
        color={LightColor.Crimson}
      />

      {(env === "development" || env === "staging") &&
        <WireframeBox.Light
          ref={lightBox}
          position={spotlight.current?.position}
          onClick={triggerSpotlightControl}
        />
      }

      <WireframeBox.Camera
        ref={cameraBox}
        target={cameraTarget}
        position={setting.cameraBox.position}
        lookAt={setting.cameraBox.lookAt}
        hotspot="vecnaBoard"
      />
    </group>
  )
}