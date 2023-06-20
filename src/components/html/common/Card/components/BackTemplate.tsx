import React from 'react';
import Image from 'next/image';

import useLoadProgressStore from '@/stores/useLoadProgressStore';
import { getAssetEnvUrl } from '@/utils';

const url = getAssetEnvUrl('static/cards/back-template.jpg');

export default () => {
  const setLoadProgressStore = useLoadProgressStore(state => state.set);

  return (
    <Image
      src={url}
      alt="Card back"
      fill
      sizes="(max-width: 768px) 50vw, 100vw"
      priority
      onLoadingComplete={() => setLoadProgressStore("html", { cardTemplateBack: true })}
    />
  );
}
