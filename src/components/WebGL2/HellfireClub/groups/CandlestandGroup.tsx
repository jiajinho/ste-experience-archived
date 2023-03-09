import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';

import { LightColor } from '@hellfire/config';
import Candlestand from '@hellfire/components/Candlestand';

const colorMapUrl = "/static/texture/lamp-color.jpg";
const normalMapUrl = "/static/texture/lamp-normal.jpg";

export default () => {
  const { colorMap, normalMap } = useTexture({
    colorMap: colorMapUrl,
    normalMap: normalMapUrl
  });

  const standMaterial = useMemo(() => {
    if (!colorMap) return;
    if (!normalMap) return;

    colorMap.flipY = false;
    normalMap.flipY = false;

    return new THREE.MeshStandardMaterial({
      metalness: 0.4,
      roughness: 0.2,
      map: colorMap,
      normalMap: normalMap
    });
  }, [colorMap, normalMap]);

  return (
    <>
      <Candlestand
        material={standMaterial}
        position={[2.3, 0, 3.58]}
        light={LightColor.Yellow}
      />

      <Candlestand
        material={standMaterial}
        position={[1.7, 0, -1.13]}
        light={LightColor.Yellow}
      />

      <Candlestand
        material={standMaterial}
        position={[-0.99, 0, -1.29]}
        light={LightColor.Yellow}
      />

      <Candlestand
        material={standMaterial}
        position={[0.92, 0, -2.38]}
        light={LightColor.Yellow}
      />
    </>
  );
}