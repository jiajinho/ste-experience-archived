import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import materials from "@webgl/HellfireClub/materials";

const gltfUrl = "/static/gltf/tabletop-round.glb";

type GLTFResult = GLTF & {
  nodes: {
    TabletopRoundLeg: THREE.Mesh;
    TabletopRound: THREE.Mesh;
  }
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  return (
    <group ref={ref} {...props}>
      <mesh
        castShadow
        geometry={nodes.TabletopRoundLeg.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        geometry={nodes.TabletopRound.geometry}
        material={materials.wood}
      />
    </group>
  );
}

useGLTF.preload(gltfUrl);