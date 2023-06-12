import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import materials from "@webgl/HellfireClub/materials";
import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    TabletopRoundLeg: THREE.Mesh;
    TabletopRound: THREE.Mesh;
  }
};

const url = getAssetEnvUrl('static/gltf/tabletop-round.glb');

useGLTF.preload(url);

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
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