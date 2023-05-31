//https://github.com/vercel/next.js/tree/canary/examples/with-google-tag-manager

import React, { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();

  useEffect(() => {
    const pageView = (url: string) => {
      //@ts-ignore
      window.dataLayer.push({
        event: 'pageview',
        page: url,
      });
    }

    router.events.on('routeChangeComplete', pageView);
    return () => {
      router.events.off('routeChangeComplete', pageView);
    }
  }, [router.events])

  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}');
          `,
        }}
      />
    </>
  )
}