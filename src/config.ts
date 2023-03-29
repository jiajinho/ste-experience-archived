import * as THREE from "three";
import { Camera, Viewport } from "types";

const defaultLookAt = {
  y: -20,
  azimuth: 0.9,
  scale: 100
}

/**
 * Order sensitive, initially set the zoom props of the hotspots to be empty, which 
 * will be filler in the useZoom later
 */
const zoomSettings: { [h in Camera.Hotspot]: Camera.Zoom } = {
  default: {
    cameraPosition: [1.95, 1.7, 1.41],
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
  retroTV: {
    cameraPosition: [-2.21, 1.07, 3.13]
  },
  bulletinBoard: {
    cameraPosition: [-2.22, 1.75, 0.15]
  },
  standingBoard: {
    cameraPosition: [-1.62, 1.41, -2.39]
  },
  book: {
    cameraPosition: [0, 1.2, -0.7]
  },
  shelf: {
    cameraPosition: [2.07, 1.15, -3.29]
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