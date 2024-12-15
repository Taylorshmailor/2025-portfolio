import React, { useState, useRef, useEffect } from 'react';
import './fadeInSection.css';

function FadeInSection({ children, onLastSectionVisible = null }) {
  const [isVisible, setVisible] = useState(false); // Visibility state
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
          
          // Notify parent if it's the last section
          if (onLastSectionVisible) onLastSectionVisible();
        }
      });
    });

    const ref = domRef.current;
    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [onLastSectionVisible]);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
