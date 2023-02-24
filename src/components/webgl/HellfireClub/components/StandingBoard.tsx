import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useMover from "../hooks/useMover";
import useZoom, { Zoom } from "../hooks/useZoom";

const url = "/static/gltf/standing-board.glb";

type GLTFResult = GLTF & {
  nodes: {
    StandingBoard: THREE.Mesh;
  };
  materials: {
    ChalkBoard: THREE.MeshStandardMaterial;
  };
};

export default ({ zoom, ...props }: {
  zoom: Zoom
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useMover(ref);
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
        geometry={nodes.StandingBoard.geometry}
        material={materials.ChalkBoard}
      />
    </group>
  );
}

useGLTF.preload(url);