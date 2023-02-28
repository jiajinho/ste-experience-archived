export type Tuple<T, N extends Number> = [T, ...T[]] & { length: N };

export type Vector3 = [number, number, number];

export type Hotspot =
  "default" |
  "shelf" |
  "bulletinBoard" |
  "standingBoard" |
  "retroTV";

export type Zoom = {
  cameraPosition?: Vector3,
  lookAt?: THREE.Vector3
}