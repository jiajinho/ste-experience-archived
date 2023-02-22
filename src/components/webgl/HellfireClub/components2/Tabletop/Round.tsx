import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../../useMover";

const url = "/static/gltf/tabletop-round.glb";

type GLTFResult = GLTF & {
  nodes: {
    TabletopRoundLeg: THREE.Mesh;
    TabletopRound: THREE.Mesh;
  };
  materials: {};
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  const { ref, onClick } = useMover(props);

  const { map } = useTexture({
    map: "/static/texture-map/wood.jpg"
  });

  map.flipY = false;

  return (
    <group
      ref={ref}
      {...props}
      onClick={onClick}
      dispose={null}
    >
      <mesh geometry={nodes.TabletopRoundLeg.geometry}>
        <meshStandardMaterial
          roughness={0.8}
          map={map}
        />
      </mesh>
      <mesh geometry={nodes.TabletopRound.geometry}>
        <meshStandardMaterial
          roughness={0.8}
          map={map}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(url);