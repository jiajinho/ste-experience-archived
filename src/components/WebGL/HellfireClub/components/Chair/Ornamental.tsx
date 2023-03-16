import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import type { ThreeEvent } from "@react-three/fiber";

import useDebug from "../../hooks/useDebug";

const gltfUrl = "/static/gltf/chair-ornamental.glb";
const mapUrl = "/static/texture/wood.jpg";

type GLTFResult = GLTF & {
  nodes: {
    WoodChair: THREE.Mesh;
  };
  materials: {};
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useDebug(ref);

  const { map } = useTexture({ map: mapUrl });
  map.flipY = false;

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
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
      <mesh
        castShadow
        geometry={nodes.WoodChair.geometry}
      >
        <meshStandardMaterial
          roughness={0.8}
          map={map}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);