import * as THREE from "three";

const bulbMaterialProps: THREE.MeshStandardMaterialParameters = {
  toneMapped: false,
  emissiveIntensity: 10
}

const lightStandMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.5,
  metalness: 0.1,
  color: "#040406"
});

export enum PolaroidColor {
  Bottom = 0x8e8d8d,
  Middle = 0x7f7c7c,
  Top = 0x756d6d
}

export default {
  bulbMaterialProps,
  lightStandMaterial,
}