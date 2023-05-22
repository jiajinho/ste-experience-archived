import { NextApiRequest, NextApiResponse } from "next";
import Mixpanel from "mixpanel";
import UAParser from "ua-parser-js";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.MIXPANEL_TOKEN) throw new Error("Undefined MIXPANEL_TOKEN");
  if (!req.query.event) return;

  const mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN, { keepAlive: false });

  const ua = new UAParser(req.headers["user-agent"]);
  const os = ua.getOS();
  const browser = ua.getBrowser();

  mixpanel.track(req.query.event as string, {
    $ip: req.socket.remoteAddress,
    $os: `${os.name} ${os.version}`,
    $browser: `${browser.name} ${browser.version}`,
  });

  res.status(200).json(true);
}
