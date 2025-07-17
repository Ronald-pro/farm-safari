"use client"; // for Next.js app directory (optional)

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function WhatWeDo() {
	const items = [
		{
			title: "Sustainable Crop Production",
			description:
				"We promote climate-resilient, high-return crops like chili and moringa that restore soil health and generate income. We support farmer training and access to certified seeds and standards like GlobalGAP and KS 1758.",
			link: "#"
		},
		{
			title: "Agroforestry and Carbon Farming",
			description:
				"We help farmers plant high carbon-sequestering trees like macadamia and moringa. These trees provide food, income, erosion control, and long-term environmental benefits. We are also preparing farmers for future participation in carbon credit markets.",
			link: "#"
		},
		{
			title: "Capacity Building",
			description:
				"We train farmers, especially women and the youth in regenerative farming and agroforestry models.",
			link: "#"
		},
		{
			title: "Collaborative Program Implementation",
			description:
				"We partner with like-minded organizations to co-implement projects that scale impact and connect farmers to sustainable value chains.",
			link: "#"
		}
	];

	const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section className="py-16 px-4 bg-[var(--oxfam-lightbg)]">
			<motion.div
				ref={headingRef}
				initial={{ opacity: 0, y: 40 }}
				animate={headingInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.6 }}
				className="max-w-7xl mx-auto text-center mb-12"
			>
				<h2 className="text-3xl md:text-4xl font-bold text-[var(--oxfam-green)] mb-2">
					What we do
				</h2>
				<p className="text-[var(--oxfam-darkgray)]">
					Farm Safari runs regenerative agricultural and agroforestry programs through unique scalable out-grower models.
				</p>
				<h6 className="text-[var(--oxfam-darkgray)] font-bold mt-2">
					Our key areas include:
				</h6>
			</motion.div>

			<div className="grid gap-8 md:grid-cols-2">
				{items.map((item, index) => {
					const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

					return (
						<motion.div
							ref={ref}
							key={index}
							initial={{ opacity: 0, y: 50 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="bg-white rounded-xl shadow-md p-6 text-center border border-[var(--oxfam-border)] hover:shadow-lg transition"
						>
							<h3 className="text-xl font-semibold text-[var(--oxfam-green)] mb-2">
								{item.title}
							</h3>
							<p className="text-[var(--oxfam-darkgray)] mb-4">{item.description}</p>
							<a
								href={item.link}
								className="text-[var(--oxfam-green)] font-medium underline hover:text-[var(--oxfam-darkgreen)]"
							>
								Learn more
							</a>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}
