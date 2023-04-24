import * as THREE from "three";

import locale from "locale";
import { Camera, Vector3, Viewport } from "types";

import Puppet from "@html/common/svg/Puppet";
import Star from "@html/common/svg/Star";
import Ghost from "@html/common/svg/Ghost";
import Gelato from "@html/common/svg/Gelato";
import Calendar from "@html/common/svg/Calendar";
import Clock from "@html/common/svg/Clock";
import School from "@html/common/svg/School";


const viewport: Viewport = {
  sm: "456px",
  md: "768px",
  lg: "1200px"
}

const link = {
  faq: "https://google.com",
  ticketing: "https://google.com",
  eventLocation: "https://goo.gl/maps/zM7E26fDeZR5RJ7d8",
  tiktok: "https://google.com"
}

/**
 * Order sensitive, initially set the zoom props of the hotspots to be empty, which 
 * will be filler in the useZoom later
 */
const zoomSettings: { [h in Camera.Hotspot]: Camera.Zoom } = {
  default: {
    cameraPosition: [3.81, 2.29, 2.26],
    lookAt: [
      -Math.sin(1.1) * 100, //-Math.sin(default.azimuth) * default.azimuthScaleFactor
      -20, //default.lookAtY
      -Math.cos(1.1) * 100 //-Math.cos(default.azimuth) * default.azimuthScaleFactor
    ],
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
  retroTV: {
    cameraPosition: [-1.61, 1.07, 3.13],
    lookAt: [-2.61, 1.07, 3.13]
  },
  noticeBoard: {
    cameraPosition: [-1.72, 1.75, 0.15],
    lookAt: [-2.72, 1.75, 0.15]
  },
  vecnaBoard: {
    cameraPosition: [0, 1.83, 0.2],
    lookAt: [0, 0.83, 0.2],
    cameraUp: new THREE.Vector3(-1, 0, 0)
  },
  faqBoard: {
    cameraPosition: [0, 1.825, -0.42],
    lookAt: [0, 0.825, -0.42],
    cameraUp: new THREE.Vector3(0.05, -1, 0.55)
  },
  map: {
    cameraPosition: [0.04, 1.82, -0.72],
    lookAt: [0.04, 0.82, -0.72],
    cameraUp: new THREE.Vector3(0, -1, 0)
  },
  chalkBoard: {
    cameraPosition: [-1.246, 1.35, -1.898],
    lookAt: [-1.835, 1.35, -2.706]
  },
  shelf: {
    cameraPosition: [2.07, 1.15, -2.29],
    lookAt: [2.07, 1.15, -3.29]
  }
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
        icon: <Calendar style={{ width: "55%" }} />
      },
      {
        ...locale.card.whenWhere.time,
        icon: <Clock style={{ width: "50%" }} />
      },
      {
        ...locale.card.whenWhere.location,
        icon: <School style={{ height: "45%" }} />
      }
    ]
  }
}

export default {
  link,
  zoomSettings,
  viewport,
  cards
}