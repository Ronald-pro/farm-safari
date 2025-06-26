// pages/about.tsx
import AboutUsSection from "@/components/AboutUsSection";
import { aboutSections } from "@/data/aboutSection";
import Link from "next/link";

export default function AboutPage() {
	return (
		<div>
			<header
				className="relative w-full h-[400px] md:h-[400px] bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: "url('/about-hero.jpg')" }}
			>
				{/* Dark overlay for readability */}
				<div className="absolute inset-0 bg-darkgreen bg-opacity-60"></div>

				{/* Text content */}
				<div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
					<h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
					<p className="max-w-2xl text-base md:text-lg">
						We are a global movement working to end poverty, injustice, and
						inequality — and to build lasting solutions with communities in
						need.
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

			<section className="bg-gray-100 py-12 text-center">
				<h2 className="text-xl font-semibold text-green-900 mb-4">
					How can you help?
				</h2>
				<div className="space-x-4">
					<Link
						href="/donate"
						className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800"
					>
						Donate Now
					</Link>
					<Link
						href="/volunteer"
						className="px-6 py-3 border border-green-700 text-green-700 rounded-lg hover:bg-green-200"
					>
						Volunteer
					</Link>
					<Link
						href="/campaign"
						className="px-6 py-3 border border-green-700 text-green-700 rounded-lg hover:bg-green-200"
					>
						Campaign with us
					</Link>
				</div>
			</section>
		</div>
	);
}
