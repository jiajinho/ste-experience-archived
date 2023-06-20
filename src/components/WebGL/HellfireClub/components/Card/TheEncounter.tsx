import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    Card: THREE.Mesh;
  }
};

const gltfUrl = getAssetEnvUrl('static/gltf/card.glb');
const mapUrl = getAssetEnvUrl('static/texture/the-encounter-texture.jpg');

useGLTF.preload(gltfUrl);
useTexture.preload(mapUrl);

export default React.forwardRef((
  props: JSX.IntrinsicElements["group"],
  ref: React.ForwardedRef<THREE.Group>
) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;

  const map = useTexture(mapUrl);
  map.flipY = false;

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Card.geometry}
        scale={0.9}
      >
        <meshStandardMaterial
          map={map}
          metalness={0.1}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
});