import React, { useEffect, useRef } from 'react';

import config, { LightColor } from '@/config';
import useRegisterHotspot from '@webgl/HellfireClub/hotspots/hooks/useRegisterHotspot';
import useHoverHomeEvent from '../hooks/useHoverHomeEvent';
import useHoverHotspotEvent from '../hooks/useHoverHotspotEvent';
import useCardEvent from './useCardEvent';

import WireframeBox from '@webgl/debug/WireframeBox';
import Shelf from '@hellfire/components/Shelf';

export default (props: JSX.IntrinsicElements["group"]) => {
  /**
   * Hooks
   */
  const ref = useRef<THREE.Group>(null);
  const topLight = useRef<THREE.SpotLight>(null);
  const bottomLight = useRef<THREE.SpotLight>(null);
  const cameraBox = useRef<THREE.Group>(null);
  const cameraTarget = useRef<THREE.Group>(null);

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
  const vhsClick = useCardEvent("merchVHS", triggerZoom);
  const mugClick = useCardEvent("merchMug", triggerZoom);
  const capClick = useCardEvent("merchCap", triggerZoom);
  const vinylClick = useCardEvent("merchVinyl", triggerZoom);
  const bagClick = useCardEvent("merchBag", triggerZoom);
  const shirtClick = useCardEvent("merchShirt", triggerZoom);
  const denimClick = useCardEvent("merchDenim", triggerZoom);

  const setting = config.zoomSettings["shelf"];

  /**
   * Render
   */
  return (
    <group ref={ref} {...props}>
      <Shelf
        onClick={triggerZoom}
        rotation-y={Math.PI / 2}
        scale={1.1}

        vhs={{ ...vhsClick, ...hoverEvent.hotspot2 }}
        mug={{ ...mugClick, ...hoverEvent.hotspot1 }}
        cap={{ ...capClick, ...hoverEvent.hotspot2 }}

        vinyl={{ ...vinylClick, ...hoverEvent.hotspot2 }}
        eleven={{ ...elevenClick, ...hoverEvent.hotspot1 }}
        vecna={{ ...vecnaClick, ...hoverEvent.hotspot2 }}

        bag={{ ...bagClick, ...hoverEvent.hotspot2 }}
        shirt={{ ...shirtClick, ...hoverEvent.hotspot1 }}
        denim={{ ...denimClick, ...hoverEvent.hotspot2 }}
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