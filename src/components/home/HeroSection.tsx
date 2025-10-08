"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-2 py-12 flex flex-col md:flex-row items-center justify-center gap-6">
        {/* image */}
        <div className="w-full flex items-center justify-center">
          <div className="relative w-[350px] sm:w-[450px] md:w-[550px] aspect-square">
            <Image
              src="/glass-lightning.webp"
              alt="Hero Image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full text-center">
          <p className="text-sm sm:text-lg font-medium tracking-wider uppercase mb-6">
            Next-Gen Brands
          </p>
          <h1 className="text-3xl sm:text-5xl font-light mb-8 leading-tight uppercase">
            <span className="font-bold">
              From idea to reality, we build brands with
            </span>{" "}
            clarity, purpose, and lasting vision.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="backdrop-blur-md bg-white/10 text-primary-foreground hover:bg-primary/80"
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              className="border-border hover:bg-secondary hover:text-black bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;

