import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

import { zoomOut, zoomToVintageTV } from './utils';
import useZoomStore from 'store/useZoomStore';
import useCameraSwitchStore from 'store/useCameraSwitchStore';

export default () => {
  const camera = useThree(state => state.camera);

  const neutralData = useCameraSwitchStore(state => state.data);
  const currentZoom = useZoomStore(state => state.currentZoom);


  useEffect(() => {
    if (!currentZoom) {
      zoomOut(camera, neutralData);
    }
    else {
      switch (currentZoom) {
        case "vintage-tv":
          zoomToVintageTV(camera);
          break;
      }
    }
  }, [currentZoom, camera]);
}