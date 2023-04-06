import React from "react";
import styled from "styled-components";
import type { GLTF } from "three-stdlib";
import { Html, useGLTF } from "@react-three/drei";

const gltfUrl = "/static/gltf/retro-tv.glb";
const videoUrl = "/static/mightyverse-teaser.mp4#t=0.001";

type GLTFResult = GLTF & {
  nodes: {
    RetroTV: THREE.Mesh;
  };
  materials: {
    RetroTV: THREE.MeshStandardMaterial;
  };
};

const Screen = styled.div`
  position: relative;
  background: black;
  width: 1160px;
  height: 910px;

  & > video {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 80%;
  }
`;

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(gltfUrl) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <Html
        occlude="blending"
        prepend
        transform
        position={[0.1, 0, 0]}
        rotation-y={Math.PI / 2}
        scale={0.01}
      >
        <Screen>
          <video controls autoPlay={false}>
            <source
              src={videoUrl}
              type="video/mp4"
            />
          </video>
        </Screen>
      </Html>

      <mesh
        castShadow
        geometry={nodes.RetroTV.geometry}
        material={materials.RetroTV}
      />
    </group >
  );
}

useGLTF.preload(gltfUrl);