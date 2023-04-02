import * as THREE from "three";
import { Camera, Viewport } from "types";

const defaultLookAt = {
  y: -20,
  azimuth: 1.1,
  scale: 100
}

/**
 * Order sensitive, initially set the zoom props of the hotspots to be empty, which 
 * will be filler in the useZoom later
 */
const zoomSettings: { [h in Camera.Hotspot]: Camera.Zoom } = {
  default: {
    cameraPosition: [3.81, 2.29, 2.26],
    lookAt: new THREE.Vector3(
      -Math.sin(defaultLookAt.azimuth) * defaultLookAt.scale,
      defaultLookAt.y,
      -Math.cos(defaultLookAt.azimuth) * defaultLookAt.scale
    ),
    allowEvent: {
      name: "rotate",
      props: {
        azimuth: {
          min: -0.05,
          max: 2,
          vwMultiplier: 0.00045
        }
      }
    }
  },
  retroTV: {},
  bulletinBoard: {
    cameraPosition: [-1.7, 1.75, 0.15]
  },
  standingBoard: {
    cameraPosition: [-1.28, 1.49, -1.81]
  },
  book: {
    cameraPosition: [0, 1.2, -0.7]
  },
  shelf: {
    cameraPosition: [2.07, 1.15, -3.01]
  }
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