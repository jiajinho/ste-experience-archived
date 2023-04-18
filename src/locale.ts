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

const faq = {
  xPass: {
    question: "What is an XPass?",
    answer: `
      It is your admission ticket to the event that can be customized with digital collectibles 
      (frgmnts) that you collect as you journey through The Encounter. In addition, collecting
      these frgmnts may allow you to redeem special benefits in our retail area.
    `
  },
  where: {
    question: "Where can I purchase my ticket?",
    answer: `
      You can purchase the tickets by clicking the buy now button on this screen, or our onsite 
      POS system on level 2. We encourage you to buy the tickets online due to limited availability.
    `
  },
  ticketType: {
    question: "What type of tickets are there?",
    answer: `
      You can get Regular or VIP tickets. For Regular tickets, you get access to the experience and a 
      5% discount when you spend over 60 SGD in the retail space. For the VIP tickets, you get access 
      to the experience, the Hellfire Club Capsule Collection, consisting of a Hat and a T-shirt 
      (one size) and Priority Event Access.
    `
  },
  ticketCost: {
    question: "How much are the tickets?",
    answer: `
      The Regular and VIP tickets are normally 39 SGD and 109 SGD respectively.`
  },
  cta: "Read More"
}

const map = {
  title: "Directions",
  cta: "Read more"
}

const vecnaBoard = {
  title: `
    Visit Asia's first-ever
    Stranger Things: The Encounter
    Coming to Singapore!
  `,
  cta: "Book Now",
  sponsors: "Sponsors"
}

export default {
  global,
  loading,
  overlayUI,
  card,
  faq,
  map,
  vecnaBoard
}