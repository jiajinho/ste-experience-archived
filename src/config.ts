import * as THREE from "three";
import { Hotspot } from "types";

const gltf = {
  scale: 4
}

// Vector3 -> camera position
const camera = {
  default: {
    position: new THREE.Vector3(10, 10, 10),
    lookAt: new THREE.Vector3(0, 0, 0)
  }
}

export default {
  gltf,
  camera
}