const global = {
  stEncounter: "The Encounter"
}

const loading = {
  premise: `
    Everyone from the Hellfire Club 
    has been captured by the Vecna. 
    Please help us to find them.
  `,
  continueBtn: "Continue"
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
    gelato: "Reward youself for saving the day with some food and drinks at Scoops Ahoy"
  },
  whenWhere: {
    date: {
      title: "Date",
      value: ["30 Jun to 1 Oct"]
    },
    time: {
      title: "Time",
      value: [
        "Mon to Thu", "|", "2PM-10PM",
        "Fri to Sun", "|", "10AM-10PM"
      ]
    },
    location: {
      title: "Location",
      value: [`       
        Bugis+, Level 7,
        201 Victoria St, #07 - 01,
        Singapore 188067
      `]
    }
  }
}

export default {
  global,
  loading,
  overlayUI,
  card
}