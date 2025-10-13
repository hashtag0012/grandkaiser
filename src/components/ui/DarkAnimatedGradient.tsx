import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface DarkAnimatedGradientProps {
   startingGap?: number;
   Breathing?: boolean;
   animationSpeed?: number;
   breathingRange?: number;
   containerStyle?: React.CSSProperties;
   containerClassName?: string;
   topOffset?: number;
}

const DarkAnimatedGradient: React.FC<DarkAnimatedGradientProps> = ({
   startingGap = 130,
   Breathing = true,
   animationSpeed = 0.012,
   breathingRange = 10,
   containerStyle = {},
   topOffset = 0,
   containerClassName = "",
}) => {
   const containerRef = useRef<HTMLDivElement | null>(null);

   // Dark tinted yellow, black, blue gradient colors
   const gradientColors = [
      "#000000",     // Pure black
      "#1a1a2e",     // Dark navy blue
      "#16213e",     // Darker blue
      "#0f3460",     // Deep blue
      "#533a00",     // Dark yellow/gold
      "#664d00",     // Darker yellow
      "#1a1a2e",     // Dark navy blue
      "#000000"      // Pure black
   ];

   const gradientStops = [0, 15, 30, 45, 60, 75, 90, 100];

   useEffect(() => {
      let animationFrame: number;
      let width = startingGap;
      let directionWidth = 1;

      const animateGradient = () => {
         if (width >= startingGap + breathingRange) directionWidth = -1;
         if (width <= startingGap - breathingRange) directionWidth = 1;

         if (!Breathing) directionWidth = 0;
         width += directionWidth * animationSpeed;

         const gradientStopsString = gradientStops
            .map((stop, index) => `${gradientColors[index]} ${stop}%`)
            .join(", ");

         const gradient = `radial-gradient(${width}% ${width + topOffset}% at 50% 30%, ${gradientStopsString})`;

         if (containerRef.current) {
            containerRef.current.style.background = gradient;
         }

         animationFrame = requestAnimationFrame(animateGradient);
      };

      animationFrame = requestAnimationFrame(animateGradient);

      return () => cancelAnimationFrame(animationFrame);
   }, [startingGap, Breathing, animationSpeed, breathingRange, topOffset]);

   return (
      <motion.div
         key="dark-animated-gradient"
         initial={{
            opacity: 0,
            scale: 1.2,
         }}
         animate={{
            opacity: 1,
            scale: 1,
            transition: {
               duration: 1.5,
               ease: [0.25, 0.1, 0.25, 1],
            },
         }}
         className={`absolute inset-0 overflow-hidden ${containerClassName}`}
      >
         <div
            ref={containerRef}
            style={containerStyle}
            className="absolute inset-0 transition-transform"
         />
      </motion.div>
   );
};

export default DarkAnimatedGradient;
