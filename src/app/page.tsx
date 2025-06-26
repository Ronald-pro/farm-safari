import About from "@/components/About";
import Mission from "@/components/Mission";
import WhatWeDo from "@/components/WhatWeDO";

export default function HomePage() {
	return (
		<div>
			<section id="what-we-do">
				<WhatWeDo />
			</section>

			<section id="about">
				<About
					title="Empowering Farmers Across the Region"
					subtitle="Training, support and sustainable farming solutions."
					cta="Learn More →"
				/>
			</section>
			<hr className="my-12 border-t-2 border-gray-200" />
			<section id="mission">
				<Mission
					title="Empowering Farmers Across the Region"
					subtitle="Training, support and sustainable farming solutions."
				/>
			</section>
		</div>
	);
}
