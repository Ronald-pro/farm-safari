// pages/about.tsx
import AboutUsSection from "@/components/AboutUsSection";
import { aboutSections } from "@/data/aboutSection";


export default function AboutPage() {
	return (
		<div>
			<header
				className="relative w-full h-[400px] md:h-[560px] bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: "url('/aboutsection.jpg')" }}
			>
				{/* Dark overlay for readability */}
				<div className="absolute inset-0 bg-darkgreen bg-opacity-60"></div>

				{/* Text content */}
				<div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
					<h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
					<p className="max-w-2xl text-base md:text-lg">
						Farm Safari is an ESG-driven Non-governmental organization
						transforming rural communities and landscapes through sustainable
						agriculture and agroforestry. Inspired by the UN Sustainable
						Development Goals, we empower smallholder and out-grower farmers in
						Kenya to grow profitable, climate-resilient crops and high
						carbon-sequestering trees.
					</p>
					<p className="max-w-2xl text-base md:text-lg">
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

			<section className="bg-gray-100 py-6 text-center">

			</section>
		</div>
	);
}
