import { NextApiRequest, NextApiResponse } from "next";
import Mixpanel from "mixpanel";
import UAParser from "ua-parser-js";
import requestIp from "request-ip";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.MIXPANEL_TOKEN) {
    res.status(500).json({ message: "Undefined MIXPANEL_TOKEN" });
    return;
  }

  if (!req.query.event) {
    res.status(400).json({ message: "Undefined query params" });
    return;
  }

  const mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN);

  const ua = new UAParser(req.headers["user-agent"]);
  const os = ua.getOS();
  const browser = ua.getBrowser();
  const ip = requestIp.getClientIp(req);

  const callback = (e?: Error) => {
    if (e) {
      res.status(500).json({ message: e.message });
    }
    else {
      res.status(200).json(true);
    }
  }

  mixpanel.track(req.query.event as string, {
    $ip: ip,
    $os: `${os.name} ${os.version}`,
    $browser: browser.name,
    $browser_version: browser.version
  }, callback);
}
