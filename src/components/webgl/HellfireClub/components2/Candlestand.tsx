import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../useMover";

const url = "/static/gltf/candlestand.glb";

type GLTFResult = GLTF & {
  nodes: {
    CandlestandFlame: THREE.Mesh;
    CandlestandCandle: THREE.Mesh;
    Candlestand: THREE.Mesh;
  };
  materials: {
    Candle: THREE.MeshStandardMaterial;
    Candlestand: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  const { ref, onClick } = useMover(props);

  return (
    <group
      ref={ref}
      {...props}
      onClick={onClick}
      dispose={null}
    >
      <mesh geometry={nodes.CandlestandFlame.geometry}>
        <meshStandardMaterial
          toneMapped={false}
          emissive={0xff0000}
          color={0xff0000}
          emissiveIntensity={10}
        />
      </mesh>
      <mesh
        geometry={nodes.CandlestandCandle.geometry}
        material={materials.Candle}
      />
      <mesh
        geometry={nodes.Candlestand.geometry}
        material={materials.Candlestand}
      />
    </group>
  );
}

useGLTF.preload(url);