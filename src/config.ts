import { Camera } from "types";

const zoomDuration = 1; //second

const gltf = {
  scale: 4
}

const cameras: Camera[] = [
  {
    position: [0, 5, 15],
    rotation: [0, 1, 0]
  },
  {
    position: [10, 5, 5],
    rotation: [0, 0, 0]
  }
]

export default {
  zoomDuration,
  gltf,
  cameras
}