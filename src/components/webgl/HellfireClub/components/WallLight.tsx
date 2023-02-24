import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import config from "../config";
import useMover from "../hooks/useMover";

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