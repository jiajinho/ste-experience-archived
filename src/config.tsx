import * as THREE from "three";

import locale from "locale";
import { Camera, Viewport } from "types";

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

const cards = {
  theEncounter: [
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
  ],
  whenWhere: [
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

export default {
  zoomSettings,
  viewport,
  cards
}