import React, { useMemo } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

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

const bulbMaterial: THREE.MeshStandardMaterialParameters = {
  toneMapped: false,
  emissiveIntensity: 10
}

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  const { ref, onClick } = useMover(props);

  const standMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    roughness: 0.5,
    metalness: 0.1,
    color: "#252e36"
  }), []);

  return (
    <group
      ref={ref}
      {...props}
      onClick={onClick}
      dispose={null}
    >
      <mesh geometry={nodes.Light1Lens.geometry}>
        <meshStandardMaterial
          {...bulbMaterial}
          emissive="red"
          color="red"
        />
      </mesh>

      <mesh geometry={nodes.Light2Lens.geometry}>
        <meshStandardMaterial
          {...bulbMaterial}
          emissive="red"
          color="red"
        />
      </mesh>

      <mesh geometry={nodes.Light3Lens.geometry}>
        <meshStandardMaterial
          {...bulbMaterial}
          emissive="red"
          color="red"
        />
      </mesh>

      <mesh geometry={nodes.Light4Lens.geometry}>
        <meshStandardMaterial
          {...bulbMaterial}
          emissive="red"
          color="red"
        />
      </mesh>

      <mesh
        geometry={nodes.Light3.geometry}
        material={standMaterial}
      />
      <mesh
        geometry={nodes.Light4.geometry}
        material={standMaterial}
      />
      <mesh
        geometry={nodes.Light2.geometry}
        material={standMaterial}
      />
      <mesh
        geometry={nodes.Light1.geometry}
        material={standMaterial}
      />
      <mesh
        geometry={nodes.Light1Handle.geometry}
        material={standMaterial}
      />
      <mesh
        geometry={nodes.Light3Handle.geometry}
        material={standMaterial}
      />
      <mesh
        geometry={nodes.Light2Handle.geometry}
        material={standMaterial}
      />
      <mesh
        geometry={nodes.LightStand.geometry}
        material={standMaterial}
      />
      <mesh
        geometry={nodes.Light4Handle.geometry}
        material={standMaterial}
      />
    </group>
  );
}

useGLTF.preload(url);