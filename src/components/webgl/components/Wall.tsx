import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/glb/wall.glb";

type GLTFResult = GLTF & {
  nodes: {
    room: THREE.Mesh;
  };
  materials: {};
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;

  const { map } = useTexture({
    map: "/static/texture-map/StrangerThings_Room_DefaultMaterial_BaseColor.png"
  });

  map.flipY = false;

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.room.geometry}
        position-y={-0.05}
      >
        <meshStandardMaterial map={map} />
      </mesh>
    </group>
  );
}

useGLTF.preload(url);