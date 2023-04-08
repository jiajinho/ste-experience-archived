import React from 'react';
import Image from 'next/image';

export default () => (
  <Image
    src="/static/cards/front-template.jpg"
    alt="Card back"
    priority
    fill
  />
);
