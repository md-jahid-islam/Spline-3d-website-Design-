import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import VanillaTilt from 'vanilla-tilt';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
      <section className="relative h-screen overflow-hidden bg-black">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover z-0" style={{ backgroundImage: `url('/images/background.jpg')`, transform: 'translateZ(0)' }}/>

        {/* Spline 3D Embed */}
        <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none">
          <iframe src="https://my.spline.design/your-spline-link" frameBorder="0" width="100%" height="100%" className="w-full h-full" allow="autoplay; fullscreen" loading="lazy" title="Spline 3D">
            </iframe>
        </div>

        {/* Slider + Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]} effect="fade" loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} className="w-full max-w-5xl">
            {['banner.jpg', 'banner2.jpg', 'banner3.jpg', 'banners.jpg'].map((img, idx) => (
              <SwiperSlide key={idx}>
                <img src={`/images/${img}`} alt={`Slide ${idx}`} className="w-full h-[500px] object-cover rounded-xl shadow-xl hover:scale-105 transition-all duration-500"/>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Animated Headings */}
          <motion.h2 className="text-4xl font-bold text-white mt-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}transition={{ duration: 1 }}>
            Apparel Manufacturer in Bangladesh
          </motion.h2>

          <motion.p className="text-2xl font-semibold text-white mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
            40 Years of Manufacturing Experience
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 justify-center">
            {['Company Profile', 'Products', 'Sustainability Report 2023'].map((text, index) => (
              <motion.button key={index} className="text-xl px-6 py-3 bg-amber-50 hover:bg-amber-600 hover:text-white rounded-3xl transition-transform duration-300 transform hover:scale-105 shadow-lg" whileHover={{ scale: 1.1 }}>
                <Link to="#">{text}</Link>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Tilted Images Section */}
      <div className="container mx-auto px-4 pt-[100px] pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allImages.map((src, i) => (
            <div key={i} ref={(el) => (imageRefs.current[i] = el)} className="rounded-3xl shadow-2xl bg-white cursor-pointer"style={{ perspective: '1000px' }}>
            <img src={`/images/${src}`} alt="img" className="w-full h-[220px] object-cover rounded-3xl"/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
 };

 export default HomeComponents;
//  jfdssjjksdfngjklsndfjklgnsjkdfgskjsdfhjhsdfjk
