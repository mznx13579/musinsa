/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */

import { debounce, throttle } from 'lodash';
import { useState, useEffect, useCallback } from 'react';

interface ScrollState {
  lastScrollTop: number;
  bodyOffset: DOMRect;
  scrollY: number;
  scrollX: number;
  scrollDirection: 'down' | 'up' | '';
}

export const useScroll = (eventControl?: 'throttle' | 'debounce', delay?: number) => {
  const [state, setState] = useState<ScrollState>({
    lastScrollTop: 0,
    bodyOffset: document.body.getBoundingClientRect(),
    scrollY: document.body.getBoundingClientRect().top,
    scrollX: document.body.getBoundingClientRect().left,
    scrollDirection: '', // down, up
  });

  const handleScrollEvent = useCallback(() => {
    setState((prevState) => {
      const prevLastScrollTop = prevState.lastScrollTop;
      const bodyOffset = document.body.getBoundingClientRect();

      return {
        bodyOffset,
        scrollY: -bodyOffset.top,
        scrollX: bodyOffset.left,
        scrollDirection: prevLastScrollTop > -bodyOffset.top ? 'down' : 'up',
        lastScrollTop: -bodyOffset.top,
      };
    });
  }, []);

  useEffect(() => {
    const scrollListener =
      eventControl === 'throttle' && delay
        ? throttle(handleScrollEvent, delay)
        : eventControl === 'debounce' && delay
        ? debounce(handleScrollEvent, delay)
        : handleScrollEvent;

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [handleScrollEvent]);

  return {
    scrollY: state.scrollY,
    scrollX: state.scrollX,
    scrollDirection: state.scrollDirection,
    bodyOffset: state.bodyOffset,
  };
};

export default useScroll;
