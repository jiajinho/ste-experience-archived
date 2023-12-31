import React, { useEffect, useRef } from 'react';

import config, { LightColor } from '@/config';
import api from '@/api';
import { MixpanelEvent } from '@/api/mixpanel';

import useRegisterHotspot from '@webgl/HellfireClub/hotspots/hooks/useRegisterHotspot';
import useEnvStore from '@/stores/useEnvStore';
import useCameraStore from '@/stores/webgl/useCameraStore';
import useOutlineMeshStore from '@/stores/webgl/useOutlineMeshStore';
import useHoverHomeEvent from './hooks/useHoverHomeEvent';
import useHoverHotspotEvent from './hooks/useHoverHotspotEvent';

import WireframeBox from '@webgl/debug/WireframeBox';
import RetroTV from '@hellfire/components/RetroTV';

export default (props: JSX.IntrinsicElements["group"]) => {
  /**
   * Hooks
   */
  const env = useEnvStore(state => state.env);
  const currentZoom = useCameraStore(state => state.currentZoom);
  const setOutlineMeshStore = useOutlineMeshStore(state => state.set);

  const knob = useRef<THREE.Mesh>(null);

  const spotlight = useRef<THREE.SpotLight>(null);
  const cameraBox = useRef<THREE.Group>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const triggerZoom = useRegisterHotspot("retroTV", cameraBox, cameraTarget);

  const hoverEvent = {
    home: useHoverHomeEvent("layer1"),
    hotspot: useHoverHotspotEvent("layer1")
  }

  useEffect(() => {
    if (!spotlight.current) return;

    spotlight.current.target.position.set(-30, -50, 0);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  useEffect(() => {
    if (env === "development") return;
    if (currentZoom !== "retroTV") return;
    if (!knob.current) return;

    setOutlineMeshStore([knob.current]);

    return () => { setOutlineMeshStore([]) }
  }, [currentZoom, env]);

  /**
   * Not hook
   */
  const setting = config.zoomSettings["retroTV"];

  const handleKnobClick = () => {
    if (currentZoom !== "retroTV") return;

    window.open(config.link.tiktok, "_blank");
    api.mixpanel(MixpanelEvent.EVENT_VIDEO_TIKTOK);
  }

  /**
   * Render
   */
  return (
    <group {...props}>
      <RetroTV
        knobRef={knob}
        onClick={triggerZoom}
        knob={{
          onClick: handleKnobClick,
          ...hoverEvent.hotspot
        }}
        {...hoverEvent.home}
      />


      <spotLight
        ref={spotlight}
        castShadow
        penumbra={1}
        position={[1.52, 2.68, 0]}
        angle={0.24}
        intensity={3.6}
        distance={5}
        color={LightColor.Crimson}
      />

      <WireframeBox.Camera
        ref={cameraBox}
        target={cameraTarget}
        position={setting.cameraBox.position}
        lookAt={setting.cameraBox.lookAt}
        hotspot="retroTV"
      />
    </group>
  )
}