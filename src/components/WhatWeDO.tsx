// components/WhatWeDo.tsx
// import { Megaphone, Handshake, Sprout } from "lucide-react";

export default function WhatWeDo() {
	const items = [
		{
			//   icon: <Handshake className="h-10 w-10 text-red-600" />,
			title: "Sustainable Crop Production",
			description:
				"We promote climate-resilient, high-return crops like chili and moringa that restore soil health and generate income. We support farmer training and access to certified seeds and standards like GlobalGAP and KS 1758.",
			link: "#"
		},
		{
			//   icon: <Megaphone className="h-10 w-10 text-orange-500" />,
			title: "Agroforestry and Carbon Farming",
			description:
				"We help farmers plant high carbon-sequestering trees like macadamia and moringa. These trees provide food, income, erosion control, and long-term environmental benefits. We are also preparing farmers for future participation in carbon credit markets. ",
			link: "#"
		},
		{
			//   icon: <Sprout className="h-10 w-10 text-green-700" />,
			title: "Capacity Building",
			description:
				"We train farmers, especially women and the youth in regenerative farming and agroforestry models",
			link: "#"
		},
		{
			//   icon: <Sprout className="h-10 w-10 text-green-700" />,
			title: "Collaborative Program Implementation ",
			description:
				"We partner with like-minded organizations to co-implement projects that scale impact and connect farmers to sustainable value chains.",
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
					Farm Safari runs regenerative agricultural and agroforestry programs through unique scalable  out-grower models.
				</p>
				<h6 className="text-gray-600-bold">
					Our key areas include:
				</h6>
			</div>

			<div className="grid gap-8 md:grid-cols-2">
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
