import * as THREE from "three";
import { LightColor } from "config";

const curtain = new THREE.MeshPhongMaterial({
  color: "#171717"
});

const lightStand = new THREE.MeshStandardMaterial({
  roughness: 0.5,
  metalness: 0.1,
  color: "#040406"
});

const wood = new THREE.MeshStandardMaterial({
  roughness: 0.8
});

//#region bulb
const yellow = new THREE.MeshStandardMaterial({
  toneMapped: false,
  emissiveIntensity: 10,
  color: LightColor.Yellow,
  emissive: LightColor.Yellow
});

const cyan = new THREE.MeshStandardMaterial({
  toneMapped: false,
  emissiveIntensity: 10,
  color: LightColor.Cyan,
  emissive: LightColor.Cyan
});

const teal = new THREE.MeshStandardMaterial({
  toneMapped: false,
  emissiveIntensity: 10,
  color: LightColor.Teal,
  emissive: LightColor.Teal
});

const tangerine = new THREE.MeshStandardMaterial({
  toneMapped: false,
  emissiveIntensity: 10,
  color: LightColor.Tangerine,
  emissive: LightColor.Tangerine
});

const none = new THREE.MeshBasicMaterial({
  color: "black"
});
//#endregion

export default {
  wood,
  curtain,
  lightStand,
  bulb: {
    yellow,
    cyan,
    teal,
    tangerine,
    none
  }
}