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
    // RetroTVScreen: THREE.Mesh;
  };
  materials: {
    tiktok: THREE.MeshStandardMaterial;
    RetroTV: THREE.MeshStandardMaterial;
  };
};

export default ({ knob, onKnobClick, ...props }: {
  knob?: React.RefObject<THREE.Mesh>,
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
        geometry={nodes.Tiktok.geometry}
        material={materials.tiktok}
      />
      <mesh
        castShadow
        geometry={nodes.RetroTV.geometry}
        material={materials.RetroTV}
      />
      <mesh
        ref={knob}
        geometry={nodes.RetroTVKnob.geometry}
        material={materials.RetroTV}
        onClick={onKnobClick}
      />

      <mesh
        material={videoMaterial}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.3, 0.24, 1]}
        position={[0.098, 0, 0]}
      >
        <planeGeometry />
      </mesh>
    </group >
  );
}

useGLTF.preload(gltfUrl);