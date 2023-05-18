import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import materials from "../materials";

const url = "/static/gltf/wall-light.glb";

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

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  return (
    <group ref={ref} {...props}>
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

useGLTF.preload(url);