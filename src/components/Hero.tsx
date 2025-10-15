import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import Silk from './ui/Silk';
import Model3D from './ui/Model3D';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Animated gradient background
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to('.gradient-orb-1', {
      duration: 8,
      x: 100,
      y: -50,
      scale: 1.2,
      ease: 'power2.inOut'
    })
    .to('.gradient-orb-2', {
      duration: 6,
      x: -80,
      y: 60,
      scale: 0.8,
      ease: 'power2.inOut'
    }, 0)
    .to('.gradient-orb-3', {
      duration: 10,
      x: 50,
      y: -80,
      scale: 1.1,
      ease: 'power2.inOut'
    }, 0);

    // Floating particles
    gsap.set('.particle', {
      opacity: 0.3,
      scale: 0.5
    });
    
    gsap.to('.particle', {
      duration: 'random(3, 6)',
      y: 'random(-100, 100)',
      x: 'random(-50, 50)',
      opacity: 'random(0.1, 0.6)',
      scale: 'random(0.3, 0.8)',
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
      stagger: 0.2
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Enhanced Silk Background */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={2.5}
          scale={1.4}
          color="#2a2a4a"
          noiseIntensity={0.8}
          rotation={0.05}
        />
      </div>


      {/* 3D Model - Your Gold Initials (Behind Text) */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 pointer-events-none"
        style={{ 
          zIndex: 20,
          width: '400px', 
          height: '400px'
        }}
      >
        <Model3D
          modelPath="/models/Gold_Initials_1013141911_texture.glb"
          position={[0, 0, 0]}
          scale={[2.2, 2.2, 2.2]}
          autoRotate={true}
        />
      </div>
      
      {/* Subtle particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="particle absolute w-1 h-1 bg-amber-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-50 flex flex-col items-center justify-center h-full px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-9xl font-serif font-light text-white mb-6 tracking-tight leading-none">
            <span className="block">GRAND</span>
            <span className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-normal">
              KAISER
            </span>
            <span className="block text-4xl md:text-5xl font-light text-white/80 mt-2">
              SRINAGAR
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl text-white/70 mb-12 font-light tracking-wide max-w-2xl"
        >
          Where Luxury Meets Tranquility
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold rounded-full overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10">Book Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            Explore
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
