import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/rift-floor.glb";

type GLTFResult = GLTF & {
  nodes: {
    Sinew: THREE.Mesh;
    Tentacle: THREE.Mesh;
    Floor: THREE.Mesh;
  };
  materials: {
    Sinew: THREE.MeshStandardMaterial;
    Tentacle: THREE.MeshStandardMaterial;
    Floor: THREE.MeshPhysicalMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  materials.Floor.emissiveIntensity = 30;
  materials.Floor.toneMapped = false;

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Sinew.geometry}
        material={materials.Sinew}
      />
      <mesh
        geometry={nodes.Tentacle.geometry}
        material={materials.Tentacle}
      />
      <mesh
        geometry={nodes.Floor.geometry}
        material={materials.Floor}
      />
    </group>
  );
}

useGLTF.preload(url);