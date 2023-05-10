import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import config from 'config';
import { LightColor } from '@webgl/config';
import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';
import useRegisterHotspot from '@webgl/HellfireClub/hotspots/hooks/useRegisterHotspot';
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useEnvStore from 'stores/useEnvStore';
import useHoverHomeEvent from '../hooks/useHoverHomeEvent';
import useHoverHotspotEvent from '../hooks/useHoverHotspotEvent';
import useCardEvent from './useCardEvent';

import WireframeBox from '@webgl/debug/WireframeBox';
import Shelf from '@hellfire/components/Shelf';

export default (props: JSX.IntrinsicElements["group"]) => {
  /**
   * Hooks
   */
  const env = useEnvStore(state => state.env);

  const ref = useRef<THREE.Group>(null);
  const topLight = useRef<THREE.SpotLight>(null);
  const topLightBox = useRef<THREE.Mesh>(null);
  const bottomLight = useRef<THREE.SpotLight>(null);
  const bottomLightBox = useRef<THREE.Mesh>(null);
  const cameraBox = useRef<THREE.Group>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const triggerTopLightControl = useTriggerDebugSpotlight(topLight, topLightBox);
  const triggerBottomLightControl = useTriggerDebugSpotlight(bottomLight, bottomLightBox);
  const triggerModelControl = useTriggerDebugModel(ref);

  const triggerZoom = useRegisterHotspot("shelf", cameraBox, cameraTarget);

  const hoverEvent = {
    home: useHoverHomeEvent("layer1"),
    hotspot1: useHoverHotspotEvent("layer1"),
    hotspot2: useHoverHotspotEvent("layer2")
  }

  useEffect(() => {
    if (!topLight.current) return;
    if (!bottomLight.current) return;

    topLight.current.target.position.set(1, -25, -20);
    topLight.current.target.updateMatrixWorld();

    bottomLight.current.target.position.set(1, -5, -20);
    bottomLight.current.target.updateMatrixWorld();
  }, []);

  const elevenClick = useCardEvent("merchEleven", triggerZoom);
  const vecnaClick = useCardEvent("merchVecna", triggerZoom);

  /**
   * Not hook
   */
  const setting = config.zoomSettings["shelf"];

  const handleClick = () => {
    triggerModelControl();
    triggerZoom();
  }

  /**
   * Render
   */
  return (
    <group ref={ref} {...props}>
      <Shelf
        onClick={handleClick}
        rotation-y={Math.PI / 2}
        scale={1.1}
        eleven={{ ...elevenClick, ...hoverEvent.hotspot1 }}
        vecna={{ ...vecnaClick, ...hoverEvent.hotspot2 }}
        {...hoverEvent.home}
      />

      <spotLight
        ref={topLight}
        penumbra={1}
        position={[1.47, 2, 0]}
        angle={0.52}
        intensity={4.3}
        distance={4}
        color={LightColor.Crimson}
      />

      <spotLight
        ref={bottomLight}
        penumbra={1}
        position={[1.47, 0, 0]}
        angle={0.52}
        intensity={4.7}
        distance={2}
        color={LightColor.Crimson}
      />

      {(env === "development" || env === "staging") &&
        <>
          <WireframeBox.Light
            ref={topLightBox}
            position={topLight.current?.position}
            onClick={triggerTopLightControl}
          />

          <WireframeBox.Light
            ref={bottomLightBox}
            position={bottomLight.current?.position}
            onClick={triggerBottomLightControl}
          />
        </>
      }

      <WireframeBox.Camera
        ref={cameraBox}
        target={cameraTarget}
        position={setting.cameraBox.position}
        lookAt={setting.cameraBox.lookAt}
        hotspot="shelf"
      />
    </group>
  )
}