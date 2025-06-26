type AboutProps = {
	title: string;
	subtitle: string;
	cta?: string;
};

export default function About({ title, subtitle, cta }: AboutProps) {
	return (
		<section className="bg-primary text-white py-20 text-center">
			<h1 className="text-4xl font-bold">{title}</h1>
			<p className="mt-4 text-lg">{subtitle}</p>
			{cta && (
				<a
					href="/about"
					className="mt-6 inline-block bg-white text-black px-6 py-2 rounded-full font-semibold"
				>
					{cta}
				</a>
			)}
		</section>
	);
}
