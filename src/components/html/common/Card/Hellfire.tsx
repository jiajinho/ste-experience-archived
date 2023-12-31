import React from 'react';
import Image from 'next/image';

import { IntrinsicHTML } from '@/types';
import useLoadProgressStore from '@/stores/useLoadProgressStore';

import Card from './components/Card';
import FrontTemplate from './components/FrontTemplate';
import BackTemplate from './components/BackTemplate';
import { getAssetEnvUrl } from '@/utils';

const frontUrl = getAssetEnvUrl('static/cards/hellfire-front.png');
const backUrl = getAssetEnvUrl('static/cards/hellfire-back-v2.png');

export default React.forwardRef(({ flipped, ...props }: {
  flipped?: boolean,
} & IntrinsicHTML<"div">,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const setLoadProgressStore = useLoadProgressStore(state => state.set);

  return (
    <Card ref={ref} flipped={flipped} {...props}>
      <div className="front">
        <FrontTemplate />
        <Image
          src={frontUrl}
          alt="Hellfire - Front"
          fill
          sizes="(max-width: 768px) 50vw, 100vw"
          onLoadingComplete={() => setLoadProgressStore("html", { hellfireFront: true })}
        />
      </div>

      <div className="back">
        <BackTemplate />
        <Image
          src={backUrl}
          alt="Hellfire - Back"
          fill
          sizes="(max-width: 768px) 50vw, 100vw"
          onLoadingComplete={() => setLoadProgressStore("html", { hellfireBack: true })}
        />
      </div>
    </Card>
  )
});