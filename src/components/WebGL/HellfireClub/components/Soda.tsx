import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const gltfUrl = "/static/gltf/soda.glb";
const mapUrl = "/static/texture/soda.jpg";

type GLTFResult = GLTF & {
  nodes: {
    Soda: THREE.Mesh;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;

  const { map } = useTexture({ map: mapUrl });
  map.flipY = false;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Soda.geometry}
      >
        <meshStandardMaterial
          map={map}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);