import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import useCardStore from '@/stores/html/useCardStore';
import useViewportStore from '@/stores/useViewportStore';

import Card, { Wrapper as $Card } from '@html/common/Card';
import Demogorgon from './images/Demogorgon';
import Merch from './images/Merch';
import XPass from './images/XPass';
import FnB from './images/FnB';

const Wrapper = styled.div`
  ${$Card} {
    position: relative;
    z-index: 10;
  }

  picture { position: absolute }
`;

export default React.forwardRef(({ }, ref: React.ForwardedRef<HTMLDivElement>) => {
  const htmlEvent = useCardStore(state => state.htmlEvent);
  const lg = useViewportStore(state => state.lg);

  const card = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  const [hoverIndex, setHoverIndex] = useState(-1);

  useEffect(() => {
    if (!card.current) return;

    const ro = new ResizeObserver(e => {
      setCardWidth(e[0].contentRect.width);
    });

    ro.observe(card.current);

    return () => { ro.disconnect() }
  }, []);

  useEffect(() => {
    setHoverIndex(-1);
  }, [htmlEvent]);

  return (
    <Wrapper ref={ref}>
      <Card.TheEncounter
        ref={card}
        onRowHover={setHoverIndex}
      />

      {lg &&
        <>
          <Demogorgon cardWidth={cardWidth} active={hoverIndex === 0} />
          <Merch cardWidth={cardWidth} active={hoverIndex === 1} />
          <XPass cardWidth={cardWidth} active={hoverIndex === 2} />
          <FnB cardWidth={cardWidth} active={hoverIndex === 3} />
        </>
      }
    </Wrapper>
  );
});