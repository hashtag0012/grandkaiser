import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Clock, Star, ChefHat, Wine, Utensils, Coffee } from 'lucide-react';
import DarkAnimatedGradient from './ui/DarkAnimatedGradient';

const restaurants = [
  {
    name: 'Saffron',
    cuisine: 'Traditional Kashmiri',
    rating: 5,
    hours: '7:00 AM - 11:00 PM',
    description: 'Authentic Kashmiri flavors in an elegant setting with traditional ambiance',
    specialties: ['Rogan Josh', 'Yakhni', 'Kahwa', 'Modur Pulao'],
    icon: ChefHat,
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    name: 'The Terrace',
    cuisine: 'Continental & Asian',
    rating: 5,
    hours: '6:00 PM - 12:00 AM',
    description: 'Fine dining with panoramic mountain views and international cuisine',
    specialties: ['Grilled Salmon', 'Dim Sum', 'Pasta', 'Sushi'],
    icon: Utensils,
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Chai Lounge',
    cuisine: 'Café & Light Bites',
    rating: 4,
    hours: '10:00 AM - 8:00 PM',
    description: 'Cozy atmosphere perfect for afternoon tea and light conversations',
    specialties: ['Noon Chai', 'Bakarkhani', 'Sandwiches', 'Pastries'],
    icon: Coffee,
    gradient: 'from-green-500 to-teal-600'
  }
];

export default function Dining() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} id="dining" className="relative py-20 bg-black overflow-hidden">
      {/* Background with video-like effect */}
      <div className="absolute inset-0">
        <DarkAnimatedGradient
          startingGap={115}
          Breathing={true}
          animationSpeed={0.007}
          breathingRange={9}
          topOffset={18}
          containerClassName="opacity-55"
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/45 via-black/65 to-slate-800/45" />
        
        {/* Animated background elements */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-yellow-600/8 to-amber-700/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-800/6 to-indigo-900/6 rounded-full blur-3xl" />
          <div className="absolute top-2/3 right-1/4 w-72 h-72 bg-gradient-to-r from-slate-700/6 to-gray-800/6 rounded-full blur-3xl" />
        </motion.div>

        {/* Warm overlay for dining ambiance */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-900/3 to-black/25" />
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
            Culinary Experience
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-6 leading-tight">
            Dining &
            <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent font-normal">
              Experience
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Savor the authentic flavors of Kashmir and international cuisine in our elegant restaurants
          </p>
        </motion.div>

        {/* Restaurant Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {restaurants.map((restaurant, index) => {
            const IconComponent = restaurant.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl p-8 hover:bg-black/30 transition-all duration-500 h-full">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${restaurant.gradient}/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className={`w-16 h-16 bg-gradient-to-br ${restaurant.gradient} rounded-2xl flex items-center justify-center`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(restaurant.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="#F59E0B" stroke="#F59E0B" />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-serif font-light text-white mb-2">
                        {restaurant.name}
                      </h3>
                      <p className="text-amber-400 font-medium mb-4">{restaurant.cuisine}</p>
                      <p className="text-white/70 leading-relaxed mb-6">
                        {restaurant.description}
                      </p>
                    </div>

                    {/* Hours */}
                    <div className="flex items-center space-x-2 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                      <Clock size={16} className="text-amber-400" />
                      <span className="text-white/80 text-sm">{restaurant.hours}</span>
                    </div>

                    {/* Specialties */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white text-sm">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {restaurant.specialties.map((specialty, idx) => (
                          <span key={idx} className="px-3 py-1 bg-amber-400/20 text-amber-400 text-xs rounded-full border border-amber-400/30">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full bg-gradient-to-r ${restaurant.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      Make Reservation
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Special Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-4 backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl px-8 py-6 hover:bg-black/30 transition-all duration-300">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Wine className="text-amber-400" size={28} />
            </motion.div>
            <div className="text-left">
              <p className="text-white font-medium text-lg">
                Complimentary Wine Tasting
              </p>
              <p className="text-white/60 text-sm">
                Every evening at 6 PM in The Terrace
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
