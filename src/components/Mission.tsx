type MissionProps = {
	title: string;
	subtitle: string;
};

export default function About({ title, subtitle }: MissionProps) {
	return (
		<section className="bg-primary text-white py-20 text-center">
			<h1 className="text-4xl font-bold">{title}</h1>
			<p className="mt-4 text-lg">{subtitle}</p>
			<p className="text-lg text-gray-700 max-w-2xl mx-auto">
				We aim to uplift farmers by providing access to resources, education,
				and sustainable agricultural practices that ensure food security and
				economic growth.
			</p>
		</section>
	);
}
