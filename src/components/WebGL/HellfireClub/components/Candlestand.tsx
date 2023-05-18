import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { LightColor } from "@webgl/config";

const gltfUrl = "/static/gltf/candlestand.glb";
const colorMapUrl = "/static/texture/lamp-color.jpg";
const normalMapUrl = "/static/texture/lamp-normal.jpg";

type GLTFResult = GLTF & {
  nodes: {
    CandlestandFlame: THREE.Mesh;
    Candlestand: THREE.Mesh;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const { colorMap, normalMap } = useTexture({
    colorMap: colorMapUrl,
    normalMap: normalMapUrl
  });

  colorMap.flipY = false;
  normalMap.flipY = false;

  return (
    <group ref={ref} {...props}>
      <mesh geometry={nodes.CandlestandFlame.geometry}>
        <meshStandardMaterial
          toneMapped={false}
          emissiveIntensity={10}
          emissive={LightColor.Yellow}
          color={LightColor.Yellow}
        />
      </mesh>

      <mesh castShadow geometry={nodes.Candlestand.geometry}>
        <meshStandardMaterial
          metalness={0.4}
          roughness={0.2}
          map={colorMap}
          normalMap={normalMap}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);