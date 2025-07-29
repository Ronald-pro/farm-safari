"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaLeaf,
  FaTree,
  FaChalkboardTeacher,
  FaHandshake
} from "react-icons/fa";

const items = [
  {
    title: "Sustainable Crop Production",
    description:
      "We promote climate-resilient, high-return crops like chili and moringa that restore soil health and generate income. We support farmer training and access to certified seeds and standards like GlobalGAP and KS 1758.",
    icon: <FaLeaf />,
  },
  {
    title: "Agroforestry and Carbon Farming",
    description:
      "We help farmers plant high carbon-sequestering trees like macadamia and moringa. These trees provide food, income, erosion control, and long-term environmental benefits. We are also preparing farmers for future participation in carbon credit markets.",
    icon: <FaTree />,
  },
  {
    title: "Capacity Building",
    description:
      "We train farmers, especially women and the youth in regenerative farming and agroforestry models.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Collaborative Program Implementation",
    description:
      "We partner with like-minded organizations to co-implement projects that scale impact and connect farmers to sustainable value chains.",
    icon: <FaHandshake />,
  },
];

export default function WhatWeDo() {
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 px-4 bg-[#f9fafb]">
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-green-700 mb-4">What We Do</h2>
        <p className="text-gray-700 text-lg">
          Farm Safari runs regenerative agriculture and agroforestry programs
          through scalable out-grower models.
        </p>
        <p className="text-gray-600 font-semibold mt-2">Our key areas include:</p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <WhatWeDoItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function WhatWeDoItem({
  item,
  index
}: {
  item: { title: string; description: string; icon: React.ReactNode };
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-xl border border-gray-200 shadow-md p-8 hover:shadow-lg transition"
    >
      <div className="flex items-center justify-center mb-4">
        <div className="bg-green-700 text-white p-4 rounded-full text-3xl">
          {item.icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-green-700 mb-3 text-center">
        {item.title}
      </h3>
      <p className="text-gray-600 text-sm text-center">{item.description}</p>
    </motion.div>
  );
}
