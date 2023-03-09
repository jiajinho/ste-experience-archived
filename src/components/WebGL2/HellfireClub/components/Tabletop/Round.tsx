import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useDebug from "@hellfire/hooks/useDebug";

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

  const tableMaterial = useMemo(() => {
    if (!map) return;
    map.flipY = false;

    return new THREE.MeshStandardMaterial({
      roughness: 0.8,
      map
    });
  }, [map]);

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
        geometry={nodes.TabletopRoundLeg.geometry}
        material={tableMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.TabletopRound.geometry}
        material={tableMaterial}
      />
    </group>
  );
}

useGLTF.preload(gltfUrl);