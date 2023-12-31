import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    vhs: THREE.Mesh;
    cap: THREE.Mesh;
    eleven: THREE.Mesh;
    cup: THREE.Mesh;
    ["tote-bag"]: THREE.Mesh;
    shirt: THREE.Mesh;
    vinyl: THREE.Mesh;
    denim: THREE.Mesh;
    vecna: THREE.Mesh;
    Shelf: THREE.Mesh;
    Sign: THREE.Mesh;
    ShelfPlankTop: THREE.Mesh;
    ShelfPlankMiddle: THREE.Mesh;
    ShelfPlankBottom: THREE.Mesh;
  };
  materials: {
    vhs: THREE.MeshStandardMaterial;
    cap: THREE.MeshStandardMaterial;
    eleven: THREE.MeshStandardMaterial;
    cup: THREE.MeshStandardMaterial;
    ["tote-bag"]: THREE.MeshStandardMaterial;
    shirt: THREE.MeshStandardMaterial;
    vinyl: THREE.MeshStandardMaterial;
    denim: THREE.MeshStandardMaterial;
    vecna: THREE.MeshStandardMaterial;
    Shelf: THREE.MeshStandardMaterial;
  };
};

const url = getAssetEnvUrl('static/gltf/shelf.glb');

useGLTF.preload(url);

export default ({ eleven, vecna, vhs, mug, cap, vinyl, bag, shirt, denim, ...props }: {
  eleven?: JSX.IntrinsicElements["mesh"],
  vecna?: JSX.IntrinsicElements["mesh"],
  vhs?: JSX.IntrinsicElements["mesh"],
  mug?: JSX.IntrinsicElements["mesh"],
  cap?: JSX.IntrinsicElements["mesh"],
  vinyl?: JSX.IntrinsicElements["mesh"],
  bag?: JSX.IntrinsicElements["mesh"],
  shirt?: JSX.IntrinsicElements["mesh"],
  denim?: JSX.IntrinsicElements["mesh"],
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.eleven.geometry}
        material={materials.eleven}
        {...eleven}
      />
      <mesh
        geometry={nodes.cap.geometry}
        material={materials.cap}
        {...cap}
      />
      <mesh
        geometry={nodes.cup.geometry}
        material={materials.cup}
        {...mug}
      />
      <mesh
        geometry={nodes["tote-bag"].geometry}
        material={materials["tote-bag"]}
        {...bag}
      />
      <mesh
        geometry={nodes.vhs.geometry}
        material={materials.vhs}
        {...vhs}
      />
      <mesh
        geometry={nodes.shirt.geometry}
        material={materials.shirt}
        {...shirt}
      />
      <mesh
        geometry={nodes.vinyl.geometry}
        material={materials.vinyl}
        {...vinyl}
      />
      <mesh
        geometry={nodes.vecna.geometry}
        material={materials.vecna}
        {...vecna}
      />
      <mesh
        geometry={nodes.denim.geometry}
        material={materials.denim}
        {...denim}
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

      <mesh
        geometry={nodes.ShelfPlankTop.geometry}
        material={materials.Shelf}
      />
      <mesh
        geometry={nodes.ShelfPlankMiddle.geometry}
        material={materials.Shelf}
      />
      <mesh
        geometry={nodes.ShelfPlankBottom.geometry}
        material={materials.Shelf}
      />
    </group>
  );
}