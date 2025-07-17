// pages/about.tsx
import AboutUsSection from "@/components/AboutUsSection";
import { aboutSections } from "@/data/aboutSection";

export default function AboutPage() {
	return (
		<div>
			<header
				className="relative w-full h-auto py-20 md:py-32 px-4 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: "url('/animated_gradient.svg')" }}
			>
				{/* Overlay for readability */}
				<div className="absolute inset-0 bg-darkgreen bg-opacity-60"></div>

				{/* Text content */}
				<div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-6">
					<h1 className="text-4xl md:text-5xl font-extrabold">About Us</h1>

					<p className="text-base md:text-lg leading-relaxed">
						Farm Safari is an ESG-driven Non-governmental organization
						transforming rural communities and landscapes through sustainable
						agriculture and agroforestry. Inspired by the UN Sustainable
						Development Goals, we empower smallholder and out-grower farmers in
						Kenya to grow profitable, climate-resilient crops and high
						carbon-sequestering trees.
					</p>

					<p className="text-base md:text-lg leading-relaxed">
						We combine indigenous knowledge, modern regenerative techniques, and
						collaborative partnerships to restore degraded ecosystems, improve
						rural livelihoods, and build sustainable food and economic systems.
					</p>
				</div>
			</header>

			{aboutSections.map((sec, i) => (
				<AboutUsSection
					key={sec.id}
					title={sec.title}
					description={sec.description}
					href={sec.href}
					imgSrc={sec.imgSrc}
					imgLeft={i % 2 === 1}
				/>
			))}

			<section className="bg-gray-100 py-6 text-center"></section>
		</div>
	);
}
