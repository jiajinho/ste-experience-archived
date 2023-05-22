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
    res.status(400).json({ message: "Undefined query param for 'event'" });
    return;
  }

  if (!req.query.env) {
    res.status(400).json({ message: "Undefined query param for 'env'" });
  }

  const mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN, {
    protocol: 'http',
    keepAlive: false
  });

  const userAgent = new UAParser(req.headers["user-agent"]);
  const os = userAgent.getOS();
  const browser = userAgent.getBrowser();
  const ip = requestIp.getClientIp(req);

  const _os = `${os.name} ${os.version}`;


  if (req.query.env === "production") {
    const callback = (e?: Error) => {
      if (e) res.status(500).json({ message: e.message });
      else res.status(200).json(true);
    }

    mixpanel.track(req.query.event as string, {
      ip: ip,
      $os: _os,
      $browser: browser.name,
      $browser_version: browser.version
    }, callback);
  }
  else {
    res.status(200).json({
      ip,
      os: _os,
      browser: browser.name,
      browser_version: browser.version
    });
  }
}
