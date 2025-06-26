// pages/about.tsx
import AboutUsSection from "@/components/AboutUsSection";
import { aboutSections } from "@/data/aboutSection";
import Link from 'next/link';

export default function AboutPage() {
	return (
		<div>
			<header className="bg-[var(--oxfam-lightgreen)] py-16 text-center">
				<h1 className="text-4xl md:text-5xl font-bold text-green-900">
					About Us
				</h1>
				<p className="mt-4 max-w-2xl mx-auto text-gray-700">
					Oxfam is an international charity and global movement dedicated to
					tackling the root causes of poverty... :contentReference[oaicite:8]
					{/* {(index = 8)} */}
				</p>
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
						href="#"
						className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800"
					>
						Donate Now
					</Link>
					<Link
						href="#"
						className="px-6 py-3 border border-green-700 text-green-700 rounded-lg hover:bg-green-200"
					>
						Volunteer
					</Link>
					<Link
						href="#"
						className="px-6 py-3 border border-green-700 text-green-700 rounded-lg hover:bg-green-200"
					>
						Campaign with us
					</Link>
				</div>
			</section>
		</div>
	);
}
