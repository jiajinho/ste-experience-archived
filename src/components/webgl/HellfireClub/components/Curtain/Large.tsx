import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useDebug from "../../hooks/useDebug";

const url = "/static/gltf/curtain-large.glb";

type GLTFResult = GLTF & {
  nodes: {
    CurtainLarge: THREE.Mesh;
  }
};

export default ({ material, ...props }: {
  material: THREE.Material
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
        geometry={nodes.CurtainLarge.geometry}
        material={material}
      />
    </group>
  );
}

useGLTF.preload(url);