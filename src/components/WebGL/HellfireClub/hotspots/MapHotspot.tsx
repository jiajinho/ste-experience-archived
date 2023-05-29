import React, { useRef, useState } from 'react';

import config, { LightColor } from '@/config';
import api from '@/api';
import { MixpanelEvent } from '@/api/mixpanel';

import useRegisterHotspot from './hooks/useRegisterHotspot';
import useCameraStore from '@/stores/webgl/useCameraStore';
import useHoverHomeEvent from './hooks/useHoverHomeEvent';
import useHoverHotspotEvent from './hooks/useHoverHotspotEvent';

import Map from '@hellfire/components/Map';
import WireframeBox from '@webgl/debug/WireframeBox';

export default (props: JSX.IntrinsicElements["group"]) => {
  /**
   * Hooks
   */
  const currentZoom = useCameraStore(state => state.currentZoom);

  const ref = useRef<THREE.Group>(null);
  const spotlight = useRef<THREE.SpotLight>(null);
  const cameraBox = useRef<THREE.Group>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const [ctaGlow, setCTAGlow] = useState(false);

  const triggerZoom = useRegisterHotspot("map", cameraBox, cameraTarget);

  const hoverEvent = {
    home: useHoverHomeEvent("layer1"),
    hotspot: useHoverHotspotEvent("layer1")
  }

  /**
   * Not hook
   */
  const setting = config.zoomSettings["map"];

  const handleCallToAction = () => {
    if (currentZoom !== 'map') return;

    window.open(config.link.eventLocation, "_blank");
    api.mixpanel(MixpanelEvent.EVENT_LOCATION_CTA);
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
      <Map
        onClick={triggerZoom}
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
        position={[0.22, 1.32, -0.76]}
        angle={0.32}
        intensity={1.6}
        distance={3}
        color={LightColor.Crimson}
      />

      <WireframeBox.Camera
        ref={cameraBox}
        target={cameraTarget}
        position={setting.cameraBox.position}
        lookAt={setting.cameraBox.lookAt}
        hotspot="map"
      />
    </group>
  )
}