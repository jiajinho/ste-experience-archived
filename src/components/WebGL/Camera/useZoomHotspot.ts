import { useEffect, useRef } from 'react';

import config from 'config';
import api from 'api';
import { MixpanelEvent } from 'api/mixpanel';
import { moveCamera } from './utils';

import useCameraStore from 'stores/webgl/useCameraStore';
import useEnvStore from 'stores/useEnvStore';

export default () => {
  const firstTime = useRef(true);

  const env = useEnvStore(state => state.env);
  const shadowCamera = useCameraStore(state => state.shadowCamera);
  const currentZoom = useCameraStore(state => state.currentZoom);
  const camera = useCameraStore(state => state.camera);

  const setCameraStore = useCameraStore(state => state.set);

  useEffect(() => {
    if (env === "development") return;
    if (!shadowCamera) return;
    if (!camera) return;

    const setting = config.zoomSettings[currentZoom];

    if (!setting.lookAt) return;
    if (!setting.cameraPosition) return;

    const allowEventName = config.zoomSettings[currentZoom].allowEvent?.name;

    setCameraStore("mouseEvent", undefined);

    moveCamera({
      camera,
      shadowCamera: shadowCamera,
      lookAt: setting.lookAt,
      cameraPosition: setting.cameraPosition,
      up: setting.cameraUp,
      animate: !firstTime.current,
      callback: () => {
        setCameraStore("mouseEvent", allowEventName);
      }
    });

    firstTime.current = false;
  }, [currentZoom, camera, shadowCamera, env]);

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