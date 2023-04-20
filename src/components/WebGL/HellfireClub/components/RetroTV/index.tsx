import React from "react";
import type { GLTF } from "three-stdlib";
import { useGLTF } from "@react-three/drei";
import HtmlContent from "./HtmlContent";

const url = "/static/gltf/retro-tv.glb";

type GLTFResult = GLTF & {
  nodes: {
    RetroTVKnob: THREE.Mesh;
    RetroTV: THREE.Mesh;
  };
  materials: {
    RetroTV: THREE.MeshStandardMaterial;
  };
};

export default ({ knob, onTiktokClick, ...props }: {
  knob?: React.RefObject<THREE.Mesh>,
  onTiktokClick?: () => void
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <HtmlContent
        onTiktokClick={onTiktokClick}
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
      />
    </group >
  );
}

useGLTF.preload(url);