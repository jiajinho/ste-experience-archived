import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import config from "../config";
import useMover from "../hooks/useMover";

const url = "/static/gltf/lightsbar.glb";

type GLTFResult = GLTF & {
  nodes: {
    Light1: THREE.Mesh;
    Light9: THREE.Mesh;
    Light11: THREE.Mesh;
    Light8: THREE.Mesh;
    Light7: THREE.Mesh;
    Light5: THREE.Mesh;
    LightBar: THREE.Mesh;
    Light6: THREE.Mesh;
    Light4: THREE.Mesh;
    Light2Lens: THREE.Mesh;
    Light1Lens: THREE.Mesh;
    Light10: THREE.Mesh;
    Light3: THREE.Mesh;
    Light6Lens: THREE.Mesh;
    Light7Lens: THREE.Mesh;
    Light11Lens: THREE.Mesh;
    Light9Lens: THREE.Mesh;
    Light3Lens: THREE.Mesh;
    Light2: THREE.Mesh;
    Light5Lens: THREE.Mesh;
    Light10Lens: THREE.Mesh;
    Light4Lens: THREE.Mesh;
    Light8Lens: THREE.Mesh;
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

      <mesh geometry={nodes.Light5Lens.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive="red"
          color="red"
        />
      </mesh>
      <mesh geometry={nodes.Light6Lens.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive="red"
          color="red"
        />
      </mesh>

      <mesh geometry={nodes.Light7Lens.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive="red"
          color="red"
        />
      </mesh>

      <mesh geometry={nodes.Light8Lens.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive="red"
          color="red"
        />
      </mesh>

      <mesh geometry={nodes.Light9Lens.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive="red"
          color="red"
        />
      </mesh>

      <mesh geometry={nodes.Light10Lens.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive="red"
          color="red"
        />
      </mesh>

      <mesh geometry={nodes.Light11Lens.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive="red"
          color="red"
        />
      </mesh>

      <mesh
        geometry={nodes.Light1.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.Light9.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.Light11.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.Light8.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.Light7.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.Light5.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.LightBar.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.Light6.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.Light4.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.Light10.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.Light3.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        geometry={nodes.Light2.geometry}
        material={config.lightStandMaterial}
      />
    </group>
  );
}

useGLTF.preload(url);