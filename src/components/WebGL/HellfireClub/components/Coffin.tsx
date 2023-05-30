import React from "react";
import { MeshStandardMaterial } from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useAssetEnvUrl from "@/hooks/common/useAssetEnvUrl";

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

export default (props: JSX.IntrinsicElements["group"]) => {
  const gltfUrl = useAssetEnvUrl('static/gltf/coffin.glb');

  const mapUrl = {
    coffin: useAssetEnvUrl('static/texture/coffin/coffin.jpg'),
    crossNormal: useAssetEnvUrl('static/texture/coffin/cross-normal.jpg')
  }

  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;

  useTexture([mapUrl.coffin, mapUrl.crossNormal], t => {
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