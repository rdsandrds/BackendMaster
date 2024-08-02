import React, { useEffect, useRef, useState } from 'react';

const Slider: React.FC = () => {
  const slidesRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const slideCount = slidesRef.current?.children.length ?? 0;
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slideWidth = slidesRef.current?.children[0]?.clientWidth ?? 0;
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  }, [index]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
        <div className="slider-container">
        <div
        ref={slidesRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ display: 'flex' }} // Ensure the container is set to flex
      >
        <div className="flex-shrink-0 w-full h-full">
          <img
            src="/images/hero1.jpg" // Use the relative path from the public folder
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-shrink-0 w-full h-full">
          <img
            src="/images/hero2.jpg" // Use the relative path from the public folder
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-shrink-0 w-full h-full">
          <img
            src="/images/hero3.jpg" // Use the relative path from the public folder
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
        </div>
     
    </div>
  );
};

export default Slider;
