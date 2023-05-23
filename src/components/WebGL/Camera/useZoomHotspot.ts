import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';

import config from 'config';
import api from 'api';
import { MixpanelEvent } from 'api/mixpanel';
import { moveCamera } from './utils';
import useCameraStore from 'stores/webgl/useCameraStore';
import useCardStore from 'stores/html/useCardStore';
import useEnvStore from 'stores/useEnvStore';

export default () => {
  const firstTime = useRef(true);
  const { aspect } = useThree(state => state.viewport);

  const env = useEnvStore(state => state.env);
  const cardHtmlEvent = useCardStore(state => state.htmlEvent);
  const cardWebglEvent = useCardStore(state => state.webglEvent);
  const { shadowCamera, currentZoom, camera } = useCameraStore(state => state);
  const setCameraStore = useCameraStore(state => state.set);

  useEffect(() => {
    if (env === "development") return;
    if (!shadowCamera) return;
    if (!camera) return;
    if (!!cardHtmlEvent) return;
    if (!!cardWebglEvent) return;

    const setting = config.zoomSettings[currentZoom];

    if (!setting.lookAt || !setting.cameraPosition) return;

    setCameraStore("mouseEvent", undefined);

    moveCamera({
      camera,
      shadowCamera: shadowCamera,
      lookAt: setting.lookAt,
      cameraPosition: setting.cameraPosition,
      up: setting.cameraUp,
      animate: !firstTime.current,
      callback: () => {
        setCameraStore("mouseEvent", config.zoomSettings[currentZoom].allowEvent?.name);
      }
    });

    firstTime.current = false;
  }, [currentZoom, camera, shadowCamera, aspect, env]);

  useEffect(() => {
    switch (currentZoom) {
      case "retroTV":
        api.mixpanel(MixpanelEvent.EVENT_VIDEO);
        break;
      case "noticeBoard":
        api.mixpanel(MixpanelEvent.FAN_GALLERY);
        break;
      case "vecnaBoard":
        api.mixpanel(MixpanelEvent.EVENT_SUMMARY);
        break;
      case "faqBoard":
        api.mixpanel(MixpanelEvent.KEY_QUESTION);
        break;
      case "map":
        api.mixpanel(MixpanelEvent.EVENT_LOCATION);
        break;
      case "chalkBoard":
        api.mixpanel(MixpanelEvent.XPASS);
        break;
      case "shelf":
        api.mixpanel(MixpanelEvent.EVENT_EXCLUSIVE);
        break;
    }
  }, [currentZoom]);
}