import React, { useRef } from 'react';
import { sleep } from '@/utils';

export default (ms: number): [React.MutableRefObject<boolean>, () => void] => {
  const debounce = useRef(true);

  const resetDebounce = () => {
    debounce.current = false;

    sleep(ms).then(() => {
      debounce.current = true;
    });
  }

  return [debounce, resetDebounce];
}