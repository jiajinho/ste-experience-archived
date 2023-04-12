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
      priority
      fill
      onLoadingComplete={() => setLoadProgressStore("html", { cardTemplateFront: true })}
    />
  );
}
