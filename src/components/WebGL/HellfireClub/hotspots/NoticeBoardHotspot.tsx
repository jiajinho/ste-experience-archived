import React, { useEffect, useRef } from 'react';

import config from 'config';
import { LightColor } from '@webgl/config';
import { PolaroidColor } from '@hellfire/config';
import useTriggerDebugSpotlight from '@webgl/debug/hooks/useTriggerDebugSpotlight';
import useRegisterHotspot from '@webgl/HellfireClub/hotspots/hooks/useRegisterHotspot';
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import useEnvStore from 'stores/useEnvStore';
import useCameraStore from 'stores/webgl/useCameraStore';
import useHoverHomeEvent from './hooks/useHoverHomeEvent';
import useHoverHotspotEvent from './hooks/useHoverHotspotEvent';

import NoticeBoard from '@hellfire/components/NoticeBoard';
import WireframeBox from '@webgl/debug/WireframeBox';
import Polaroid from '../components/Polaroid';
import Sticker from '../components/Sticker';

export default (props: JSX.IntrinsicElements["group"]) => {
  /**
   * Hooks
   */
  const env = useEnvStore(state => state.env);
  const currentZoom = useCameraStore(state => state.currentZoom);

  const ref = useRef<THREE.Group>(null);
  const spotlight = useRef<THREE.SpotLight>(null);
  const lightBox = useRef<THREE.Mesh>(null);
  const cameraBox = useRef<THREE.Group>(null);
  const cameraTarget = useRef<THREE.Group>(null);

  const triggerSpotlightControl = useTriggerDebugSpotlight(spotlight, lightBox);
  const triggerModelControl = useTriggerDebugModel(ref);

  const triggerZoom = useRegisterHotspot("noticeBoard", cameraBox, cameraTarget);

  const hoverEvent = {
    home: useHoverHomeEvent("layer1"),
    hotspot1: useHoverHotspotEvent("layer1"),
    hotspot2: useHoverHotspotEvent("layer2")
  }

  useEffect(() => {
    if (!spotlight.current) return;

    spotlight.current.target.position.set(-30, -35, 0);
    spotlight.current.target.updateMatrixWorld();
  }, []);

  /**
   * Not hook
   */
  const setting = config.zoomSettings["noticeBoard"];

  const handleClick = () => {
    triggerModelControl();
    triggerZoom();
  }

  const handleIGPinClick = () => {
    if (currentZoom !== "noticeBoard") {
      triggerZoom();
    }
    else {
      window.open(config.link.instagram, "_blank");
    }
  }

  /**
   * Render
   */
  return (
    <group ref={ref} {...props}>
      <NoticeBoard
        onClick={handleClick}
        {...hoverEvent.home}
      />

      <Polaroid
        position={[0, 0.3, 0.48]}
        rotation-x={-0.15}
        color={PolaroidColor.Top}
        imgUrl="/static/insta/1.jpg"
        {...hoverEvent.hotspot1}
      />

      <Polaroid
        position={[0, 0.3, 0.16]}
        rotation={[0.09, 0, 0]}
        color={PolaroidColor.Top}
        imgUrl="/static/insta/2.jpg"
        {...hoverEvent.hotspot1}
      />

      <Polaroid
        position={[0.01, 0.28, -0.15]}
        rotation={[-0.03, 0, 0]}
        color={PolaroidColor.Top}
        imgUrl="/static/insta/3.jpg"
        {...hoverEvent.hotspot1}
      />

      <Polaroid
        position={[0, 0.31, -0.45]}
        rotation={[0.14, 0, 0]}
        color={PolaroidColor.Top}
        imgUrl="/static/insta/4.jpg"
        {...hoverEvent.hotspot1}
      />

      <Polaroid
        position={[0.02, -0.01, 0.35]}
        rotation={[0.15, 0, 0]}
        color={PolaroidColor.Middle}
        imgUrl="/static/insta/5.jpg"
        {...hoverEvent.hotspot2}
      />

      <Polaroid
        position={[0.02, 0.04, 0.04]}
        color={PolaroidColor.Middle}
        imgUrl="/static/insta/6.jpg"
        {...hoverEvent.hotspot2}
      />

      <Polaroid
        position={[0.02, 0.02, -0.3]}
        rotation={[-0.11, 0, 0]}
        color={PolaroidColor.Middle}
        imgUrl="/static/insta/7.jpg"
        {...hoverEvent.hotspot2}
      />

      <Polaroid
        position={[0.03, -0.24, -0.07]}
        rotation={[-0.08, 0, 0]}
        color={PolaroidColor.Bottom}
        imgUrl="/static/insta/10.jpg"
        {...hoverEvent.hotspot1}
      />

      <Polaroid
        position={[0.03, -0.22, -0.38]}
        rotation={[0.12, 0, 0]}
        color={PolaroidColor.Bottom}
        imgUrl="/static/insta/8.jpg"
        {...hoverEvent.hotspot1}
      />

      <Sticker.Cap position={[0.02, 0.45, -0.32]} />

      <Sticker.Hamburger
        position={[0.02, 0.16, 0.56]}
        rotation={[-0.2, 0, 0]}
      />

      <Sticker.ChocoCan
        position={[0.03, 0.37, 0.02]}
      />

      <Sticker.Flower
        position={[0.02, -0.15, 0.56]}
        rotation-x={0.04}
      />

      <Sticker.Camp
        position={[0, -0.03, -0.62]}
        rotation={[0.37, 0, 0]}
      />

      <Sticker.Instagram
        position={[0.025, -0.16, 0.18]}
        onClick={handleIGPinClick}
        {...hoverEvent.hotspot1}
      />


      <spotLight
        ref={spotlight}
        penumbra={1}
        position={[1.52, 1.91, 0]}
        angle={0.49}
        intensity={8.2}
        distance={4}
        color={LightColor.Crimson}
      />

      {env === "development" &&
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
        hotspot="noticeBoard"
      />
    </group>
  )
}