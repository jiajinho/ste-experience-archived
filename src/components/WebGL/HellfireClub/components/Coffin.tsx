import React from "react";
import { MeshStandardMaterial } from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    Coffin: THREE.Mesh;
    CoffinCross: THREE.Mesh;
  };
};

const material = {
  coffin: new MeshStandardMaterial({
    metalness: 0.2,
    roughness: 0.5
  }),
  cross: new MeshStandardMaterial({
    color: "#E7B57A",
    metalness: 0.6,
    roughness: 0.2
  })
}

const gltfUrl = getAssetEnvUrl('static/gltf/coffin.glb');
const coffinColorMapUrl = getAssetEnvUrl('static/texture/coffin/coffin.jpg');
const crossNormalMapUrl = getAssetEnvUrl('static/texture/coffin/cross-normal.jpg')

useGLTF.preload(gltfUrl);
useTexture.preload(coffinColorMapUrl);
useTexture.preload(crossNormalMapUrl);

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;

  useTexture([coffinColorMapUrl, crossNormalMapUrl], t => {
    const _t = t as [THREE.Texture, THREE.Texture];

    _t[0].flipY = false;
    _t[1].flipY = false;

    material.coffin.map = _t[0];
    material.cross.normalMap = _t[1];
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Coffin.geometry}
        material={material.coffin}
      />
      <mesh
        geometry={nodes.CoffinCross.geometry}
        material={material.cross}
      />
    </group>
  );
}