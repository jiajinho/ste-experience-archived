import { Vector3 as Vector3JS } from "three";

import locale from "@/locale";
import { Camera, Merch, Vector3, VectorIndex, Viewport } from "@/types";

import Puppet from "@html/common/svg/Puppet";
import Gelato from "@html/common/svg/Gelato";
import Calendar from "@html/common/svg/Calendar";
import Clock from "@html/common/svg/Clock";
import School from "@html/common/svg/School";
import Star from "@html/common/svg/Star";
import Ghost from "@html/common/svg/Ghost";

const analyticId = {
  fbPixel: "784354639968136",
  metaDomain: "1wbeuo79jz1ojb2x0b6vih9zqf352f",
  googleDomain: "JwKln_M7i5mn2-8q89Aqg8o7Jw_cNKwOFFvlxvK_8oc",
  googleTag: "G-J3V93DVFGL",
  gdn: "AW-10829690292"
}

const viewport: Viewport = {
  sm: "456px",
  md: "768px",
  lg: "1200px"
}

const link = {
  faq: "https://mightyexperiences.com/support",
  ticketing: "https://mightyexperiences.com?source=body",
  eventLocation: "https://www.google.com.sg/maps/place/Stranger+Things+The+Encounter:+Singapore/@1.2994132,103.8513699,17z/data=!3m1!4b1!4m6!3m5!1s0x31da199103414893:0x9ffbf0eb30a7b82d!8m2!3d1.2994132!4d103.8539448!16s%2Fg%2F11str4c0ny",
  tiktok: "https://www.tiktok.com/@strangerthingsencounter",
  instagram: "https://www.instagram.com/strangerthings.encounter/"
}

const merchUrl: { [k in Merch]: string } = {
  merchVecna: "static/cards/merch/vecna.png",
  merchEleven: "static/cards/merch/eleven.png",
  merchVHS: "static/cards/merch/vhs.png",
  merchMug: "static/cards/merch/mug.png",
  merchCap: "static/cards/merch/cap.png",
  merchVinyl: "static/cards/merch/vinyl.png",
  merchBag: "static/cards/merch/tote-bag.png",
  merchShirt: "static/cards/merch/shirt.png",
  merchDenim: "static/cards/merch/denim.png"
}

/**
 * Order sensitive, initially set the zoom props of the hotspots to be empty, which 
 * will be filler in the useZoom later
 */
const zoomSettings: { [h in Camera.Hotspot]: Camera.Zoom } = {
  default: {
    name: locale.hotspot.default,
    cameraBox: {
      position: [3.81, 2.29, 2.26],
      lookAt: [
        -Math.sin(1.05) * 100, //-Math.sin(default.azimuth) * default.azimuthScaleFactor
        -20, //default.polar.value
        -Math.cos(1.05) * 100 //-Math.cos(default.azimuth) * default.azimuthScaleFactor
      ]
    },
    allowEvent: {
      name: "rotate",
      props: {
        azimuth: {
          sensitivity: 0.001,
          min: 0.35,
          max: 1.73,
          aspect: {
            constant: 0.4,
            max: 2.25
          }
        },
        polar: {
          sensitivity: 0.1,
          min: -35,
          max: -5,
        }
      },
      default: {
        polar: {
          value: -20
        },
        azimuth: {
          value: 1.05,
          scaleFactor: 100
        }
      }
    }
  },
  retroTV: {
    name: locale.hotspot.retroTV,
    cameraBox: {
      position: [1, 0, 0],
      lookAt: [-1, 0, 0]
    },
    aspect: {
      minAspect: 0.5,
      maxAspect: 1.05,
      vectorIndex: VectorIndex.x,
      constant: -0.4
    }
  },
  noticeBoard: {
    name: locale.hotspot.noticeBoard,
    cameraBox: {
      position: [3, 0, 0],
      lookAt: [-1, 0, 0]
    },
    aspect: {
      minAspect: 0.5,
      maxAspect: 1.5,
      vectorIndex: VectorIndex.x,
      constant: -0.95
    }
  },
  vecnaBoard: {
    name: locale.hotspot.vecnaBoard,
    cameraBox: {
      position: [0, 1.2, 0],
      lookAt: [0, -1, 0]
    },
    aspect: {
      minAspect: 1.15,
      maxAspect: 1.58,
      vectorIndex: VectorIndex.y,
      constant: -0.15
    },
    cameraUp: new Vector3JS(-1, 0, 0)
  },
  faqBoard: {
    name: locale.hotspot.faqBoard,
    cameraBox: {
      position: [0, 0.45, 0],
      lookAt: [0, -1, 0]
    },
    aspect: {
      minAspect: 0.55,
      maxAspect: 0.92,
      vectorIndex: VectorIndex.y,
      constant: -0.1
    },
    cameraUp: new Vector3JS(0.08, 0, 1)
  },
  map: {
    name: locale.hotspot.map,
    cameraBox: {
      position: [0, 0.48, -0.015],
      lookAt: [0, -1, 0]
    },
    aspect: {
      minAspect: 1.34,
      maxAspect: 1.47,
      vectorIndex: VectorIndex.y,
      constant: -0.06
    },
    cameraUp: new Vector3JS(-0.063, 0, 1)
  },
  chalkBoard: {
    name: locale.hotspot.chalkBoard,
    cameraBox: {
      position: [0, 0, 1.8],
      lookAt: [0, 0, -1]
    },
    aspect: {
      minAspect: 0.55,
      maxAspect: 1.65,
      vectorIndex: VectorIndex.z,
      constant: -0.2
    }
  },
  shelf: {
    name: locale.hotspot.shelf,
    cameraBox: {
      position: [2.4, 0, 0],
      lookAt: [-1, 0, 0]
    }
  }
}

export enum LightColor {
  Yellow = 0xFFB931,
  Cyan = 0x45E9FF,
  Teal = 0x29FFB2,
  Tangerine = 0xFE7044,
  Crimson = 0xfecccc
}

const cards = {
  theEncounter: {
    position: [-0.2, 0.01, 0.11] satisfies Vector3,
    rotateY: -0.43,
    content: [
      {
        description: locale.card.theEncounter.star,
        icon: <Star />
      },
      {
        description: locale.card.theEncounter.puppet,
        icon: <Puppet />
      },
      {
        description: locale.card.theEncounter.ghost,
        icon: <Ghost />
      },
      {
        description: locale.card.theEncounter.gelato,
        icon: <Gelato />
      }
    ]
  },
  whenWhere: {
    position: [-0.05, 0.01, -0.15] satisfies Vector3,
    rotateY: 0.15,
    content: [
      {
        ...locale.card.whenWhere.date,
        icon: <Calendar style={{ width: "55%" }} />,
        style: undefined
      },
      {
        ...locale.card.whenWhere.time,
        icon: <Clock style={{ width: "50%" }} />,
        style: { alignSelf: "start" }
      },
      {
        ...locale.card.whenWhere.location,
        icon: <School style={{ height: "45%" }} />,
        style: undefined
      }
    ]
  }
}

const merchCard: {
  [k in Merch]: {
    content: [string, string],
    heightRatio?: number,
    top?: number,
    left?: number
  }
} = {
  merchVecna: {
    content: locale.card.merch.item.merchVecna,
  },
  merchEleven: {
    content: locale.card.merch.item.merchEleven,
    heightRatio: 0.55
  },
  merchVHS: {
    content: locale.card.merch.item.merchVHS,
    heightRatio: 0.7,
    top: 44
  },
  merchMug: {
    content: locale.card.merch.item.merchMug,
    heightRatio: 0.55,
    top: 42,
    left: 44
  },
  merchCap: {
    content: locale.card.merch.item.merchCap,
    heightRatio: 0.55,
    top: 41
  },
  merchVinyl: {
    content: locale.card.merch.item.merchVinyl,
    heightRatio: 0.65,
    top: 38
  },
  merchBag: {
    content: locale.card.merch.item.merchBag,
    heightRatio: 0.7,
    top: 32
  },
  merchShirt: {
    content: locale.card.merch.item.merchShirt,
  },
  merchDenim: {
    content: locale.card.merch.item.merchDenim,
    heightRatio: 0.7
  },
}

const cdnBaseUrl = 'https://d2sie3twm806m7.cloudfront.net/sg-2023/general_admission_3d';

export default {
  analyticId,
  merchUrl,
  link,
  zoomSettings,
  viewport,
  cards,
  merchCard,
  cdnBaseUrl
}