import Image from "next/image";
import Link from "next/link";

export default function WhatWeDoPage() {
	const programs = [
		{
			title: "Climate Change",
			description:
				"We support climate-affected communities with adaptation strategies and advocacy.",
			image: "/climate.jpg",
			href: "#"
		},
		{
			title: "First Peoples Justice",
			description:
				"Working alongside Indigenous communities for equality, rights, and respect.",
			image: "/community.png",
			href: "#"
		},
		{
			title: "Gender Justice",
			description:
				"Promoting equality and ending gender-based violence around the globe.",
			image: "/equality.jpg",
			href: "#"
		}
		// {
		// 	title: "Economic Justice",
		// 	description:
		// 		"Challenging the global inequality crisis with fair systems and opportunity.",
		// 	image: "/economic.jpg",
		// 	href: "/economic-justice"
		// },
		// {
		// 	title: "Humanitarian Response",
		// 	description:
		// 		"Delivering life-saving aid in times of conflict, disaster and crisis.",
		// 	image: "/humanitarian.jpg",
		// 	href: "/humanitarian-response"
		// }
	];

	return (
		<main>
			{/* Hero */}
			<section className="bg-[var(--oxfam-lightgreen)] text-[var(--oxfam-green)] text-center text-white py-16 px-4">
				<h1 className="text-4xl font-bold mb-4">What We Do</h1>
				<p className="text-lg max-w-3xl mx-auto">
					We work in partnership with communities to tackle food security, climate
					change for better livelyhood with sustainable food.
				</p>
			</section>

			{/* Program Cards */}
			<section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{programs.map((item) => (
					<Link
						key={item.title}
						href={item.href}
						className="bg-white shadow hover:shadow-md rounded overflow-hidden"
					>
						<div className="relative h-52 w-full">
							<Image
								src={item.image}
								alt={item.title}
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div className="p-4 text-[var(--oxfam-green)]">
							<h2 className="text-xl font-bold mb-2">{item.title}</h2>
							<p className="text-sm">{item.description}</p>
						</div>
					</Link>
				))}
			</section>

			{/* CTA Section */}
			<section className="bg-[var(--oxfam-green)] text-white text-center py-12">
				<h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
				<p className="mb-6">
					Help us create a just, sustainable future for everyone.
				</p>
				{/* <Link
					href="/donate"
					className="inline-block bg-white text-[var(--oxfam-green)] px-6 py-3 rounded-full font-semibold hover:opacity-90"
				>
					Donate Now
				</Link> */}
			</section>
		</main>
	);
}
