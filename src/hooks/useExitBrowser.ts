import { useEffect } from "react";

import api from "api";
import { MixpanelEvent } from "api/mixpanel";
import useCameraStore from "stores/webgl/useCameraStore";

export default () => {
  useEffect(() => {
    const handleUnload = () => {
      const currentZoom = useCameraStore.getState().currentZoom;

      switch (currentZoom) {
        case "default":
          //??
          break;
        case "retroTV":
          api.mixpanel(MixpanelEvent.EVENT_VIDEO_DROPOFF);
          break;
        case "noticeBoard":
          api.mixpanel(MixpanelEvent.FAN_GALLERY_DROPOFF);
          break;
        case "vecnaBoard":
          api.mixpanel(MixpanelEvent.EVENT_SUMMARY_DROPOFF);
          break;
        case "faqBoard":
          api.mixpanel(MixpanelEvent.KEY_QUESTION_DROPOFF);
          break;
        case "map":
          api.mixpanel(MixpanelEvent.EVENT_LOCATION_DROPOFF);
          break;
        case "chalkBoard":
          api.mixpanel(MixpanelEvent.XPASS_DROPOFF);
          break;
        case "shelf":
          api.mixpanel(MixpanelEvent.EVENT_EXCLUSIVE_DROPOFF);
          break;
      }
    }

    window.addEventListener("beforeunload", handleUnload);
    return () => { window.removeEventListener("beforeunload", handleUnload) }
  }, []);
}