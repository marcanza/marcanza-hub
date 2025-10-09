'use client';

import { motion } from "motion/react";
import ContactUs from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <motion.section
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="relative flex flex-col md:flex-row items-start justify-center overflow-hidden m-4"
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-start">
        <h1 className="text-4xl sm:text-5xl font-light mb-8 leading-tight max-w-[70vw] md:max-w-[40vw]">
          <span className="font-bold">We&apos;re ready to hear from</span> you
          <span className="font-bold">!</span>
        </h1>

        <p className="text-gray-300 leading-relaxed">
          We love what we do, and even more to do it from Hyderabad.
          Although we work in a hybrid way, our office in Hyderabad
          is open to you. Use us as an excuse to visit and discover why
          it is the best place to grow a business, surrounded by opportunity.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <ContactUs />
      </div>
    </motion.section>
  );
}

