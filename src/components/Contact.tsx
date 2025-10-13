import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="contact" className="relative py-20 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/8 to-orange-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-indigo-600/8 rounded-full blur-3xl" />
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
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-6 leading-tight">
            Contact &
            <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent font-normal">
              Connect
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            We're here to make your Kashmir experience unforgettable
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl p-8">
              <h3 className="text-3xl font-serif font-light text-white mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: 'Address',
                    content: 'Dal Lake Boulevard, Srinagar\nJammu & Kashmir 190001, India',
                    gradient: 'from-amber-500 to-orange-600'
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: '+91 194 250 1234\n+91 194 250 5678',
                    gradient: 'from-blue-500 to-indigo-600'
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'reservations@grandkaiser.com\ninfo@grandkaiser.com',
                    gradient: 'from-green-500 to-teal-600'
                  },
                  {
                    icon: Clock,
                    title: 'Reception Hours',
                    content: '24/7 Available\nConcierge: 6:00 AM - 11:00 PM',
                    gradient: 'from-purple-500 to-pink-600'
                  }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-white/70 whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl p-8 h-64 flex items-center justify-center group hover:bg-black/30 transition-all duration-300"
            >
              <div className="text-center">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <MapPin className="text-amber-400 mx-auto mb-4" size={48} />
                </motion.div>
                <p className="text-white font-medium">Interactive Map</p>
                <p className="text-sm text-white/60">Dal Lake, Srinagar</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-3xl font-serif font-light text-white mb-8">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-white mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm"
                    placeholder="John"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-white mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm"
                    placeholder="Doe"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <label className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label className="block text-sm font-medium text-white mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm"
                  placeholder="+1 (555) 123-4567"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <label className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none text-white placeholder-white/50 backdrop-blur-sm"
                  placeholder="Tell us about your stay preferences..."
                ></textarea>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 30px rgba(251, 191, 36, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black py-4 rounded-xl font-semibold hover:from-yellow-400 hover:to-amber-500 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
