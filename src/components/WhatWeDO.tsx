// components/WhatWeDo.tsx
// import { Megaphone, Handshake, Sprout } from "lucide-react";

export default function WhatWeDo() {
	const items = [
		{
			//   icon: <Handshake className="h-10 w-10 text-red-600" />,
			title: "Advocacy and Campaigns",
			description:
				"We mobilize people to challenge the structures that sustain poverty and advocate for a better world.",
			link: "#"
		},
		{
			//   icon: <Megaphone className="h-10 w-10 text-orange-500" />,
			title: "Humanitarian Aid",
			description:
				"When a crisis hits, we provide life-saving aid and support through local partners.",
			link: "#"
		},
		{
			//   icon: <Sprout className="h-10 w-10 text-green-700" />,
			title: "Long Term Development",
			description:
				"We work with communities to develop solutions that address poverty now and into the future.",
			link: "#"
		}
	];

	return (
		<section className="py-16 px-4 bg-gray-50">
			<div className="max-w-7xl mx-auto text-center mb-12">
				<h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
					What we do
				</h2>
				<p className="text-gray-600">
					Learn about how we partner with communities to create lasting change.
				</p>
			</div>

			<div className="grid gap-8 md:grid-cols-3">
				{items.map((item, index) => (
					<div
						key={index}
						className="bg-white rounded-lg shadow-md p-6 text-center transition hover:shadow-lg"
					>
						{/* <div className="mb-4 flex justify-center">{item.icon}</div> */}
						<h3 className="text-xl font-semibold text-green-900 mb-2">
							{item.title}
						</h3>
						<p className="text-gray-600 mb-4">{item.description}</p>
						<a
							href={item.link}
							className="text-green-700 font-medium underline"
						>
							Learn more
						</a>
					</div>
				))}
			</div>
		</section>
	);
}
