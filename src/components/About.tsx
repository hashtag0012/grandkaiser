import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import GradientBlinds from './ui/GradientBlinds';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="about" className="relative min-h-screen bg-black overflow-hidden">
      {/* GradientBlinds Background */}
      <div className="absolute inset-0">
        <GradientBlinds
          className="w-full h-full"
          dpr={Math.min(window.devicePixelRatio, 2)}
          gradientColors={['#4a4a8a', '#6a6aaa', '#8a8aca', '#aaaaff']}
          angle={30}
          blindCount={8}
          mouseDampening={0.2}
          spotlightRadius={0.8}
          spotlightOpacity={0.3}
          mixBlendMode="screen"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Text Content */}
          <motion.div
            style={{ opacity, scale }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">
                About Grand Kaiser
              </span>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-white mt-4 leading-tight">
                A Legacy of
                <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent font-normal">
                  Luxury
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white/70 leading-relaxed"
            >
              Nestled in the heart of Srinagar, Grand Kaiser stands as a testament to 
              timeless elegance and unparalleled hospitality. Our heritage property 
              combines the rich cultural tapestry of Kashmir with modern luxury amenities.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-white/70 leading-relaxed"
            >
              Every corner tells a story, every room whispers comfort, and every moment 
              spent here becomes a cherished memory. Experience the perfect harmony of 
              traditional Kashmiri architecture and contemporary sophistication.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">50+</div>
                <div className="text-white/60 text-sm">Luxury Rooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">25</div>
                <div className="text-white/60 text-sm">Years Legacy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">5★</div>
                <div className="text-white/60 text-sm">Rating</div>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(251, 191, 36, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-400 hover:to-amber-500 transition-all duration-300"
            >
              Discover Our Story
            </motion.button>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* Main image placeholder with glassmorphic frame */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                <div className="aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-black font-bold text-xl">GK</span>
                    </div>
                    <p className="text-white/60 text-sm">Hotel Interior</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full blur-xl"
            />
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -3, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
