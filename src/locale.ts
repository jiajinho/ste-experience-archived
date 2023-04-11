const global = {
  stEncounter: "The Encounter"
}

const loading = {
  premise: `
    It’s game night and you’ve gathered with your Hellfire Club mates to 
    continue your ventures into the Forgotten Realms. Just as the party was 
    about to land the killing blow on the Lord of Darkness, Vecna makes an 
    explosive entrance! Escape and make your way through iconic locations 
    in Hawkins and the Upside Down.
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