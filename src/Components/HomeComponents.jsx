import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const HomeComponents = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((el) => {
      if (el) {
        VanillaTilt.init(el, {
          max: 25,
          speed: 400,
          glare: true,
          'max-glare': 0.4,
          scale: 1.05,
        });
      }
    });
  }, []);

  const imageList1 = ['images1.png', 'images2.png', 'images4.png'];
  const imageList2 = ['images26.png', 'images27.png', 'images28.png'];
  const imageList3 = ['images17.png', 'images18.png', 'images22.png'];

  const allImages = [...imageList1, ...imageList2, ...imageList3];

  return (
    <>
    <section>
      <nav>
        <div>
        
        </div>
      </nav>
    </section>
    <div className="container mx-auto px-4 pt-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allImages.map((src, i) => (
          <div
            key={i}
            ref={(el) => (imageRefs.current[i] = el)}
            className="rounded-3xl shadow-2xl bg-white cursor-pointer"
            style={{ perspective: '1000px' }}>
            <img
              src={`/images/${src}`}
              alt="img"
              className="w-full h-[220px] object-cover rounded-3xl"
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default HomeComponents;
