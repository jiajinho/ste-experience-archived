import React from "react";
import { sRGBEncoding } from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import materials from "@webgl/HellfireClub/materials";

const gltfUrl = "/static/gltf/chair-ornamental.glb";
const mapUrl = "/static/texture/wood.jpg";

type GLTFResult = GLTF & {
  nodes: {
    WoodChair: THREE.Mesh;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;

  const { map } = useTexture({ map: mapUrl });
  map.flipY = false;
  map.encoding = sRGBEncoding;

  materials.wood.map = map;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.WoodChair.geometry}
        material={materials.wood}
      />
    </group>
  );
}

useGLTF.preload(gltfUrl);