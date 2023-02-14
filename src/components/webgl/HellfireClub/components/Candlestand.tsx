import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../useMover";

const url = "/static/glb/candlestand.glb";

type GLTFResult = GLTF & {
  nodes: {
    flame008: THREE.Mesh;
    Candle_002: THREE.Mesh;
  };
  materials: {};
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
      <mesh
        geometry={nodes.flame008.geometry}
        material={nodes.flame008.material}
        position={[0, 1.09, 0]}
      />
      <mesh
        geometry={nodes.Candle_002.geometry}
        material={nodes.Candle_002.material}
      />
    </group>
  );
}

useGLTF.preload(url);