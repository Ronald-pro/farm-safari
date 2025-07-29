"use client";

import { motion } from "framer-motion";
import {
	FaSeedling,
	FaChartLine,
	FaHandsHelping,
	FaRecycle
} from "react-icons/fa";

export default function StrategyAndApproach() {
	return (
		<section className="bg-white py-24 px-6">
			<div className="max-w-7xl mx-auto space-y-24">
				{/* OUR APPROACH */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center max-w-4xl mx-auto"
				>
					<h2 className="text-4xl font-bold text-green-700 mb-4">
						Our Approach
					</h2>
					<p className="text-gray-600 text-lg mb-12">
						We believe that change grows from the ground up. Our approach is:
					</p>

					<div className="grid gap-8 md:grid-cols-2">
						{[
							{
								title: "Farmer-Centric",
								icon: <FaHandsHelping className="text-white text-3xl" />,
								desc: "Co-create solutions with farmers reflecting real needs."
							},
							{
								title: "Evidence Driven",
								icon: <FaChartLine className="text-white text-3xl" />,
								desc: "Guided by research, field data, and continuous learning."
							},
							{
								title: "Systems Oriented",
								icon: <FaRecycle className="text-white text-3xl" />,
								desc: "Address the full system: environment, food, income, and community."
							},
							{
								title: "Inclusive and Equitable",
								icon: <FaSeedling className="text-white text-3xl" />,
								desc: "Prioritize women, youth, and marginalized voices."
							}
						].map((item, idx) => (
							<div
								key={idx}
								className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition"
							>
								<div className="p-4 bg-green-700 rounded-full flex items-center justify-center">
									{item.icon}
								</div>
								<div>
									<h4 className="text-xl font-semibold text-green-800 mb-1">
										{item.title}
									</h4>
									<p className="text-gray-600 text-sm">{item.desc}</p>
								</div>
							</div>
						))}
					</div>
				</motion.div>

				{/* OUR STRATEGIC FRAMEWORK */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center max-w-5xl mx-auto"
				>
					<h2 className="text-4xl font-bold text-green-700 mb-4">
						Our Strategic Framework
					</h2>
					<p className="text-gray-600 text-lg mb-12">
						Built on four pillars to achieve sustainable agriculture and
						agroforestry in Kenya:
					</p>

					<div className="grid md:grid-cols-2 gap-8 text-left">
						{[
							{
								title: "1. Environmental Restoration",
								points: [
									"Restore 100+ hectares of degraded land annually with agroforestry.",
									"Implement rainwater harvesting and drip irrigation techniques."
								]
							},
							{
								title: "2. Farmer Empowerment",
								points: [
									"Train 500+ outgrower farmers annually on regenerative practices."
								]
							},
							{
								title: "3. Economic Sustainability",
								points: [
									"Develop crop value chains & connect to local/global markets.",
									"Facilitate access to carbon credit markets through partnerships."
								]
							},
							{
								title: "4. Partnerships and Innovation",
								points: [
									"Collaborate with KEFRI and KOAN for technical expertise."
								]
							}
						].map((pillar, idx) => (
							<div
								key={idx}
								className="p-6 bg-[#f9f9f9] rounded-xl shadow hover:shadow-lg transition border-l-4 border-green-600"
							>
								<h3 className="text-lg font-bold text-green-800 mb-2">
									{pillar.title}
								</h3>
								<ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
									{pillar.points.map((point, i) => (
										<li key={i}>{point}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
