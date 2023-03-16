import React, { useRef } from "react";
import styled from "styled-components";
import type { GLTF } from "three-stdlib";
import type { ThreeEvent } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";

import useDebug from "../hooks/useDebug";
import useZoom, { Zoom } from "../hooks/useZoom";

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

export default ({ zoom, ...props }: {
  zoom: Zoom
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes, materials } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useDebug(ref);
  const triggerZoom = useZoom(ref, zoom);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    triggerZoom();
    triggerMover();
    props.onClick && props.onClick(e);
  }

  return (
    <group
      ref={ref}
      {...props}
      onClick={handleClick}
      dispose={null}
    >
      <Html
        occlude="blending"
        prepend
        transform
        position={[0.165, 0, 0]}
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