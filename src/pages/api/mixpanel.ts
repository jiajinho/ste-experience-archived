import { NextApiRequest, NextApiResponse } from "next";
import Mixpanel from "mixpanel";
import UAParser from "ua-parser-js";
import requestIp from "request-ip";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.MIXPANEL_TOKEN) {
    return res.status(500).json({ message: "Undefined MIXPANEL_TOKEN" });
  }

  if (!req.query.event) {
    return res.status(400).json({ message: "Undefined query param for 'event'" });
  }

  let debug = req.query.debug ? req.query.debug === "true" : true;

  const mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN, {
    protocol: 'http',
    keepAlive: false
  });

  const userAgent = new UAParser(req.headers["user-agent"]);
  const os = userAgent.getOS();
  const browser = userAgent.getBrowser();
  const ip = requestIp.getClientIp(req);

  const _os = `${os.name} ${os.version}`;


  if (!debug) {
    mixpanel.track(req.query.event as string, {
      ip: ip,
      $os: _os,
      $browser: browser.name,
      $browser_version: browser.version
    });

    return res.status(200).json({ message: "Success" });
  }
  else {
    return res.status(200).json({
      ip,
      os: _os,
      browser: browser.name,
      browser_version: browser.version
    });
  }
}
