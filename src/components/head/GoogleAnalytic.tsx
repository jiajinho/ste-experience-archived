//https://github.com/vercel/next.js/tree/canary/examples/with-google-tag-manager

import React from 'react';
import Script from 'next/script';

export default () => (
  <>
    <Script
      id="gtag-script"
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_ID}`}
    />

    <Script
      id="gdn-script"
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GDN_ID}`}
    />

    <Script
      id="gtag-datalayer"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GTAG_ID}');   
          gtag('config', '${process.env.NEXT_PUBLIC_GDN_ID}');     
        `
      }}
    />
  </>
);

