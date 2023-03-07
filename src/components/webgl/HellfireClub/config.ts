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

export enum LightColor {
  Yellow = 0xFFB931,
  Cyan = 0x45E9FF,
  Teal = 0x29FFB2,
  Tangerine = 0xFE7044
}

export default {
  bulbMaterialProps,
  lightStandMaterial,
}