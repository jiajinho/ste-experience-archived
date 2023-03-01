import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useDebug from "../../hooks/useDebug";

const gltfUrl = "/static/gltf/tabletop-round.glb";
const mapUrl = "/static/texture/wood.jpg";

type GLTFResult = GLTF & {
  nodes: {
    TabletopRoundLeg: THREE.Mesh;
    TabletopRound: THREE.Mesh;
  }
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
      <mesh geometry={nodes.TabletopRoundLeg.geometry}>
        <meshStandardMaterial
          roughness={0.8}
          map={map}
        />
      </mesh>
      <mesh geometry={nodes.TabletopRound.geometry}>
        <meshStandardMaterial
          roughness={0.8}
          map={map}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(gltfUrl);