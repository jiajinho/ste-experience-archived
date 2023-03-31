import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import { Camera } from "types";
import useDebug from "../hooks/useDebug";
import useRegisterHotspot from "../hooks/useRegisterHotspot";

const url = "/static/gltf/bulletin.glb";

type GLTFResult = GLTF & {
  nodes: {
    NoticeBoard: THREE.Mesh;
  };
  materials: {
    NoticeBoard: THREE.MeshStandardMaterial;
  };
};

export default ({ hotspot, ...props }: {
  hotspot: Camera.Hotspot
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useDebug(ref);
  const triggerZoom = useRegisterHotspot(ref, hotspot);

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
        geometry={nodes.NoticeBoard.geometry}
        material={materials.NoticeBoard}
      />
    </group>
  );
}

useGLTF.preload(url);