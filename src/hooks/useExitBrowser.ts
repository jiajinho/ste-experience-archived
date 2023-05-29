import { useEffect } from "react";

import api from "@/api";
import { MixpanelEvent } from "@/api/mixpanel";

export default () => {
  useEffect(() => {
    const handleUnload = () => {
      api.mixpanel(MixpanelEvent.DROPOFF);
    }

    window.addEventListener("beforeunload", handleUnload);
    return () => { window.removeEventListener("beforeunload", handleUnload) }
  }, []);
}