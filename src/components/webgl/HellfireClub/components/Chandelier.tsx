import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useMover from "../hooks/useMover";
import config, { LightColor } from "../config";

const url = "/static/gltf/chandelier.glb";

type GLTFResult = GLTF & {
  nodes: {
    ChandelilerFlame: THREE.Mesh;
    Chandelier: THREE.Mesh;
  },
  materials: {
    Chandelier: THREE.MeshStandardMaterial;
  }
};

export default ({ light, ...props }: {
  light: LightColor
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useMover(ref);

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
      <mesh geometry={nodes.ChandelilerFlame.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive={light}
          color={light}
        />
      </mesh>
      <mesh
        geometry={nodes.Chandelier.geometry}
        material={materials.Chandelier}
      />
    </group>
  );
}

useGLTF.preload(url);