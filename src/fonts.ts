import localFont from "@next/font/local";
import { Inter } from "@next/font/google";

const benguiat = localFont({ src: "../public/static/fonts/benguiat.woff2" });

const inter = Inter({ subsets: ["latin"] });

export default {
  benguiat,
  inter
}

