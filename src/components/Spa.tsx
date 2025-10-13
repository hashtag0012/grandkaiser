import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Leaf, Waves, Calendar } from 'lucide-react';

const treatments = [
  {
    icon: Sparkles,
    title: 'Signature Treatments',
    description: 'Experience our exclusive Kashmiri massage techniques using saffron-infused oils and warming stones',
    price: 'From ₹8,500',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    icon: Leaf,
    title: 'Herbal Wellness',
    description: 'Natural therapies using locally sourced herbs and organic ingredients from the Himalayan valleys',
    price: 'From ₹6,500',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: Waves,
    title: 'Hydrotherapy',
    description: 'Immerse yourself in mineral-rich thermal baths with aromatherapy and chromotherapy elements',
    price: 'From ₹5,500',
    gradient: 'from-blue-500 to-indigo-600'
  }
];

export default function Spa() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="spa" className="relative py-20 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-green-500/8 to-emerald-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-500/8 to-orange-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="text-amber-400" size={20} />
            <span className="text-amber-400 font-semibold">Wellness Sanctuary</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-6 leading-tight">
            Where Serenity
            <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent font-normal">
              Awaits
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Rejuvenate your mind, body, and soul with ancient healing traditions
          </p>
        </motion.div>

        {/* Treatment Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {treatments.map((treatment, index) => {
            const IconComponent = treatment.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl p-8 hover:bg-black/30 transition-all duration-500 h-full">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${treatment.gradient}/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 space-y-6">
                    {/* Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${treatment.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={36} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-serif font-light text-white mb-4">
                        {treatment.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed mb-6">
                        {treatment.description}
                      </p>
                      <div className="text-amber-400 font-semibold text-lg">
                        {treatment.price}
                      </div>
                    </div>

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

        {/* Wellness Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl overflow-hidden"
        >
          {/* Background placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
          
          {/* Content overlay */}
          <div className="relative z-10 p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-4xl md:text-5xl font-serif font-light text-white">
                  Begin Your Wellness Journey
                </h3>
                <p className="text-xl text-white/70 leading-relaxed">
                  Our expert therapists combine centuries-old traditions with modern wellness practices
                  to create transformative experiences tailored to your needs.
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-4 py-6">
                  {[
                    'Expert Therapists',
                    'Natural Ingredients', 
                    'Personalized Care',
                    'Tranquil Environment'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(251, 191, 36, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-8 py-4 rounded-xl font-semibold hover:from-yellow-400 hover:to-amber-500 transition-all duration-300 flex items-center space-x-2"
                >
                  <Calendar size={20} />
                  <span>Book Your Treatment</span>
                </motion.button>
              </div>

              {/* Visual placeholder */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="text-white/30 mx-auto mb-4" size={64} />
                    <p className="text-white/60">Wellness Experience</p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-green-400/20 rounded-full blur-xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
