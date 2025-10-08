'use client';

import { motion } from "motion/react";
import ContactUs from "../forms/contactus";

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
      className="relative flex items-center justify-center overflow-hidden"
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="p-6 place-content-between">
          <div>
            <h1 className="text-3xl sm:text-5xl font-light mb-8 leading-tight">
              <span className="font-bold">
                We're ready to hear from
              </span>{" "}
              you
              <span className="font-bold">
                !
              </span>{" "}
            </h1>
          </div>
          <div>
            <p className="">
              We love what we do, and even more to do it from Hyderabad.
              Although we work in a hybrid way, our office in Hyderabad
              is open to you. Use us as an excuse to visit and discover why
              it is the best place to grow a business, surrounded by opportunity.
            </p>
          </div>
        </div>
        <div className="w-full">
          <ContactUs />
        </div>
      </div>
    </ motion.section>
  )
}
