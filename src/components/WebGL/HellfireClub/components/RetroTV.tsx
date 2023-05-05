import React, { useMemo } from "react";
import * as THREE from "three";
import type { GLTF } from "three-stdlib";
import { useGLTF, useVideoTexture } from "@react-three/drei";

const gltfUrl = "/static/gltf/retro-tv.glb";
const videoUrl = "/static/ste-encounter.mp4";

type GLTFResult = GLTF & {
  nodes: {
    Tiktok: THREE.Mesh;
    RetroTV: THREE.Mesh;
    RetroTVKnob: THREE.Mesh;
    RetroTVKnob1: THREE.Mesh;
  };
  materials: {
    tiktok: THREE.MeshStandardMaterial;
    CTV: THREE.MeshPhysicalMaterial;
  };
};

export default ({ knob, onKnobClick, onKnobPointerEnter, onKnobPointerLeave, ...props }: {
  knob?: React.RefObject<THREE.Mesh>,
  onKnobPointerEnter?: () => void,
  onKnobPointerLeave?: () => void
  onKnobClick?: () => void
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes, materials } = useGLTF(gltfUrl) as any as GLTFResult;

  const texture = useVideoTexture(videoUrl, {
    unsuspend: 'canplay'
  });

  const videoMaterial = useMemo(() => {
    if (!texture) return;

    return new THREE.MeshBasicMaterial({
      map: texture
    })
  }, [texture]);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.RetroTVKnob.geometry}
        material={materials.CTV}
      />
      <mesh
        ref={knob}
        geometry={nodes.RetroTVKnob1.geometry}
        material={materials.CTV}
        onClick={onKnobClick}
        onPointerEnter={onKnobPointerEnter}
        onPointerLeave={onKnobPointerLeave}
      />
      <mesh
        geometry={nodes.Tiktok.geometry}
        material={materials.tiktok}
      />
      <mesh
        castShadow
        geometry={nodes.RetroTV.geometry}
        material={materials.CTV}
      />

      <mesh
        material={videoMaterial}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.3, 0.25, 1]}
        position={[0.08, 0, 0]}
      >
        <planeGeometry />
      </mesh>
    </group >
  );
}

useGLTF.preload(gltfUrl);