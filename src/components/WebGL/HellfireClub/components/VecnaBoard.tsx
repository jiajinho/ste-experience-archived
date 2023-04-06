import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const gltfUrl = "/static/gltf/vecna-board.glb";
const mapUrl = "/static/texture/vecna-faq-map.png";

type GLTFResult = GLTF & {
  nodes: {
    VecnaBoard: THREE.Mesh;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;

  const { map } = useTexture({ map: mapUrl });
  map.flipY = false;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.VecnaBoard.geometry}>
        <meshStandardMaterial
          map={map}
          metalness={0.1}
          roughness={0.6}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);