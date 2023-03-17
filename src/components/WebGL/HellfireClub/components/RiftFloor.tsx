import React, { useEffect } from "react";
import gsap from "gsap";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/rift-floor.glb";

type GLTFResult = GLTF & {
  nodes: {
    Sinew: THREE.Mesh;
    Tentacle: THREE.Mesh;
    Floor: THREE.Mesh;
  };
  materials: {
    Sinew: THREE.MeshStandardMaterial;
    Tentacle: THREE.MeshStandardMaterial;
    Floor: THREE.MeshPhysicalMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  useEffect(() => {
    if (!materials) return;

    materials.Floor.emissiveIntensity = 8;
    materials.Floor.toneMapped = false;
    materials.Floor.metalness = 0.3;
    materials.Floor.roughness = 0.6;

    const tween = gsap.to(materials.Floor, {
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
        material={materials.Sinew}
      />
      <mesh
        castShadow
        geometry={nodes.Tentacle.geometry}
        material={materials.Tentacle}
      />
      <mesh
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.Floor}
      />
    </group>
  );
}

useGLTF.preload(url);