import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { ThreeEvent } from "@react-three/fiber";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';
import config, { LightColor } from "@hellfire/config";

const url = "/static/gltf/candlestand.glb";

type GLTFResult = GLTF & {
  nodes: {
    CandlestandFlame: THREE.Mesh;
    Candlestand: THREE.Mesh;
  };
};

export default ({ light, material, ...props }: {
  light?: LightColor,
  material?: THREE.Material
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useTriggerDebugModel(ref);

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
      <mesh geometry={nodes.CandlestandFlame.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive={light || undefined}
          color={light || "black"}
        />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Candlestand.geometry}
        material={material}
      />
    </group>
  );
}

useGLTF.preload(url);