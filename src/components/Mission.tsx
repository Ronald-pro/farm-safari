// components/CoreValuesSection.tsx
import { FaLeaf, FaHandshake, FaLightbulb, FaUsers, FaBalanceScale } from "react-icons/fa";

const values = [
  {
    icon: <FaLeaf className="text-green-700 text-3xl mb-2" />,
    title: "Sustainability",
    description: "We champion practices that protect the planet and sustain livelihoods for generations. Every step we take is rooted in long-term impact.",
  },
  {
    icon: <FaBalanceScale className="text-green-700 text-3xl mb-2" />,
    title: "Integrity",
    description: "We lead with honesty and transparency, building trust through consistent, accountable action.",
  },
  {
    icon: <FaHandshake className="text-green-700 text-3xl mb-2" />,
    title: "Collaboration",
    description: "We grow stronger together, working hand-in-hand with farmers, communities, and partners to co-create solutions.",
  },
  {
    icon: <FaLightbulb className="text-green-700 text-3xl mb-2" />,
    title: "Innovation",
    description: "We embrace new ideas and adapt to challenges, combining modern tools with grassroots wisdom.",
  },
  {
    icon: <FaUsers className="text-green-700 text-3xl mb-2" />,
    title: "Inclusion",
    description: "We prioritize women, youth, and marginalized voices, ensuring equity in every decision and opportunity.",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-green-800 mb-4">Our Values</h2>
        <p className="text-lg text-gray-700 mb-12">
          Rooted in purpose, guided by principles.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mt-4 mb-2">{value.title}</h3>
              <p className="text-gray-700 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
