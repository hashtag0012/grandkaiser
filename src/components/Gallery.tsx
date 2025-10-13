import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Camera, Eye } from 'lucide-react';
import DarkAnimatedGradient from './ui/DarkAnimatedGradient';
import ExpandableImageGallery from './ui/ExpandableImageGallery';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Hotel Exterior',
    category: 'Architecture',
    description: 'Majestic facade overlooking Dal Lake'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Royal Suite',
    category: 'Rooms',
    description: 'Luxury accommodation with traditional Kashmiri decor'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Saffron Restaurant',
    category: 'Dining',
    description: 'Elegant dining with authentic Kashmiri cuisine'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Spa Sanctuary',
    category: 'Wellness',
    description: 'Tranquil spa treatments with mountain views'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Mughal Gardens',
    category: 'Gardens',
    description: 'Pristine gardens inspired by Mughal architecture'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Infinity Pool',
    category: 'Recreation',
    description: 'Heated pool with panoramic valley views'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  return (
    <section ref={sectionRef} id="gallery" className="relative py-20 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <DarkAnimatedGradient
          startingGap={135}
          Breathing={true}
          animationSpeed={0.008}
          breathingRange={10}
          topOffset={25}
          containerClassName="opacity-50"
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/35 via-black/55 to-slate-800/35" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-800/6 to-indigo-900/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-600/5 to-amber-700/5 rounded-full blur-3xl" />
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
            Visual Journey
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-6 leading-tight">
            Gallery &
            <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent font-normal">
              Moments
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover the beauty and elegance of Grand Kaiser through our curated collection
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-lg shadow-amber-500/25'
                  : 'backdrop-blur-xl bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Expandable Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <ExpandableImageGallery
            images={galleryImages.slice(0, 6).map(img => img.src)}
            title="Visual Journey"
            description="Discover the beauty and elegance of Grand Kaiser through our curated collection"
            className="py-0"
          />
        </motion.div>

        {/* Traditional Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl cursor-pointer backdrop-blur-xl bg-white/5 border border-white/10"
                onClick={() => openLightbox(image.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <Camera className="text-white/30" size={48} />
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2 py-1 bg-amber-400/20 text-amber-400 text-xs rounded-full border border-amber-400/30">
                          {image.category}
                        </span>
                        <Eye size={16} className="text-white/60" />
                      </div>
                      <p className="text-lg font-semibold mb-1">{image.alt}</p>
                      <p className="text-sm text-white/70">{image.description}</p>
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
                      delay: index * 0.2
                    }}
                    className="absolute top-4 right-4 w-8 h-8 bg-amber-400/20 rounded-full blur-sm"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-10 p-2 rounded-full backdrop-blur-sm bg-white/10"
              >
                <X size={24} />
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors z-10 p-2 rounded-full backdrop-blur-sm bg-white/10"
              >
                <ChevronLeft size={32} />
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors z-10 p-2 rounded-full backdrop-blur-sm bg-white/10"
              >
                <ChevronRight size={32} />
              </motion.button>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const currentImage = filteredImages.find(img => img.id === selectedImage);
                  return currentImage ? (
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 flex items-center justify-center mb-4" style={{ minHeight: '400px' }}>
                        <div className="text-center">
                          <Camera className="text-white/30 mx-auto mb-4" size={64} />
                          <p className="text-white/60">{currentImage.alt}</p>
                        </div>
                      </div>
                      <div className="text-white">
                        <h3 className="text-2xl font-serif font-light mb-2">{currentImage.alt}</h3>
                        <p className="text-white/70">{currentImage.description}</p>
                      </div>
                    </div>
                  ) : null;
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
