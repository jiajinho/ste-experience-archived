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

const curtainMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.8,
  metalness: 0.1,
  color: "black"
})

export default {
  bulbMaterialProps,
  lightStandMaterial,
  curtainMaterial
}