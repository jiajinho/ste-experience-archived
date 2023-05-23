import localFont from "@next/font/local";
import { Inter } from "@next/font/google";

const benguiat = localFont({
  src: [
    {
      path: "../public/static/fonts/benguiat-400.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/static/fonts/benguiat-700.woff2",
      weight: "700",
      style: "normal"
    }
  ]
});

const chalkiez = localFont({ src: "../public/static/fonts/chalkiez-400.woff2" });

const inter = Inter({ subsets: ["latin"] });

const maax = localFont({ src: "../public/static/fonts/maax-400.woff2" });

export default {
  benguiat,
  chalkiez,
  inter,
  maax
}

