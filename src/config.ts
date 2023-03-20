import * as THREE from "three";
import { Hotspot, Viewport, Zoom } from "types";


const defaultLookAt = {
  y: -20,
  alpha: 0.87,
  scale: 100
}

/**
 * Order sensitive, initially set the zoom props of the hotspots to be empty, which 
 * will be filler in the useZoom later
 */
const zoomSettings: { [h in Hotspot]: Zoom } = {
  default: {
    cameraPosition: [1.95, 1.7, 1.41],
    lookAt: new THREE.Vector3(
      -Math.sin(defaultLookAt.alpha) * defaultLookAt.scale,
      defaultLookAt.y,
      -Math.cos(defaultLookAt.alpha) * defaultLookAt.scale
    )
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
  defaultLookAt,
  zoomSettings,
  viewport
}