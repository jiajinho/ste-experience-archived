import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import useAssetEnvUrl from "@/hooks/common/useAssetEnvUrl";

type GLTFResult = GLTF & {
  nodes: {
    Dossier: THREE.Mesh;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const gltfUrl = useAssetEnvUrl('static/gltf/dossier.glb');
  const mapUrl = useAssetEnvUrl('static/texture/dossier.jpg');

  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;

  const { map } = useTexture({ map: mapUrl });
  map.flipY = false;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Dossier.geometry}>
        <meshPhongMaterial map={map} />
      </mesh>
    </group>
  );
}