export type Tuple<T, N extends Number> = [T, ...T[]] & { length: N };

export type Vector3 = [number, number, number];

export namespace Camera {
  export type Hotspot =
    "default" |
    "shelf" |
    "noticeBoard" |
    "chalkBoard" |
    "retroTV" |
    "vecnaBoard" |
    "faqBoard";

  export type MouseEvent = "rotate" | "pan" | undefined;

  export type Zoom = {
    cameraPosition?: Vector3,
    lookAt?: THREE.Vector3,
    allowEvent?: RotateEvent
  }

  type RotateEvent = {
    name: "rotate",
    props: {
      azimuth: {
        min: number,
        max: number,
        vwMultiplier: number
      }
    },
    default: {
      lookAtY: number,
      azimuth: number,
      azimuthScaleFactor: number
    }
  }
}

export type Viewport = {
  xs?: undefined,
  sm: string,
  md: string,
  lg: string
}