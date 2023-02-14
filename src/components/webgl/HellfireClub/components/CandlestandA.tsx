import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Color } from "three";

const url = "/static/glb/candlestand.glb";

type GLTFResult = GLTF & {
  nodes: {
    flame008: THREE.Mesh,
    Candle_002: THREE.Mesh
  }
};

type Glow = {
  emissive: Color,
  color: Color,
  emissiveIntensity: number
}

export default ({ glow, ...props }: {
  glow?: Glow
} & JSX.IntrinsicElements["group"]
) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.flame008.geometry}
      >
        <meshStandardMaterial
          toneMapped={!glow}
          emissive={glow?.color}
          color={glow?.emissive}
          emissiveIntensity={3.5}
        />
      </mesh>
      <mesh
        geometry={nodes.Candle_002.geometry}
        material={nodes.Candle_002.material}
      >
        <meshStandardMaterial />
      </mesh>
    </group>
  );
}

useGLTF.preload(url);