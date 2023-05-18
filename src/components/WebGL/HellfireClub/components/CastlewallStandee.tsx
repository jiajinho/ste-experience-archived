import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/castlewall-standee.glb";

type GLTFResult = GLTF & {
  nodes: {
    StandeeCastlewall: THREE.Mesh;
  };
  materials: {
    Castlewall: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  const ref = useRef<THREE.Group>(null);

  return (
    <group ref={ref} {...props}>
      <mesh
        geometry={nodes.StandeeCastlewall.geometry}
        material={materials.Castlewall}
      />
    </group>
  );
}

useGLTF.preload(url);