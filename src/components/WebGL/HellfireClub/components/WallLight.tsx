import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import materials from "../materials";
import { getAssetEnvUrl } from "@/utils";

type GLTFResult = GLTF & {
  nodes: {
    WindowGrills: THREE.Mesh;
    Light2Handle: THREE.Mesh;
    Light2: THREE.Mesh;
    Light1: THREE.Mesh;
    Llight2Lens: THREE.Mesh;
    Light1Handle: THREE.Mesh;
    Light1Lens: THREE.Mesh;
  };
};

const url = getAssetEnvUrl('static/gltf/wall-light.glb');

useGLTF.preload(url);

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Light1Lens.geometry}
        material={materials.bulb.cyan}
      />

      <mesh
        geometry={nodes.Llight2Lens.geometry}
        material={materials.bulb.cyan}
      />

      <mesh
        geometry={nodes.WindowGrills.geometry}
        material={materials.lightStand}
      />
      <mesh
        geometry={nodes.Light2Handle.geometry}
        material={materials.lightStand}
      />
      <mesh
        geometry={nodes.Light2.geometry}
        material={materials.lightStand}
      />
      <mesh
        geometry={nodes.Light1.geometry}
        material={materials.lightStand}
      />
      <mesh
        geometry={nodes.Light1Handle.geometry}
        material={materials.lightStand}
      />
    </group>
  );
}