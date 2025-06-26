type MissionProps = {
	title: string;
	subtitle: string;

};

export default function About({ title, subtitle }: MissionProps) {
	return (
		<section className="bg-primary text-white py-20 text-center">
			<h1 className="text-4xl font-bold">{title}</h1>
			<p className="mt-4 text-lg">{subtitle}</p>

		</section>
	);
}
