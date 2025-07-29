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
					<h3 className="text-2xl font-bold text-green-700 mb-4">
						Our Approach
					</h3>
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
					className="max-w-6xl mx-auto"
				>
					<h3 className="text-2xl font-bold text-green-700 text-center mb-4">
						Our Strategic Framework
					</h3>
					<p className="text-gray-600 text-lg mb-12 text-center">
						Farm Safari Advances the United Nations Sustainable Development
						Goals Farm Safari’s commitment to regenerative agriculture and
						sustainable land management supports multiple global goals. Our
						approach not only restores degraded farmland but also strengthens
						communities, improves food security, and creates economic
						opportunities.
					</p>

					<div className="grid md:grid-cols-2 gap-8">
						{/* Category 1: Environment */}
						<div className="bg-[#f0fdf4] p-6 rounded-xl border-l-4 border-green-600">
							<h3 className="text-xl font-bold text-green-700 mb-4">
								Environment
							</h3>
							<p className="text-gray-600 text-lg mb-12 text-center">
								Our agroforestry model is designed to work in harmony with
								nature, ensuring long-term environmental sustainability.
							</p>
							<ul className="list-disc list-inside space-y-4 text-sm text-gray-700">
								<li>
									<strong>Goal :</strong> Ensure sustainable consumption and
									production patterns Farm Safari promotes self-sufficient
									farming by helping farmers grow a variety of crops for
									household consumption and local markets. We emphasize
									responsible land use, organic composting, water conservation,
									and sustainable livestock management to minimize environmental
									impact.
								</li>
								<li>
									<strong>Goal :</strong> Take urgent action to combat climate
									change and its impacts By planting trees and adopting
									regenerative farming techniques, Farm Safari helps farmers
									mitigate climate change. Trees absorb carbon, restore soil
									fertility, and create climate-resilient landscapes that
									protect against extreme weather conditions.
								</li>
								<li>
									<strong>Goal :</strong> Protect, restore, and promote
									sustainable use of terrestrial ecosystems Our model combats
									deforestation and soil degradation by encouraging farmers to
									integrate trees into their farms. This approach not only
									revitalizes farmland but also conserves biodiversity,
									providing habitat for pollinators and wildlife while reducing
									reliance on forest resources.
								</li>
							</ul>
						</div>

						{/* Category 2: Food Security + Nutrition */}
						<div className="bg-[#ecfdf5] p-6 rounded-xl border-l-4 border-teal-600">
							<h3 className="text-xl font-bold text-green-700 mb-4">
								Food Security + Nutrition
							</h3>
							<p className="text-gray-600 text-lg mb-12 text-center">
								Growing diverse, nutrient-rich crops ensures a stable food
								supply for farming families.
							</p>
							<ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
								<li>
									<strong>Goal :</strong> End hunger, achieve food security, and
									promote sustainable agriculture Farm Safari enables farmers to
									grow a wide range of fruits, vegetables, and staple crops,
									ensuring year-round food availability. This significantly
									improves household nutrition and reduces dependence on food
									aid.{" "}
								</li>
								<li>
									<strong>Goal :</strong> Ensure healthy lives and promote
									well-being for all at all ages Access to fresh, chemical-free
									produce improves family health, while sustainable land
									practices ensure clean water sources. Increased household
									income from surplus crop sales also allows families to afford
									better healthcare and education.{" "}
								</li>
							</ul>
						</div>

						{/* Category 3: Social */}
						<div className="bg-[#fefce8] p-6 rounded-xl border-l-4 border-yellow-600">
							<h3 className="text-xl font-bold text-green-700 mb-4">Social</h3>
							<p className="text-gray-600 text-lg mb-12 text-center">
								Our approach strengthens communities and fosters social
								equality.
							</p>
							<ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
								<li>
									<strong>Goal :</strong> Reduce inequality within and among
									countries Farm Safari supports smallholder farmers, empowering
									them with skills and resources to become self-reliant. Our
									programs promote gender inclusivity and celebrate cultural
									diversity, reducing economic disparities and preventing forced
									migration due to land degradation.
								</li>
								<li>
									<strong>Goal :</strong> Strengthen global partnerships for
									sustainable development We collaborate with organizations,
									experts, and governments to scale our impact. By sharing
									knowledge and training farmers in regenerative agriculture, we
									contribute to a more sustainable future for all.
								</li>
							</ul>
						</div>

						{/* Category 4: Economic */}
						<div className="bg-[#fef2f2] p-6 rounded-xl border-l-4 border-red-500">
							<h3 className="text-xl font-bold text-green-700 mb-4">
								Economic
							</h3>
							<p className="text-gray-600 text-lg mb-12 text-center">
								A thriving farm leads to financial stability and economic
								growth.
							</p>
							<ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
								<li>
									<strong>Goal :</strong> End poverty in all its forms
									everywhere Farm Safari helps break the cycle of poverty by
									providing farmers with skills to increase their yields,
									diversify income streams, and access markets—ensuring
									financial independence and generational wealth. Goal 8:
									Promote sustained, inclusive, and sustainable economic growth
									Regenerative farming creates dignified, sustainable
									livelihoods. By increasing productivity and market access,
									Farm Safari enables farmers to earn more, invest in their
									futures, and contribute to resilient
								</li>
								<li>
									<strong>Goal :</strong> Promote sustainable livelihoods
									through regenerative agriculture.
								</li>
							</ul>
						</div>
					</div>

					{/* Pillars */}
					<div className="mt-16">
						<h3 className="text-3xl font-semibold text-green-700 mb-4 text-center">
							Our Pillars
						</h3>
						<p className="text-gray-600 text-lg mb-12 text-center max-w-4xl mx-auto">
							Our strategic framework is built on four pillars to achieve
							sustainable agriculture and agroforestry in Kenya:
						</p>

						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
							{[
								{
									title: "Environmental Restoration",
									icon: "🌿",
									points: [
										"Restore 100+ hectares of degraded land annually through agroforestry.",
										"Implement rainwater harvesting and drip irrigation."
									]
								},
								{
									title: "Farmer Empowerment",
									icon: "👨‍🌾",
									points: [
										"Train 500+ outgrower farmers annually on regenerative practices."
									]
								},
								{
									title: "Economic Sustainability",
									icon: "💰",
									points: [
										"Develop crop value chains and connect to local/global markets.",
										"Facilitate access to carbon credit markets through partnerships."
									]
								},
								{
									title: "Partnerships & Innovation",
									icon: "🤝",
									points: [
										"Collaborate with KEFRI and KOAN for technical expertise."
									]
								}
							].map((pillar, idx) => (
								<div
									key={idx}
									className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-600 hover:shadow-xl transition duration-300"
								>
									<div className="flex items-center mb-4 space-x-3">
										<div className="text-3xl">{pillar.icon}</div>
										<h4 className="text-xl font-bold text-green-800">
											{pillar.title}
										</h4>
									</div>
									<ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
										{pillar.points.map((point, i) => (
											<li key={i}>{point}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
