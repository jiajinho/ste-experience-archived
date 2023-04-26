import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

import { Tuple } from "types";
import config from "@hellfire/config";
import { LightColor } from "@webgl/config";
import useTriggerDebugModel from '@webgl/debug/hooks/useTriggerDebugModel';

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

export default ({ lights, ...props }: {
  lights: Tuple<LightColor | undefined, 4>
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const triggerMover = useTriggerDebugModel(ref);

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
          emissive={lights[0] || undefined}
          color={lights[0] || "black"}
        />
      </mesh>

      <mesh geometry={nodes.Light2Lens.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive={lights[1] || undefined}
          color={lights[1] || "black"}
        />
      </mesh>

      <mesh geometry={nodes.Light3Lens.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive={lights[2] || undefined}
          color={lights[2] || "black"}
        />
      </mesh>

      <mesh geometry={nodes.Light4Lens.geometry}>
        <meshStandardMaterial
          {...config.bulbMaterialProps}
          emissive={lights[3] || undefined}
          color={lights[3] || "black"}
        />
      </mesh>

      <mesh
        castShadow
        geometry={nodes.Light3.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Light4.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Light2.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Light1.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Light1Handle.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Light3Handle.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Light2Handle.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.LightStand.geometry}
        material={config.lightStandMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.Light4Handle.geometry}
        material={config.lightStandMaterial}
      />
    </group>
  );
}

useGLTF.preload(url);