import React from 'react';
import Image from 'next/image';

import useLoadProgressStore from '@/stores/useLoadProgressStore';
import useAssetEnvUrl from '@/hooks/common/useAssetEnvUrl';

export default () => {
  const setLoadProgressStore = useLoadProgressStore(state => state.set);

  const url = useAssetEnvUrl('static/cards/front-template.jpg');

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
