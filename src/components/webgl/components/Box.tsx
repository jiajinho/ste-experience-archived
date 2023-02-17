import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../HellfireClub/useMover";

const url = "/static/glb/box.glb";

type GLTFResult = GLTF & {
  nodes: {
    CardboardBox_LP003: THREE.Mesh;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;
  const { ref, onClick } = useMover(props);

  const { map } = useTexture({
    map: "/static/texture-map/TG3_D.png"
  });

  map.flipY = false;

  return (
    <group
      ref={ref}
      {...props}
      onClick={onClick}
      dispose={null}
    >
      <mesh geometry={nodes.CardboardBox_LP003.geometry}>
        <meshStandardMaterial map={map} />
      </mesh>
    </group>
  );
}

useGLTF.preload(url);