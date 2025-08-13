import { FaLeaf, FaHandsHelping, FaSeedling } from "react-icons/fa";

export default function GetInvolved() {
	return (
		<section className="bg-[#f9f9f2] py-16">
			<div className="max-w-7xl mx-auto px-4 text-center">
				<h2 className="text-2xl font-bold text-[#61A534] mb-6">
					Land Degradation, Poverty, and Food Insecurity{" "}
				</h2>
				<p className="text-gray-700 max-w-3xl mx-auto mb-12">
					Across Africa, once-fertile landscapes are turning barren, and
					ecosystems are under strain. Farming communities that depend on the
					land for survival face growing challenges—declining yields, food
					insecurity, and economic hardship.
				</p>

				<div className="grid md:grid-cols-3 gap-12">
					{/* The Problem */}
					<div>
						<div className="w-24 h-24 rounded-full border-4 border-[#ffd93b] flex items-center justify-center mx-auto mb-6">
							<FaLeaf className="text-[#61A534] text-4xl" />
						</div>
						<h3 className="text-xl font-semibold text-[#61A534] mb-3">
							The Problem
						</h3>
						<p className="text-gray-700 text-sm">
							Soil depletion, poverty, and climate change are pushing millions
							to the brink.
						</p>
					</div>

					{/* The Cause */}
					<div>
						<div className="w-24 h-24 rounded-full border-4 border-[#ffd93b] flex items-center justify-center mx-auto mb-6">
							<FaHandsHelping className="text-[#61A534] text-4xl" />
						</div>
						<h3 className="text-xl font-semibold text-[#61A534] mb-3">
							The Cause
						</h3>
						<p className="text-gray-700 text-sm">
							Unsustainable farming practices and deforestation are driving land
							degradation and food scarcity.
						</p>
					</div>

					{/* The Solution */}
					<div>
						<div className="w-24 h-24 rounded-full border-4 border-[#ffd93b] flex items-center justify-center mx-auto mb-6">
							<FaSeedling className="text-[#61A534] text-4xl" />
						</div>
						<h3 className="text-xl font-semibold text-[#61A534] mb-3">
							The Solution
						</h3>
						<p className="text-gray-700 text-sm">
							Empowering farmers with regenerative agriculture can restore land,
							rebuild livelihoods, and secure a sustainable future.
						</p>
					</div>
				</div>

				{/* Call to action */}
				<div className="mt-16 max-w-3xl mx-auto text-center">
					<p className="text-gray-700 mb-6">
						Plant Trees and Change Lives with Us — your donation empowers
						farmers with the tools, seeds, and knowledge they need to restore
						their land and build thriving, sustainable farms.
					</p>
					<p className="text-gray-700 mb-8">
						By supporting Farm Safari, you’re helping communities regenerate
						soil, increase biodiversity, and secure a future where people and
						nature thrive together.
					</p>
					<a
						href="#"
						className="inline-block bg-[#61A534] hover:bg-[#4f8f29] text-white font-semibold px-8 py-3 rounded-full transition-colors"
					>
						Donate Now
					</a>
				</div>
				{/* Closing full-width background section */}
				<div
					className="mt-16 relative bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: "url('/agriculture-background.jpeg')" // Swap this with chosen image path
					}}
				>
					<div className="absolute inset-0 bg-opacity-50"></div>
					<div className="relative z-10 py-16 px-4 text-center">
						<p className="text-2xl md:text-3xl font-bold text-white max-w-4xl mx-auto">
							Together, we can transform landscapes, uplift lives, and cultivate
							a greener, more prosperous future.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
