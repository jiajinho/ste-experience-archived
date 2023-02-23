import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import config from "../config";
import useMover from "../useMover";

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

  const { ref, onClick } = useMover(props);

  return (
    <group
      ref={ref}
      {...props}
      onClick={onClick}
      dispose={null}
    >
      <mesh geometry={nodes.Light1Lens.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive="red"
          color="red"
        />
      </mesh>

      <mesh geometry={nodes.Llight2Lens.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive="red"
          color="red"
        />
      </mesh>

      <mesh
        geometry={nodes.WindowGrills.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.Light2Handle.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.Light2.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.Light1.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.Light1Handle.geometry}
        material={config.lightStandMaterial}
      />
    </group>
  );
}

useGLTF.preload(url);