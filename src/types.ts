export type IntrinsicHTML<T extends keyof JSX.IntrinsicElements> = Omit<
  JSX.IntrinsicElements[T],
  'ref'
>;

export type Tuple<T, N extends Number> = [T, ...T[]] & { length: N };

export type Vector3 = [number, number, number];

export enum VectorIndex {
  x = 0,
  y = 1,
  z = 2
}

export namespace Asset {
  export type Image = Merch;

  export type Merch =
    "merchVecna" |
    "merchEleven" |
    "merchVHS" |
    "merchMug" |
    "merchCap" |
    "merchVinyl" |
    "merchBag" |
    "merchShirt" |
    "merchDenim"
}

export namespace Card {
  export type Event =
    "the-encounter" |
    "when-where" |
    "merch" |
    undefined;
}

export namespace Camera {
  export type Hotspot =
    "default" |
    "shelf" |
    "noticeBoard" |
    "chalkBoard" |
    "retroTV" |
    "vecnaBoard" |
    "faqBoard" |
    "map";

  export type MouseEvent = "rotate" | "pan" | undefined;

  export type Zoom = {
    name: string,
    cameraBox: {
      position: Vector3,
      lookAt: Vector3
    }
    cameraPosition?: Vector3,
    lookAt?: Vector3,
    cameraUp?: THREE.Vector3,
    allowEvent?: RotateEvent,
    aspect?: {
      minAspect: number,
      maxAspect: number,
      vectorIndex: VectorIndex,
      constant: number
    }
  }

  type RotateEvent = {
    name: "rotate",
    props: {
      azimuth: {
        sensitivity: number,
        min: number,
        max: number,
        aspect: {
          constant: number,
          max: number
        }
      },
      polar: {
        sensitivity: number,
        min: number,
        max: number
      }
    },
    default: {
      polar: {
        value: number,
      },
      azimuth: {
        value: number,
        scaleFactor: number
      }
    }
  }
}

export type Viewport = {
  xs?: undefined,
  sm: string,
  md: string,
  lg: string
}