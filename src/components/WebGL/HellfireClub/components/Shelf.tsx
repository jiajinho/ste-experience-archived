import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/shelf.glb";

type GLTFResult = GLTF & {
  nodes: {
    eleven: THREE.Mesh;
    cap: THREE.Mesh;
    cup: THREE.Mesh;
    ["tote-bag"]: THREE.Mesh;
    tape: THREE.Mesh;
    vinyl: THREE.Mesh;
    shirt: THREE.Mesh;
    vecna: THREE.Mesh;
    denim: THREE.Mesh;
    Shelf: THREE.Mesh;
    Sign: THREE.Mesh;
  };
  materials: {
    eleven: THREE.MeshStandardMaterial;
    cap: THREE.MeshStandardMaterial;
    cup: THREE.MeshStandardMaterial;
    ["tote-bag"]: THREE.MeshStandardMaterial;
    tape: THREE.MeshStandardMaterial;
    vinyl: THREE.MeshStandardMaterial;
    shirt: THREE.MeshStandardMaterial;
    vecna: THREE.MeshStandardMaterial;
    denim: THREE.MeshStandardMaterial;
    Shelf: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.eleven.geometry}
        material={materials.eleven}
      />
      <mesh
        geometry={nodes.cap.geometry}
        material={materials.cap}
      />
      <mesh
        geometry={nodes.cup.geometry}
        material={materials.cup}
      />
      <mesh
        geometry={nodes.tape.geometry}
        material={materials.tape}
      />
      <mesh
        geometry={nodes["tote-bag"].geometry}
        material={materials["tote-bag"]}
      />
      <mesh
        geometry={nodes.shirt.geometry}
        material={materials.shirt}
      />
      <mesh
        geometry={nodes.vecna.geometry}
        material={materials.vecna}
      />
      <mesh
        geometry={nodes.vinyl.geometry}
        material={materials.vinyl}
      />
      <mesh
        geometry={nodes.denim.geometry}
        material={materials.denim}
      />
      <mesh
        castShadow
        geometry={nodes.Shelf.geometry}
        material={materials.Shelf}
      />
      <mesh
        geometry={nodes.Sign.geometry}
        material={materials.Shelf}
      />
    </group>
  );
}

useGLTF.preload(url);