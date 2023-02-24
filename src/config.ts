import * as THREE from "three";
import { Hotspot, Zoom } from "types";

const gltf = {
  scale: 4
}

// Vector3 -> camera position
const zoomChoices: { [h in Hotspot]: Zoom } = {
  default: {
    cameraPosition: [3, 3, 3],
    lookAt: new THREE.Vector3(0, 0, 0)
  },
  //Will be registered in useZoom
  retroTV: {},
  bulletinBoard: {},
  standingBoard: {},
  shelf: {}
}

export default {
  gltf,
  zoomChoices
}