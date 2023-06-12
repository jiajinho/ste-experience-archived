import React from 'react';
import Image from 'next/image';

import useLoadProgressStore from '@/stores/useLoadProgressStore';
import { getAssetEnvUrl } from '@/utils';

const url = getAssetEnvUrl('static/cards/front-template.jpg');

export default () => {
  const setLoadProgressStore = useLoadProgressStore(state => state.set);

  return (
    <Image
      src={url}
      alt="Card front"
      fill
      sizes="(max-width: 768px) 50vw, 100vw"
      onLoadingComplete={() => setLoadProgressStore("html", { cardTemplateFront: true })}
    />
  );
}
