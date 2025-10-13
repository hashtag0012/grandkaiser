import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Ship, Mountain, Flower2, Building2 } from 'lucide-react';
import DarkAnimatedGradient from './ui/DarkAnimatedGradient';

const experiences = [
  {
    id: 1,
    title: 'Dal Lake Shikara Ride',
    description: 'Glide through serene waters where serenity awaits at sunset',
    icon: Ship,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 2,
    title: 'Gulmarg Ski Adventure',
    description: 'Experience world-class skiing slopes in pristine mountains',
    icon: Mountain,
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 3,
    title: 'Mughal Gardens Walk',
    description: 'Stroll through historic paradise gardens where tranquility lives',
    icon: Flower2,
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    id: 4,
    title: 'Old Srinagar Heritage',
    description: 'Discover ancient architecture and timeless culture',
    icon: Building2,
    gradient: 'from-amber-500 to-orange-600',
  },
];

export default function Experiences() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="experiences" className="relative py-20 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <DarkAnimatedGradient
          startingGap={120}
          Breathing={true}
          animationSpeed={0.011}
          breathingRange={11}
          topOffset={22}
          containerClassName="opacity-58"
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/42 via-black/62 to-slate-800/42" />
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-800/7 to-indigo-900/7 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-yellow-600/6 to-amber-700/6 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Live The Journey
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-6 leading-tight">
            Where Serenity
            <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent font-normal">
              Awaits
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Curated experiences that connect you with the soul of Kashmir
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl p-8 hover:bg-black/30 transition-all duration-500 h-full">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient}/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 space-y-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${experience.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={28} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-serif font-light text-white mb-4">
                        {experience.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed mb-6">
                        {experience.description}
                      </p>
                    </div>

                    {/* Action */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full bg-gradient-to-r ${experience.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      Explore Experience
                    </motion.button>

                    {/* Floating elements */}
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                      className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full blur-sm"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(251, 191, 36, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-400 hover:to-amber-500 transition-all duration-300"
          >
            Plan Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
