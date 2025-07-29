import WhatWeDo from "@/components/WhatWeDO";
import Main from "@/components/Main";
import StrategyAndApproach from "@/components/StrategyAndApproach";

export default function HomePage() {
	return (
		<div>
			<Main />
			<section id="what-we-do">
				<WhatWeDo />
			</section>
			
			<section id="strategy-approach">
				<StrategyAndApproach />
			</section>

		</div>
	);
}
