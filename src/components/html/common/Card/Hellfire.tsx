import React from 'react';
import Image from 'next/image';

import { IntrinsicHTML } from 'types';

import Card from './components/Card';
import FrontTemplate from './components/FrontTemplate';
import BackTemplate from './components/BackTemplate';

export default React.forwardRef(({ flipped, ...props }: {
  flipped?: boolean,
} & IntrinsicHTML<"div">,
  ref: React.ForwardedRef<HTMLDivElement>
) => (
  <Card
    ref={ref}
    flipped={flipped}
    {...props}
  >
    <div className="front">
      <FrontTemplate />
      <Image
        src="/static/cards/hellfire-front.png"
        alt="Hellfire - Front"
        fill
      />
    </div>

    <div className="back">
      <BackTemplate />
      <Image
        src="/static/cards/hellfire-back.png"
        alt="Hellfire - Back"
        fill
      />
    </div>
  </Card>
));