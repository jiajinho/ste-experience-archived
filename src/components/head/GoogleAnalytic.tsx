//https://github.com/vercel/next.js/tree/canary/examples/with-google-tag-manager

import React from 'react';
import Script from 'next/script';
import config from '@/config';

export default () => (
  <>
    <Script
      id="gtag-script"
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${config.analyticId.googleTag}`}
    />

    <Script
      id="gdn-script"
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${config.analyticId.gdn}`}
    />

    <Script
      id="gtag-datalayer"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());
        
          gtag('config', '${config.analyticId.googleTag}');   
          gtag('config', '${config.analyticId.gdn}');     
        `
      }}
    />
  </>
);

