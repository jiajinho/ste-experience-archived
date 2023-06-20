import React from "react";
import { Image, useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    Polaroid: THREE.Mesh;
  };
  materials: {
    Polaroid: THREE.MeshStandardMaterial;
  };
};

const url = getAssetEnvUrl('static/gltf/polaroid.glb');

useGLTF.preload(url);

export default ({ color, imgUrl, ...props }: {
  color?: number,
  imgUrl: string
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} scale={1.2} dispose={null}>
      <mesh geometry={nodes.Polaroid.geometry} >
        <meshStandardMaterial color={color} />
      </mesh>

      <Image
        url={imgUrl}
        scale={0.19}
        position={[0.001, 0.015, 0]}
        rotation-y={Math.PI / 2}
        color="#af9696"
      />
    </group>
  );
}