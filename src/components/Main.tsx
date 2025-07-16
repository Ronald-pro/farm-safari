import Link from "next/link";

export default function HeroSection() {
	return (
		<section
			className="relative bg-green-800 text-white py-20 md:py-32 px-6 flex items-center justify-center"
			style={{
				backgroundImage: `url('/counties.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: "center"
			}}
		>
			<div className="absolute inset-0 bg-black/50" /> {/* overlay */}
			<div className="relative max-w-3xl mx-auto text-center">
				<h1 className="text-3xl md:text-5xl font-extrabold mb-4">
					About <span className="text-yellow-400">Farm Safari</span>
				</h1>

				<p className="text-lg md:text-xl mb-6">
					Farm Safari is an ESG-driven Non-governmental organization
					transforming rural communities and landscapes through sustainable
					agriculture and agroforestry
				</p>
				<Link
					href="/about"
					className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded shadow hover:bg-green-700 transition"
				>
					Read More About Us
				</Link>
			</div>
		</section>
	);
}
