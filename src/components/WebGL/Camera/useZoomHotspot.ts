import { useEffect, useRef } from 'react';

import config from '@/config';
import api from '@/api';
import { Camera } from '@/types';
import { MixpanelEvent } from '@/api/mixpanel';
import { moveCamera } from './utils';

import useCameraStore from '@/stores/webgl/useCameraStore';
import useEnvStore from '@/stores/useEnvStore';
import useMouseEventStore from '@/stores/webgl/useMouseEventStore';

export default () => {
  const env = useEnvStore(state => state.env);
  const prevZoom = useRef<Camera.Hotspot>("default");

  const setMouseEventStore = useMouseEventStore(state => state.set);

  useEffect(() => useCameraStore.subscribe(({ shadowCamera, camera, currentZoom }) => {
    if (env === "development") return;
    if (prevZoom.current === currentZoom) return;
    if (!shadowCamera) return;
    if (!camera) return;

    prevZoom.current = currentZoom;

    const setting = config.zoomSettings[currentZoom];
    const allowEventName = config.zoomSettings[currentZoom].allowEvent?.name;

    if (!setting.lookAt) return;
    if (!setting.cameraPosition) return;

    setMouseEventStore("event", undefined);

    moveCamera({
      camera,
      shadowCamera: shadowCamera,
      lookAt: setting.lookAt,
      cameraPosition: setting.cameraPosition,
      up: setting.cameraUp,
      animate: true,
      callback: () => {
        setMouseEventStore("event", allowEventName);
      }
    });
  }), [env]);

  useEffect(() => useCameraStore.subscribe(state => {
    switch (state.currentZoom) {
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
  }), []);
}