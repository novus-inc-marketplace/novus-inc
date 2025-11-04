import React, { useState, useEffect, useRef } from 'react';

const CounterUp = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const duration = 2000; // 2 seconds

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = parseInt(target, 10);
          if (start === end) return;

          const incrementTime = (duration / end);
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) {
              clearInterval(timer);
            }
          }, incrementTime);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
};

export default CounterUp;
