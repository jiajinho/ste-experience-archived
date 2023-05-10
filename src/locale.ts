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
  ticketBtn: "Tickets"
}

const card = {
  theEncounter: {
    star: "Immersive interactive retail experience",
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
  }
}

export default {
  global,
  loading,
  overlayUI,
  card
}