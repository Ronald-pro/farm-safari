import Link from "next/link";
import Image from "next/image";

type Item = {
  title: string;
  description: string;
  href: string;
  imgSrc: string;
};

export default function HowWeWork({ items }: { items: Item[] }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold text-green-800 mb-2">How we work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We partner with communities to deliver humanitarian aid, long-term development, and impactful advocacy.
        </p>
      </div>

      <div className="grid gap-8 px-4 md:grid-cols-3 max-w-7xl mx-auto">
        {items.map((item) => (
          <div key={item.title} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={item.imgSrc}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <Link href={item.href} className="text-green-700 font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
