//https://github.com/vercel/next.js/tree/canary/examples/with-facebook-pixel

import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default () => (
  <>
    <Head>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>

      <meta
        name="facebook-domain-verification"
        content={process.env.NEXT_PUBLIC_META_DOMAIN_ID}
      />
    </Head>

    <Script
      id="fb-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', ${process.env.NEXT_PUBLIC_FB_PIXEL_ID});
          fbq('track', 'PageView');
      `}}
    />
  </>
);
