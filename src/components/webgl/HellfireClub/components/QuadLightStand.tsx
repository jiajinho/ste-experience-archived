import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import config from "../config";
import useMover from "../hooks/useMover";

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
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useMover(ref);

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