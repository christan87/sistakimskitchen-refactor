import { useEffect, useRef, useState } from 'react';

function useOnScreenPersist() {
  const ref = useRef();
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting) {
          setIntersecting(entry.isIntersecting);
        }
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    } 

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return [ref, isIntersecting];
}

export default useOnScreenPersist;