import React from 'react';
import Image from 'next/image';

import backTemplate from "/public/static/cards/back-template.jpg";
import useLoadProgressStore from '@/stores/useLoadProgressStore';

export default () => {
  const setLoadProgressStore = useLoadProgressStore(state => state.set);

  return (
    <Image
      src={backTemplate}
      alt="Card back"
      fill
      sizes="(max-width: 768px) 50vw, 100vw"
      onLoadingComplete={() => setLoadProgressStore("html", { cardTemplateBack: true })}
    />
  );
}
