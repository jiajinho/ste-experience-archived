import * as THREE from "three";
import { Camera, Viewport } from "types";

const viewport: Viewport = {
  sm: "456px",
  md: "768px",
  lg: "1200px"
}

/**
 * Order sensitive, initially set the zoom props of the hotspots to be empty, which 
 * will be filler in the useZoom later
 */
const zoomSettings: { [h in Camera.Hotspot]: Camera.Zoom } = {
  default: {
    allowEvent: {
      name: "rotate",
      props: {
        azimuth: {
          min: -0.05,
          max: 2,
          vwMultiplier: 0.00045
        }
      },
      default: {
        lookAtY: -20,
        azimuth: 1.1,
        azimuthScaleFactor: 100
      }
    }
  },
  retroTV: {},
  noticeBoard: {},
  vecnaBoard: {
    cameraUp: new THREE.Vector3(-1, 0, 0)
  },
  faqBoard: {
    cameraUp: new THREE.Vector3(0.05, -1, 0.55)
  },
  map: {
    cameraUp: new THREE.Vector3(0, -1, 0)
  },
  chalkBoard: {},
  shelf: {}
}

export default {
  zoomSettings,
  viewport
}