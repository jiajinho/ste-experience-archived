import React, { useEffect, useRef, useState } from 'react';
import { SpotLight } from 'three';

import config, { LightColor } from 'config';
import api from 'api';
import { MixpanelEvent } from 'api/mixpanel';

import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';
import useRegisterHotspot from './hooks/useRegisterHotspot';
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useEnvStore from 'stores/useEnvStore';
import useCameraStore from 'stores/webgl/useCameraStore';
import useHoverHomeEvent from './hooks/useHoverHomeEvent';
import useHoverHotspotEvent from './hooks/useHoverHotspotEvent';

import WireframeBox from '@webgl/debug/WireframeBox';
import ChalkBoard from '@hellfire/components/ChalkBoard';

export default (props: JSX.IntrinsicElements["group"]) => {
  /**
   * Hooks
   */
  const currentZoom = useCameraStore(state => state.currentZoom);
  const env = useEnvStore(state => state.env);

  const ref = useRef<THREE.Group>(null);
  const spotlight = useRef<SpotLight>(null);
  const lightBox = useRef<THREE.Mesh>(null);
  const cameraBox = useRef<THREE.Group>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const [ctaGlow, setCTAGlow] = useState(false);

  const triggerSpotlightControl = useTriggerDebugSpotlight(spotlight, lightBox);
  const triggerModelControl = useTriggerDebugModel(ref);

  const triggerZoom = useRegisterHotspot("chalkBoard", cameraBox, cameraTarget);

  const hoverEvent = {
    home: useHoverHomeEvent("layer1"),
    hotspot: useHoverHotspotEvent("layer1")
  }

  useEffect(() => {
    if (!spotlight.current) return;

    spotlight.current.target.position.set(-10, -22, -15);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  /**
   * Not hook
   */
  const setting = config.zoomSettings["chalkBoard"];

  const handleClick = () => {
    triggerModelControl();
    triggerZoom();
  }

  const handleCallToAction = () => {
    if (currentZoom !== "chalkBoard") return;

    window.open(config.link.ticketing, "_blank");
    api.mixpanel(MixpanelEvent.XPASS_CTA);
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
      <ChalkBoard
        onClick={handleClick}
        cta={{
          onClick: handleCallToAction,
          onPointerEnter: handleCTAPointerEnter,
          onPointerLeave: handleCTAPointerLeave
        }}
        buttonGlow={ctaGlow}
        {...hoverEvent.home}
      />

      <spotLight
        ref={spotlight}
        castShadow
        penumbra={1}
        position={[0, 1.77, 1.68]}
        angle={0.56}
        intensity={5.8}
        distance={4.5}
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
        hotspot="chalkBoard"
      />
    </group>
  )
}