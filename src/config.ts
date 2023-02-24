import * as THREE from "three";
import { Hotspot, Zoom } from "types";

const gltf = {
  scale: 4
}

/**
 * Order sensitive, initially set the zoom props of the hotspots to be empty, which 
 * will be filler in the useZoom later
 */
const zoomChoices: { [h in Hotspot]: Zoom } = {
  default: {
    cameraPosition: [3, 3, 3],
    lookAt: new THREE.Vector3(0, 0, 0)
  },
  retroTV: {},
  bulletinBoard: {},
  standingBoard: {},
  shelf: {}
}

export default {
  gltf,
  zoomChoices
}