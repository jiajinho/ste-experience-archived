import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

const gltfUrl = "/static/gltf/coffin.glb";
const mapUrl = {
  coffin: "/static/texture/coffin/coffin.jpg",
  crossNormal: "/static/texture/coffin/cross-normal.jpg"
}

type GLTFResult = GLTF & {
  nodes: {
    Coffin: THREE.Mesh;
    CoffinCross: THREE.Mesh;
  };
};

const material = {
  coffin: new THREE.MeshStandardMaterial({
    metalness: 0.2,
    roughness: 0.5
  }),
  cross: new THREE.MeshStandardMaterial({
    color: "#E7B57A",
    metalness: 0.6,
    roughness: 0.2
  })
}

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(gltfUrl) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useTriggerDebugModel(ref);

  useTexture([mapUrl.coffin, mapUrl.crossNormal], t => {
    const _t = t as [THREE.Texture, THREE.Texture];

    _t[0].flipY = false;
    _t[1].flipY = false;

    material.coffin.map = _t[0];
    material.cross.normalMap = _t[1];
  });

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
        geometry={nodes.Coffin.geometry}
        material={material.coffin}
      />
      <mesh
        geometry={nodes.CoffinCross.geometry}
        material={material.cross}
      />
    </group>
  );
}

useGLTF.preload(gltfUrl);