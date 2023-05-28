import React from "react";
import type { GLTF } from "three-stdlib";
import { useGLTF, useVideoTexture } from "@react-three/drei";

import useLoadProgressStore from "stores/useLoadProgressStore";

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

export default ({ knobRef, knob, ...props }: {
  knobRef?: React.RefObject<THREE.Mesh>,
  knob?: JSX.IntrinsicElements["mesh"],
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes, materials } = useGLTF(gltfUrl) as any as GLTFResult;
  const setLoadProgressStore = useLoadProgressStore(state => state.set);

  const videoMap = useVideoTexture(videoUrl, {
    muted: true,
    oncanplaythrough: () => {
      setLoadProgressStore("html", { eventVideo: true });
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.RetroTVKnob.geometry}
        material={materials.CTV}
      />
      <mesh
        ref={knobRef}
        geometry={nodes.RetroTVKnob1.geometry}
        material={materials.CTV}
        {...knob}
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
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.3, 0.25, 1]}
        position={[0.08, 0, 0]}
      >
        <planeGeometry />
        <meshBasicMaterial map={videoMap} />
      </mesh>
    </group >
  );
}

useGLTF.preload(gltfUrl);