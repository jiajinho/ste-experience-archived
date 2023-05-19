import React from 'react';
import Image from 'next/image';

import frontTemplate from "/public/static/cards/front-template.jpg";
import useLoadProgressStore from 'stores/useLoadProgressStore';

export default () => {
  const setLoadProgressStore = useLoadProgressStore(state => state.set);

  return (
    <Image
      src={frontTemplate}
      alt="Card front"
      fill
      priority
      sizes="(max-width: 768px) 50vw, 100vw"
      onLoadingComplete={() => setLoadProgressStore("html", { cardTemplateFront: true })}
    />
  );
}
