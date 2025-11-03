import React, { useEffect, useState, useRef } from 'react';

function CounterUp({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
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
  }, []);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(target, 10);
      if (start === end) return;

      let totalTime = 2000; // 2 seconds
      let incrementTime = (totalTime / end) * 1; // Adjust for smoother animation

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    } else {
      setCount(0); // Reset count when out of view
    }
  }, [target, inView]);

  return <span ref={ref}>{count}</span>;
}

export default CounterUp;