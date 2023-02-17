import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

import useMover from "../../HellfireClub/useMover";

const url = "/static/glb/standee-castlewall.glb";

type GLTFResult = GLTF & {
  nodes: {
    CastleWall_standee002: THREE.Mesh
  }
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF(url) as any as GLTFResult;
  const { ref, onClick } = useMover(props);

  const { map } = useTexture({
    map: "/static/texture-map/TG5_D.png"
  });

  map.flipY = false;

  return (
    <group
      ref={ref}
      {...props}
      onClick={onClick}
      dispose={null}
    >
      <mesh geometry={nodes.CastleWall_standee002.geometry}>
        <meshStandardMaterial map={map} />
      </mesh>
    </group>
  );
}

useGLTF.preload(url);