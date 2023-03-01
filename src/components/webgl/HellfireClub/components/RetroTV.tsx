import React, { useRef } from "react";
import type { GLTF } from "three-stdlib";
import type { ThreeEvent } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import useDebug from "../hooks/useDebug";
import useZoom, { Zoom } from "../hooks/useZoom";

const url = "/static/gltf/retro-tv.glb";

type GLTFResult = GLTF & {
  nodes: {
    RetroTV: THREE.Mesh;
  };
  materials: {
    RetroTV: THREE.MeshStandardMaterial;
  };
};

export default ({ zoom, ...props }: {
  zoom: Zoom
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;
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
      <mesh
        geometry={nodes.RetroTV.geometry}
        material={materials.RetroTV}
      />
    </group>
  );
}

useGLTF.preload(url);