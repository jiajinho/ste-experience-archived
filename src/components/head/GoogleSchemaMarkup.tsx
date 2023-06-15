//https://webmasters.stackexchange.com/questions/104987/how-to-change-which-image-from-website-is-shown-in-google-search-result
//https://developers.google.com/search/docs/appearance/structured-data/event

import React from 'react';
import Script from 'next/script';

import locale from '@/locale';
import config from '@/config';

export default () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": locale.global.title,
    "description": locale.global.description,
    "startDate": "2023-06-30",
    "endDate": "2023‐10‐01",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Bugis+",
      "address": {
        "@type": "PostalAddress",
        "name": "Bugis+, Level 2, 201 Victoria St, Singapore 188067"
      }
    },
    "image": [
      "/schema-markup-1x1.png",
      "/schema-markup-4x3.png",
      "/schema-markup-16x9.png"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Regular XPASS - Weekday",
        "priceCurrency": "SGD",
        "price": "39",
        "url": config.link.ticketing
      },
      {
        "@type": "Offer",
        "name": "Regular XPASS - Weekend",
        "priceCurrency": "SGD",
        "price": "49",
        "url": config.link.ticketing
      },
      {
        "@type": "Offer",
        "name": "Regular XPASS - Weekend",
        "priceCurrency": "SGD",
        "price": "49",
        "url": config.link.ticketing
      },
      {
        "@type": "Offer",
        "name": "VIP XPASS - Weekday",
        "priceCurrency": "SGD",
        "price": "109",
        "url": config.link.ticketing
      },
      {
        "@type": "Offer",
        "name": "VIP XPASS - Weekend",
        "priceCurrency": "SGD",
        "price": "119",
        "url": config.link.ticketing
      },
    ],
    "organizer": {
      "@type": "Organization",
      "name": "Mighty Jaxx International Pte. Ltd.",
      "url": "https://mightyjaxx.com/"
    },
    "sponsor": {
      "@type": "Organization",
      "name": "Netflix, Inc.",
      "url": "https://www.netflix.com/"
    }
  }

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
