import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import config, { LightColor } from "@hellfire/config";
import useDebug from "@hellfire/hooks/useDebug";

const gltfUrl = "/static/gltf/chandelier.glb";
const colorMapUrl = "/static/texture/lamp-color.jpg";
const normalMapUrl = "/static/texture/lamp-normal.jpg";

type GLTFResult = GLTF & {
  nodes: {
    ChandelierFlame: THREE.Mesh;
    Chandelier: THREE.Mesh;
  }
};

export default ({ light, ...props }: {
  light: LightColor
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useDebug(ref);

  const { colorMap, normalMap } = useTexture({
    colorMap: colorMapUrl,
    normalMap: normalMapUrl
  });

  const chandelierMaterial = useMemo(() => {
    if (!colorMap) return;
    if (!normalMap) return;

    colorMap.flipY = false;
    normalMap.flipY = false;

    return new THREE.MeshStandardMaterial({
      metalness: 0.4,
      roughness: 0.3,
      map: colorMap,
      normalMap: normalMap
    });
  }, [colorMap, normalMap]);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    triggerMover();
    props.onClick && props.onClick(e);
  }

  return (
    <group
      ref={ref}
      {...props}
      onClick={handleClick}
      dispose={null}
    >
      <mesh geometry={nodes.ChandelierFlame.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive={light}
          color={light}
        />
      </mesh>
      <mesh
        geometry={nodes.Chandelier.geometry}
        material={chandelierMaterial}
      />
    </group>
  );
}

useGLTF.preload(gltfUrl);