import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useDebug from "../hooks/useDebug";
import { ThreeEvent } from "@react-three/fiber";
import config, { LightColor } from "../config";

const url = "/static/gltf/candlestand.glb";

type GLTFResult = GLTF & {
  nodes: {
    CandlestandFlame: THREE.Mesh;
    CandlestandCandle: THREE.Mesh;
    Candlestand: THREE.Mesh;
  },
  materials: {
    Candle: THREE.MeshStandardMaterial;
    Candlestand: THREE.MeshStandardMaterial;
  }
};

export default ({ light, ...props }: {
  light: LightColor | undefined,
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useDebug(ref);

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
        geometry={nodes.CandlestandCandle.geometry}
        material={materials.Candle}
      />
      <mesh
        geometry={nodes.Candlestand.geometry}
        material={materials.Candlestand}
      />
    </group>
  );
}

useGLTF.preload(url);