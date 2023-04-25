import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const url = "/static/gltf/shelf.glb";


type GLTFResult = GLTF & {
  nodes: {
    ["Stranger_Things-_Soundtrack_From_Season_4_Vinyl_Record_main_(1)"]: THREE.Mesh;
    Shelf: THREE.Mesh;
    ["STR025A_STARCOURT_MALL_TOTE_(1)"]: THREE.Mesh;
    ["Merch_-_shirt"]: THREE.Mesh;
    ST_Cap: THREE.Mesh;
    StrangerThings_EntryLine_Eleven_BattleReady_Turnarounds_230403_: THREE.Mesh;
    ST_Tape: THREE.Mesh;
    Netflix_Vecna_CW02_turnarounds_01: THREE.Mesh;
    ["merchArtboard-1"]: THREE.Mesh;
    ST_Cup: THREE.Mesh;
  };
  materials: {
    ["Stranger Things- Soundtrack From Season 4 Vinyl Record main (1)"]: THREE.MeshStandardMaterial;
    Shelf: THREE.MeshStandardMaterial;
    ["STR025A_STARCOURT MALL TOTE (1)"]: THREE.MeshStandardMaterial;
    ["Merch - shirt"]: THREE.MeshStandardMaterial;
    ST_Cap: THREE.MeshStandardMaterial;
    StrangerThings_EntryLine_Eleven_BattleReady_Turnarounds_230403_: THREE.MeshStandardMaterial;
    ST_Tape: THREE.MeshStandardMaterial;
    Netflix_Vecna_CW02_turnarounds_01: THREE.MeshStandardMaterial;
    ["merchArtboard-1"]: THREE.MeshStandardMaterial;
    ST_Cup: THREE.MeshStandardMaterial;
  };
};

export default (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(url) as any as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={
          nodes[
            "Stranger_Things-_Soundtrack_From_Season_4_Vinyl_Record_main_(1)"
          ].geometry
        }
        material={
          materials[
          "Stranger Things- Soundtrack From Season 4 Vinyl Record main (1)"
          ]
        }
      />
      <mesh
        geometry={nodes.Shelf.geometry}
        material={materials.Shelf}
      />
      <mesh
        geometry={nodes["STR025A_STARCOURT_MALL_TOTE_(1)"].geometry}
        material={materials["STR025A_STARCOURT MALL TOTE (1)"]}
      />
      <mesh
        geometry={nodes["Merch_-_shirt"].geometry}
        material={materials["Merch - shirt"]}
      />
      <mesh
        geometry={nodes.ST_Cap.geometry}
        material={materials.ST_Cap}
      />
      <mesh
        geometry={
          nodes.StrangerThings_EntryLine_Eleven_BattleReady_Turnarounds_230403_
            .geometry
        }
        material={
          materials.StrangerThings_EntryLine_Eleven_BattleReady_Turnarounds_230403_
        }
      />
      <mesh
        geometry={nodes.ST_Tape.geometry}
        material={materials.ST_Tape}
      />
      <mesh
        geometry={nodes.Netflix_Vecna_CW02_turnarounds_01.geometry}
        material={materials.Netflix_Vecna_CW02_turnarounds_01}
      />
      <mesh
        geometry={nodes["merchArtboard-1"].geometry}
        material={materials["merchArtboard-1"]}
      />
      <mesh
        geometry={nodes.ST_Cup.geometry}
        material={materials.ST_Cup}
      />
    </group>
  );
}

useGLTF.preload(url);