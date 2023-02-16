import { Hotspot, Vector3 } from "types";

const zoomDuration = 1; //second

const gltf = {
  scale: 4
}

// Vector3 -> camera position
const hotspots: { [k in Hotspot]: Vector3 } = {
  default: [10, 10, 10],
  cupboard: [9.26, 4.59, -11.36],
  bulletin: [-8.58, 8.67, -3.06]
}

export default {
  zoomDuration,
  gltf,
  hotspots
}