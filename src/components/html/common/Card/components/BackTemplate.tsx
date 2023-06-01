import React from 'react';
import Image from 'next/image';

import useLoadProgressStore from '@/stores/useLoadProgressStore';
import useAssetEnvUrl from '@/hooks/common/useAssetEnvUrl';

export default () => {
  const setLoadProgressStore = useLoadProgressStore(state => state.set);

  const url = useAssetEnvUrl('static/cards/back-template.jpg');

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
