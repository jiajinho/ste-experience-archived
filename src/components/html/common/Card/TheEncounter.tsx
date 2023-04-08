import React from 'react';
import Image from 'next/image';

import Card from './components/Card';
import FrontTemplate from './components/FrontTemplate';
import BackTemplate from './components/BackTemplate';

export default ({ flipped, onClick }: {
  flipped?: boolean,
  onClick?: () => void
}) => {
  return (
    <Card flipped={flipped} onClick={onClick}>
      <div className="back">
        <BackTemplate />
        <Image
          src="/static/cards/the-encounter-back.png"
          alt="The Encounter - Back"
          fill
        />
      </div>

      <div className="front">
        <FrontTemplate />
        <Image
          src="/static/cards/the-encounter-front.png"
          alt="The Encounter - Front"
          fill
        />
      </div>
    </Card>
  );
}