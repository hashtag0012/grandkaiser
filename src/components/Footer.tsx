import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900 to-slate-800" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/5 to-orange-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-xl flex items-center justify-center">
                <span className="text-black font-bold text-lg">GK</span>
              </div>
              <h3 className="text-3xl font-serif font-light text-white">
                Grand <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent font-normal">Kaiser</span>
              </h3>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed max-w-md">
              Experience the epitome of luxury and hospitality in the heart of Kashmir. 
              Where every moment becomes a cherished memory and every stay tells a story of elegance.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', gradient: 'from-blue-500 to-blue-600' },
                { icon: Instagram, href: '#', gradient: 'from-pink-500 to-purple-600' },
                { icon: Twitter, href: '#', gradient: 'from-blue-400 to-blue-500' }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300`}
                  >
                    <IconComponent size={20} className="text-white" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Rooms & Suites', href: '#rooms' },
                { name: 'Dining', href: '#dining' },
                { name: 'About Us', href: '#about' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  content: 'Dal Lake Boulevard, Srinagar\nJammu & Kashmir 190001',
                  gradient: 'from-amber-500 to-orange-600'
                },
                {
                  icon: Phone,
                  content: '+91 194 250 1234',
                  gradient: 'from-blue-500 to-indigo-600'
                },
                {
                  icon: Mail,
                  content: 'info@grandkaiser.com',
                  gradient: 'from-green-500 to-teal-600'
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className={`w-8 h-8 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={16} className="text-white" />
                    </div>
                    <p className="text-white/70 text-sm whitespace-pre-line">
                      {item.content}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-white/50 text-sm">
              <span>© 2024 Grand Kaiser Hotel & Resort. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>in Kashmir</span>
            </div>
            
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="text-white/50 hover:text-amber-400 text-sm transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-8 right-8 w-16 h-16 bg-amber-400/10 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-16 left-16 w-12 h-12 bg-blue-400/10 rounded-full blur-lg"
        />
      </div>
    </footer>
  );
}
