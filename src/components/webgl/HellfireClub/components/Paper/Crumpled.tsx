import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useDebug from "@hellfire/hooks/useDebug";

const url = "/static/gltf/paper-crumpled.glb";

type GLTFResult = GLTF & {
  nodes: {
    CrumpledPaper: THREE.Mesh;
  };
};

export default ({ material, ...props }: {
  material?: THREE.Material
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;
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
      <mesh
        geometry={nodes.CrumpledPaper.geometry}
        material={material}
        scale={1.5}
      />
    </group>
  );
}

useGLTF.preload(url);