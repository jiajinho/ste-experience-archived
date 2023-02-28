import * as THREE from "three";

const bulbMaterialProps: THREE.MeshStandardMaterialParameters = {
  toneMapped: false,
  emissiveIntensity: 5
}

const lightStandMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.5,
  metalness: 0.1,
  color: "#040406"
});

const curtainMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.8,
  metalness: 0.1,
  color: "black"
});

export enum LightColor {
  Banana = 0xFFDE9F,
  Cyan = 0xA6FFFA,
  Teal = 0xABFFE1,
  Salmon = 0xFFBEAA
}

export default {
  bulbMaterialProps,
  lightStandMaterial,
  curtainMaterial,
}