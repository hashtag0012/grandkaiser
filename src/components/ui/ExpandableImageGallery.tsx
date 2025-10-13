import { cn } from "../../lib/utils";

interface ExpandableImageGalleryProps {
  images: string[];
  title?: string;
  description?: string;
  className?: string;
}

export default function ExpandableImageGallery({ 
  images, 
  title = "Our Latest Creations",
  description = "A visual collection of our most recent works – each piece crafted with intention, emotion, and style.",
  className 
}: ExpandableImageGalleryProps) {
  return (
    <section className={cn("w-full flex flex-col items-center justify-start py-12", className)}>
      <div className="max-w-3xl text-center px-4">
        <h1 className="text-3xl font-semibold text-white">{title}</h1>
        <p className="text-sm text-white/70 mt-2">
          {description}
        </p>
      </div>

      {/* Expandable Gallery */}
      <div className="flex items-center gap-2 h-[400px] w-full max-w-5xl mt-10 px-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
          >
            <img
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              src={src}
              alt={`Gallery image ${idx + 1}`}
            />
            {/* Overlay for better hover effect */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
