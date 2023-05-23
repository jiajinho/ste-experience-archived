import { Merch } from "types";

const global = {
  stEncounter: "The Encounter",
  title: "Stranger Things - The Encounter",
  hotspot: {
    default: "Club Room",
    retroTV: "Event Video",
    noticeBoard: "Fan Gallery",
    vecnaBoard: "Event Summary",
    faqBoard: "Key Questions",
    map: "Event Location",
    chalkBoard: "About XPASS",
    shelf: "Event Exclusives"
  }
}

const loading = {
  premise: `
    A typical game night with your Hellfire Club mates is interrupted by the opening of 
    rifts! Can you brave the dangers, and escape Vecna before it's too late?
  `,
  continueBtn: "Continue",
  skipBtn: "Skip"
}

const overlayUI = {
  presentedBy: "Presented By",
  ticketBtn: "Buy Tickets"
}

const card = {
  theEncounter: {
    star: "Immersive retail experience",
    puppet: "Purchase event-exclusive merchandise",
    ghost: "Collect and customize digital collectibles",
    gelato: "Visit Unique Stranger Things Themed F&B Establishments"
  },
  whenWhere: {
    date: {
      title: "Date",
      value: "30th June to 1st October 2023"
    },
    time: {
      title: "Time",
      value: `
        <b>L2:</b> Open daily | 10am to 10pm

        <b>L7:</b> Open Monday to Thursday from
        2pm to 10pm (last entry at 8pm)

        Friday to Sunday from
        10am to 10pm (last entry at 8pm)
      `
    },
    location: {
      title: "Location",
      value: `
        Bugis+, Level 2
        (201 Victoria St, Singapore 188067)
      `
    }
  },
  merch: {
    item: {
      merchVecna: [
        "<b>Vecna</b>",
        "Upside Down Edition"
      ],
      merchEleven: [
        "<b>Eleven's Greatest Looks:</b>",
        "Season 4"
      ],
      merchVHS: [
        "Stranger Things:",
        "<b>VHS Logo Light</b>"
      ],
      merchMug: [
        "Hellfire Club",
        "<b>Demon Embossed Mug</b>"
      ],
      merchCap: [
        "Hellfire Club",
        "<b>Patch Black Snapback Hat"
      ],
      merchVinyl: [
        "Stranger Things:",
        "<b>Soundtrack From Season 4 Vinyl Record</b>"
      ],
      merchBag: [
        "Stranger Things:",
        "<b>Starcourt Mall Hawkins Indiana Black Tote Bag</b>"
      ],
      merchShirt: [
        "Stranger Things:",
        "<b>Custom 1:1 T-Shirt and Tote Bag</b>"
      ],
      merchDenim: [
        "Hellfire Club",
        "<b>Denim Vest</b>"
      ]
    } satisfies { [k in Merch]: [string, string] },
    closeBtn: "Close"
  }
}

const maintenance = {
  title: "Website is currently under maintenance",
  description: `
    We are performing maintenance to the website. We apologize 
    for any inconvenience this may cause, and we thank you for 
    your understanding.
  `
}

export default {
  global,
  loading,
  overlayUI,
  card,
  maintenance
}