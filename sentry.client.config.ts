// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import { init } from "@sentry/nextjs";

export default {}

// if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_SENTRY_DSN) throw Error("Undefined NEXT_PUBLIC_SENTRY_DSN");

// if (process.env.NODE_ENV === "production") {
//   init({
//     dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
//     environment: process.env.NEXT_PUBLIC_NODE_ENV,

//     tracesSampleRate: 1,
//     debug: false,
//     replaysOnErrorSampleRate: 1.0,
//     replaysSessionSampleRate: 0.1,
//   });
// }
