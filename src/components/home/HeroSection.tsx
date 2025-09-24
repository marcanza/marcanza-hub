"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";

const HeroSection = () => {
	return (
		<motion.section
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{
				duration: 0.8,
				delay: 0.3,
				ease: [0, 0.71, 0.2, 1.01],
			}}
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
		>
			<div className="container mx-auto px-6 text-center">
				<div className="max-w-4xl mx-auto">
					<p className="text-lg font-medium tracking-wider uppercase mb-6">
						Next-Gen Brands
					</p>
					<h1 className="text-5xl md:text-7xl font-medium mb-8 text-balance">
						<span className="font-bold">
							The future belongs to the brands that define the
						</span>{" "}
						world around them
					</h1>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							className="bg-primary text-primary-foreground hover:bg-primary/80"
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
