import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import config from "../config";
import useMover from "../useMover";

const url = "/static/gltf/quad-lightstand.glb";

type GLTFResult = GLTF & {
  nodes: {
    Light3: THREE.Mesh;
    Light4: THREE.Mesh;
    Light2: THREE.Mesh;
    Light1: THREE.Mesh;
    Light1Handle: THREE.Mesh;
    Light3Handle: THREE.Mesh;
    Light2Handle: THREE.Mesh;
    Light2Lens: THREE.Mesh;
    Light4Handle: THREE.Mesh;
    Light1Lens: THREE.Mesh;
    Light3Lens: THREE.Mesh;
    Light4Lens: THREE.Mesh;
    LightStand: THREE.Mesh;
  }
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

      <mesh geometry={nodes.Light2Lens.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive="red"
          color="red"
        />
      </mesh>

      <mesh geometry={nodes.Light3Lens.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive="red"
          color="red"
        />
      </mesh>

      <mesh geometry={nodes.Light4Lens.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive="red"
          color="red"
        />
      </mesh>

      <mesh
        geometry={nodes.Light3.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.Light4.geometry}
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
      <mesh
        geometry={nodes.Light3Handle.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.Light2Handle.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.LightStand.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.Light4Handle.geometry}
        material={config.lightStandMaterial}
      />
    </group>
  );
}

useGLTF.preload(url);