export type Tuple<T, N extends Number> = [T, ...T[]] & { length: N };

export type Vector3 = [number, number, number];

export type Hotspot =
  "default" |
  "shelf" |
  "bulletinBoard" |
  "standingBoard" |
  "retroTV" |
  "book";

export type Zoom = {
  cameraPosition?: Vector3,
  lookAt?: THREE.Vector3
}

export namespace Camera {
  export type Rotate = {
    azimuth: {
      min: number,
      max: number,
      vwMultiplier: number
    }
  }
}

export type Viewport = {
  xs?: undefined,
  sm: string,
  md: string,
  lg: string
}