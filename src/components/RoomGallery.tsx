import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bed, Users, Wifi, Car, Star, ArrowRight } from 'lucide-react';
import RippleGrid from './ui/RippleGrid';

const rooms = [
  {
    id: 1,
    name: 'Royal Suite',
    price: '₹25,000',
    rating: 5.0,
    amenities: ['King Bed', '2 Guests', 'Free WiFi', 'Valet Parking'],
    description: 'Ultimate luxury with panoramic Dal Lake views and private butler service',
    features: ['Private Balcony', 'Butler Service', 'Jacuzzi', 'Mini Bar']
  },
  {
    id: 2,
    name: 'Deluxe Suite',
    price: '₹15,000',
    rating: 4.8,
    amenities: ['King Bed', '2 Guests', 'Free WiFi', 'Parking'],
    description: 'Spacious suite with traditional Kashmiri architecture and modern amenities',
    features: ['Garden View', 'Sitting Area', 'Work Desk', 'Room Service']
  },
  {
    id: 3,
    name: 'Premium Room',
    price: '₹12,000',
    rating: 4.7,
    amenities: ['Queen Bed', '2 Guests', 'Free WiFi', 'Parking'],
    description: 'Elegant room with handcrafted furniture and mountain views',
    features: ['Mountain View', 'Minibar', 'Safe', 'Tea/Coffee']
  },
  {
    id: 4,
    name: 'Family Suite',
    price: '₹18,000',
    rating: 4.9,
    amenities: ['2 Beds', '4 Guests', 'Free WiFi', 'Parking'],
    description: 'Perfect for families with connecting rooms and children amenities',
    features: ['Connecting Rooms', 'Kids Area', 'Extra Bed', 'Family Games']
  }
];

function RoomCard({ room, index }: { room: typeof rooms[0], index: number }) {

  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes('Bed')) return <Bed size={16} />;
    if (amenity.includes('Guests')) return <Users size={16} />;
    if (amenity.includes('WiFi')) return <Wifi size={16} />;
    if (amenity.includes('Parking')) return <Car size={16} />;
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl p-8 hover:bg-black/30 transition-all duration-500 transform-gpu">
        {/* Content */}
        <div className="relative z-10 space-y-6">
          {/* Room Image Placeholder */}
          <div className="aspect-[4/3] bg-slate-900 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="text-black" size={24} />
              </div>
              <p className="text-white/60 text-sm">{room.name}</p>
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
                ease: "easeInOut"
              }}
              className="absolute top-4 right-4 w-8 h-8 bg-amber-400/20 rounded-full blur-sm"
            />
          </div>

          {/* Room Details */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-serif font-light text-white">
                {room.name}
              </h3>
              <div className="flex items-center space-x-1">
                <Star className="text-amber-400 fill-current" size={16} />
                <span className="text-white/70 text-sm">{room.rating}</span>
              </div>
            </div>
            
            <p className="text-3xl font-bold text-amber-400 mb-4">
              {room.price}
              <span className="text-lg font-normal text-white/60">/night</span>
            </p>
            
            <p className="text-white/70 leading-relaxed mb-6">
              {room.description}
            </p>
          </div>

          {/* Amenities */}
          <div className="grid grid-cols-2 gap-3">
            {room.amenities.map((amenity, idx) => (
              <div key={idx} className="flex items-center space-x-2 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-amber-400">
                  {getAmenityIcon(amenity)}
                </div>
                <span className="text-white/80 text-sm font-medium">{amenity}</span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-2">
            <h4 className="text-white font-semibold text-sm">Features:</h4>
            <div className="flex flex-wrap gap-2">
              {room.features.map((feature, idx) => (
                <span key={idx} className="px-3 py-1 bg-amber-400/20 text-amber-400 text-xs rounded-full border border-amber-400/30">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3 pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-600 text-black py-3 rounded-xl font-semibold hover:from-yellow-400 hover:to-amber-500 transition-all duration-300"
            >
              Book Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Details</span>
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function RoomGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="rooms" className="relative py-20 bg-black overflow-hidden">
      {/* Enhanced RippleGrid Background */}
      <div className="absolute inset-0 w-full h-full">
        <RippleGrid
          enableRainbow={false}
          gridColor="#3a3a6a"
          rippleIntensity={0.08}
          gridSize={12}
          gridThickness={6}
          mouseInteraction={true}
          mouseInteractionRadius={0.8}
          opacity={1.0}
          glowIntensity={0.25}
          fadeDistance={10.0}
          vignetteStrength={0.0}
        />
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
            Luxury Accommodations
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-6 leading-tight">
            Rooms & 
            <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent font-normal">
              Suites
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Experience unparalleled comfort in our thoughtfully designed accommodations
          </p>
        </motion.div>

        {/* Room Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
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
            View All Rooms
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
