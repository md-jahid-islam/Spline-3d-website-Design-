import React, { useRef, useEffect } from 'react';
 const ParallaxComponents = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Skip parallax effect on small devices
      if (window.innerWidth < 768) return;

      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = (clientX - centerX) * 0.03;
      const moveY = (clientY - centerY) * 0.03;

      if (containerRef.current) {
        containerRef.current.style.transform = `perspective(1000px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="transition-transform duration-300 ease-in-out px-4 sm:px-8 md:px-16"
      style={{ willChange: 'transform',
        transformStyle: 'preserve-3d',
        paddingBottom: '80px',
      }}>
      
      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center pt-40">
        <ParallaxImage src="/images/images.png" rounded="rounded-bl-full" />
        <ParallaxImage src="/images/images7.png" rounded="rounded-bl-full" />
        <ParallaxImage src="/images/images8.png" rounded="rounded-bl-full" />
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center pt-12">
        <ParallaxImage src="/images/images14.png" rounded="rounded-ee-full" />
        <ParallaxImage src="/images/images21.png" rounded="rounded-ee-full" />
        <ParallaxImage src="/images/images23.png" rounded="rounded-ee-full" />
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center pt-12">
        <ParallaxImage src="/images/images10.png" rounded="rounded-bl-full" />
        <ParallaxImage src="/images/images11.png" rounded="rounded-bl-full" />
      </div>
    </div>
  );
};

const ParallaxImage = ({ src, rounded }) => {
  return (
    <img src={src} alt="img" className={`w-[90%] sm:w-[300px] md:w-[320px] h-auto ${rounded} transition-transform duration-500 hover:scale-105 shadow-xl`}/>);
 };

 export default ParallaxComponents;
