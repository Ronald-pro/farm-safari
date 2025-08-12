"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
	return (
		<section className="relative text-white py-20 md:py-32 px-6 flex items-center justify-center overflow-hidden">
			{/* Moving background */}
			<motion.div
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: "url('/counties.jpg')" }}
				initial={{ scale: 1.1 }}
				animate={{ scale: 1 }}
				transition={{ duration: 15 }}
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/50 z-10" />

			{/* Floating SVGs */}
			<motion.img
				src="/leaf1.svg"
				alt="Floating Leaf"
				className="absolute w-10 top-10 left-10 z-10 opacity-40"
				animate={{ y: [0, 20, 0] }}
				transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
			/>

			<motion.img
				src="/leaf2.svg"
				alt="Floating Leaf"
				className="absolute w-12 bottom-20 right-16 z-10 opacity-30"
				animate={{ y: [0, -15, 0] }}
				transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
			/>

			<motion.img
				src="/blob.svg"
				alt="Floating Blob"
				className="absolute w-24 top-1/4 left-1/4 z-10 opacity-20"
				animate={{ y: [0, 25, 0], x: [0, 10, 0] }}
				transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
			/>

			<motion.img
				src="/acacia_leaf.svg"
				alt="Acacia Leaf"
				className="absolute w-20 bottom-10 left-1/3 z-10 opacity-25"
				animate={{ y: [0, -30, 0] }}
				transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
			/>

			<motion.img
				src="/mango_leaf.svg"
				alt="Mango Leaf"
				className="absolute w-16 top-1/3 right-10 z-10 opacity-20"
				animate={{ y: [0, 15, 0] }}
				transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
			/>

			<motion.div
				className="relative z-20 max-w-3xl mx-auto text-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<motion.h1
					className="text-3xl md:text-5xl font-extrabold mb-4"
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
				>
					<span className="text-yellow-400">Farm Safari</span>
				</motion.h1>

				<motion.p
					className="text-lg md:text-xl mb-6"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					Farm Safari is an ESG-driven NGO transforming rural communities
					through sustainable agriculture and agroforestry.
				</motion.p>

				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<Link
						href="/about"
						className="inline-block bg-[#61A534] text-white font-semibold py-3 px-6 rounded shadow hover:bg-blue-400 transition"
					>
						Read More About Us
					</Link>
				</motion.div>
			</motion.div>
		</section>
	);
}
