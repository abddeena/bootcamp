'use client';

import { useEffect, useState } from 'react';

const FirstDay = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter((curr) => curr + 1);

  useEffect(() => {
    console.log('First Day: useEffect');
  }, [counter]);

  return (
    <div className={'home'}>
      <h2>First Day</h2>
      <br />
      <br />
      <p>Counter: {counter}</p>
      <br />
      <br />
      <button type={'button'} onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
};

export default FirstDay;
