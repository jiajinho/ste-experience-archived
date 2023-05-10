import * as THREE from "three";

import locale from "locale";
import { Camera, Vector3, VectorIndex, Viewport } from "types";

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
  faq: "https://mightyexperiences.com/support",
  ticketing: "https://mightyexperiences.com/tickets/ste-sg",
  eventLocation: "https://www.google.com/maps/place/201+Victoria+St,+%2302-01+Bugis%2B,+Singapore+188067/@1.2994132,103.8517561,17z/data=!3m1!4b1!4m6!3m5!1s0x31da19badc34bef9:0x1a2a8c1ca9bcd5e9!8m2!3d1.2994132!4d103.8539448!16s%2Fg%2F11pvcvfy68?coh=164777&entry=tt&shorturl=1",
  tiktok: "https://www.tiktok.com/@strangerthingsencounter",
  instagram: "https://www.instagram.com/strangerthings.encounter/"
}

/**
 * Order sensitive, initially set the zoom props of the hotspots to be empty, which 
 * will be filler in the useZoom later
 */
const zoomSettings: { [h in Camera.Hotspot]: Camera.Zoom } = {
  default: {
    name: locale.global.hotspot.default,
    cameraBox: {
      position: [3.81, 2.29, 2.26],
      lookAt: [
        -Math.sin(1.05) * 100, //-Math.sin(default.azimuth) * default.azimuthScaleFactor
        -20, //default.lookAtY
        -Math.cos(1.05) * 100 //-Math.cos(default.azimuth) * default.azimuthScaleFactor
      ]
    },
    allowEvent: {
      name: "rotate",
      props: {
        azimuth: {
          min: 0.35,
          max: 1.73,
          constant: 0.4,
          maxAspect: 2.25
        }
      },
      default: {
        lookAtY: -20,
        azimuth: 1.05,
        azimuthScaleFactor: 100
      }
    }
  },
  retroTV: {
    name: locale.global.hotspot.retroTV,
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
    name: locale.global.hotspot.noticeBoard,
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
    name: locale.global.hotspot.vecnaBoard,
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
    cameraUp: new THREE.Vector3(-1, 0, 0)
  },
  faqBoard: {
    name: locale.global.hotspot.faqBoard,
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
    cameraUp: new THREE.Vector3(0.08, 0, 1)
  },
  map: {
    name: locale.global.hotspot.map,
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
    cameraUp: new THREE.Vector3(-0.063, 0, 1)
  },
  chalkBoard: {
    name: locale.global.hotspot.chalkBoard,
    cameraBox: {
      position: [0, 0, 1.5],
      lookAt: [0, 0, -1]
    }
  },
  shelf: {
    name: locale.global.hotspot.shelf,
    cameraBox: {
      position: [2.4, 0.13, 0],
      lookAt: [-1, 0, 0]
    }
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

export default {
  link,
  zoomSettings,
  viewport,
  cards
}