'use client';

import { useIsVisible } from '@/hooks/useIsVisible';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const FirstDay = () => {
  const [counter, setCounter] = useState(0);

  const counter2Ref = useRef<number>(0);

  const counterButtonRef = useRef<HTMLButtonElement>(null);
  const isVisible = useIsVisible(counterButtonRef);

  const handleClick = useCallback(() => setCounter((curr) => curr + 1), []);
  const handleClick2 = useCallback(() => {
    counter2Ref.current += 1;
  }, []);

  const doubledCounter = useMemo(() => counter * 2, [counter]);

  useEffect(() => {
    console.log('First Day: useEffect');
  }, [counter]);

  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);

  return (
    <div className={'home'}>
      <h2>First Day {doubledCounter}</h2>
      <br />
      <br />
      <p>Counter: {counter}</p>
      <div
        style={{
          height: '200vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end'
        }}
      >
        <button ref={counterButtonRef} type={'button'} onClick={handleClick}>
          Click Me!
        </button>
      </div>
      <br />
      <br />
      <p>Counter2: {counter2Ref.current}</p>
      <button type={'button'} onClick={handleClick2}>
        Click Me 2!
      </button>
    </div>
  );
};

export default FirstDay;
