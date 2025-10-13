import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Car, Bus, Plane, MapPin, Clock, Route } from 'lucide-react';
import DarkAnimatedGradient from './ui/DarkAnimatedGradient';

const transportOptions = [
  {
    icon: Car,
    title: 'Luxury Car Service',
    description: 'Private chauffeur-driven vehicles with premium comfort',
    price: '₹3,500',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Bus,
    title: 'Shuttle Service',
    description: 'Shared comfortable transport with scenic route',
    price: '₹1,200',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: Plane,
    title: 'Airport Distance',
    description: '22 km from Srinagar Airport via scenic highway',
    price: '35 min',
    gradient: 'from-amber-500 to-orange-600'
  }
];

export default function Travel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="travel" className="relative py-20 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <DarkAnimatedGradient
          startingGap={118}
          Breathing={true}
          animationSpeed={0.009}
          breathingRange={9}
          topOffset={19}
          containerClassName="opacity-62"
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/43 via-black/63 to-slate-800/43" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-800/8 to-indigo-900/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-yellow-600/7 to-amber-700/7 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                Journey To Paradise
              </span>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-6 leading-tight">
                Getting Here
                <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent font-normal">
                  Made Easy
                </span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                Your journey to Grand Kaiser begins with comfort. We offer seamless transportation options
                from Srinagar Airport to our doorstep, ensuring a stress-free arrival.
              </p>
            </div>

            {/* Transport Options */}
            <div className="space-y-4">
              {transportOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl p-6 hover:bg-black/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${option.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">{option.title}</h3>
                        <p className="text-white/70">{option.description}</p>
                      </div>
                      <span className="text-2xl font-bold text-amber-400">{option.price}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(251, 191, 36, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-8 py-4 rounded-xl font-semibold hover:from-yellow-400 hover:to-amber-500 transition-all duration-300 flex items-center space-x-2"
            >
              <Route size={20} />
              <span>Book Airport Pickup</span>
            </motion.button>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Transport Cards Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Luxury Fleet', gradient: 'from-blue-500/20 to-indigo-600/20' },
                { title: 'Airport Route', gradient: 'from-green-500/20 to-emerald-600/20' },
                { title: 'Scenic Journey', gradient: 'from-purple-500/20 to-pink-600/20' },
                { title: 'Comfort First', gradient: 'from-amber-500/20 to-orange-600/20' }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={`backdrop-blur-xl bg-gradient-to-br ${card.gradient} border border-white/10 rounded-2xl p-6 h-32 flex items-center justify-center group hover:scale-105 transition-all duration-300`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Car className="text-white" size={20} />
                    </div>
                    <p className="text-white font-medium text-sm">{card.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-xl bg-black/40 border border-white/20 rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-center space-x-3 mb-2">
                <MapPin className="text-amber-400" size={20} />
                <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Location</span>
              </div>
              <p className="text-2xl font-serif font-light text-white mb-1">Srinagar</p>
              <p className="text-white/70 text-sm">Kashmir Valley</p>
              
              <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-white/10">
                <Clock className="text-white/60" size={16} />
                <span className="text-white/60 text-sm">35 min from airport</span>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-amber-400/20 rounded-full blur-xl"
            />
            
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-400/20 rounded-full blur-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
