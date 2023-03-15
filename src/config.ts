import * as THREE from "three";
import { Hotspot, Viewport, Zoom } from "types";

/**
 * Order sensitive, initially set the zoom props of the hotspots to be empty, which 
 * will be filler in the useZoom later
 */
const zoomChoices: { [h in Hotspot]: Zoom } = {
  default: {
    cameraPosition: [1.95, 1.7, 1.41],
    lookAt: new THREE.Vector3(0, 1, 0)
  },
  retroTV: {},
  bulletinBoard: {},
  standingBoard: {},
  book: {},
  shelf: {}
}

const viewport: Viewport = {
  sm: "456px",
  md: "768px",
  lg: "1200px"
}

export default {
  zoomChoices,
  viewport
}