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

			<section id="mission">
				<Mission
					title="Empowering Farmers Across the Region"
					subtitle="Training, support and sustainable farming solutions."
				/>
			</section>
		</div>
	);
}
