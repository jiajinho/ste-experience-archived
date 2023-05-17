import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import materials from "@webgl/HellfireClub/materials";

const url = "/static/gltf/curtain-classic.glb";

type GLTFResult = GLTF & {
  nodes: {
    CurtainClassic: THREE.Mesh;
  }
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  return (
    <group ref={ref} {...props}>
      <mesh
        geometry={nodes.CurtainClassic.geometry}
        material={materials.curtain}
      />
    </group>
  );
}

useGLTF.preload(url);