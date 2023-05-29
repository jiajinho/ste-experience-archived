import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import materials from "@webgl/HellfireClub/materials";
import useAssetEnvUrl from "@/hooks/common/useAssetEnvUrl";

type GLTFResult = GLTF & {
  nodes: {
    TabletopRoundLeg: THREE.Mesh;
    TabletopRound: THREE.Mesh;
  }
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const url = useAssetEnvUrl('static/gltf/tabletop-round.glb');

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