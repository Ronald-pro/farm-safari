type MissionProps = {
	title: string;
	subtitle: string;

};

export default function About({ title, subtitle }: MissionProps) {
	return (
		<section className="py-16 px-4 bg-green-50 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We aim to uplift farmers by providing access to resources, education, and
          sustainable agricultural practices that ensure food security and economic growth.
        </p>
      </section>
	);
}
