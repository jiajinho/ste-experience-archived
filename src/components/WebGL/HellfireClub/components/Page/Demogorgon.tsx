import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const gltfUrl = "/static/gltf/page.glb";
const mapUrl = "/static/texture/page/demogorgon.jpg"

type GLTFResult = GLTF & {
  nodes: {
    Page: THREE.Mesh;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const { map } = useTexture({ map: mapUrl });
  map.flipY = false;

  return (
    <group ref={ref} {...props}>
      <mesh geometry={nodes.Page.geometry}>
        <meshPhongMaterial
          map={map}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);