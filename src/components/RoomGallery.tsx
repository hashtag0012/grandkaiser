import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bed, Users, Wifi, Car, Star, ArrowRight } from 'lucide-react';
import RippleGrid from './ui/RippleGrid';
import ReservationModal from './ui/ReservationModal';

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

function RoomCard({ room, index, onBookNow }: { room: typeof rooms[0], index: number, onBookNow: (room: typeof rooms[0]) => void }) {

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
        {/* Enhanced Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 via-yellow-600/8 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent rounded-3xl opacity-30" />
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-2xl opacity-50" />
        
        {/* Content */}
        <div className="relative z-10 space-y-6">
          {/* Room Image */}
          <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden mb-6 relative">
            <img 
              src={`https://images.unsplash.com/photo-${room.id === 1 ? '1618773928121-c32242e63f39' : room.id === 2 ? '1631049307264-b8ec7b2e5b1b' : room.id === 3 ? '1566073771259-6a8506057963' : '1582719478250-c89cae4dc85b'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`}
              alt={room.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-transparent to-blue-900/20" />
            <div className="absolute bottom-4 left-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Bed className="text-black" size={20} />
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
              onClick={() => onBookNow(room)}
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
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = (room: typeof rooms[0]) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  return (
    <section ref={sectionRef} id="rooms" className="relative py-20 bg-black overflow-hidden">
      {/* Enhanced RippleGrid Background */}
      <div className="absolute inset-0">
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

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-black/60 to-slate-800/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 via-transparent to-slate-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-gray-800/40" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-slate-700/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-700/20 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-600/15 to-yellow-700/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-800/20 to-indigo-900/20 rounded-full blur-3xl" />
      <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-gradient-to-r from-purple-800/12 to-pink-900/12 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-800/10 to-teal-900/10 rounded-full blur-3xl" />

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
            <RoomCard key={room.id} room={room} index={index} onBookNow={handleBookNow} />
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

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        roomName={selectedRoom?.name || ''}
        roomPrice={selectedRoom?.price || ''}
      />
    </section>
  );
}
