import React, { useEffect } from "react";
import gsap from "gsap";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/rift-floor.glb";

type GLTFResult = GLTF & {
  nodes: {
    Tentacle: THREE.Mesh;
    Sinew: THREE.Mesh;
    Floor: THREE.Mesh;
  };
  materials: {
    FloorRift: THREE.MeshStandardMaterial;
  };
};


export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  useEffect(() => {
    if (!materials) return;

    materials.FloorRift.emissiveIntensity = 8;
    materials.FloorRift.toneMapped = false;

    const tween = gsap.to(materials.FloorRift, {
      duration: 2.5,
      ease: "power2.inOut",
      emissiveIntensity: 15,
      yoyo: true,
      repeat: -1,
    });

    return () => { tween.kill() }
  }, [materials]);


  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sinew.geometry}
        material={materials.FloorRift}
      />
      <mesh
        castShadow
        geometry={nodes.Tentacle.geometry}
        material={materials.FloorRift}
      />
      <mesh
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.FloorRift}
      />
    </group>
  );
}

useGLTF.preload(url);