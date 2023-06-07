import { MeshPhongMaterial, MeshStandardMaterial, MeshBasicMaterial } from "three";
import { LightColor } from "@/config";

const curtain = new MeshPhongMaterial({
  color: "#4D4D4D"
});

const lightStand = new MeshStandardMaterial({
  roughness: 0.5,
  metalness: 0.1,
  color: "#040406"
});

const wood = new MeshStandardMaterial({
  roughness: 0.8
});

//#region bulb
const yellow = new MeshStandardMaterial({
  toneMapped: false,
  emissiveIntensity: 10,
  color: LightColor.Yellow,
  emissive: LightColor.Yellow
});

const cyan = new MeshStandardMaterial({
  toneMapped: false,
  emissiveIntensity: 10,
  color: LightColor.Cyan,
  emissive: LightColor.Cyan
});

const teal = new MeshStandardMaterial({
  toneMapped: false,
  emissiveIntensity: 10,
  color: LightColor.Teal,
  emissive: LightColor.Teal
});

const tangerine = new MeshStandardMaterial({
  toneMapped: false,
  emissiveIntensity: 10,
  color: LightColor.Tangerine,
  emissive: LightColor.Tangerine
});

const none = new MeshBasicMaterial({
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