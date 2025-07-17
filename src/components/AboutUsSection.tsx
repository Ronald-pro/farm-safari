import Link from 'next/link';
import Image from 'next/image'; // ✅ Import Next.js Image component

type AboutUsSectionProps = {
  title: string;
  description: string;
  href: string;
  imgSrc: string;
  imgLeft?: boolean;
};

export default function AboutUsSection({
  title,
  description,
  href,
  imgSrc,
  imgLeft = false,
}: AboutUsSectionProps) {
  return (
    <section className="py-8 bg-white even:bg-gray-50">
      <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 ${imgLeft ? 'md:grid-flow-row-dense' : ''}`}>
        <div>
          <h2 className="text-3xl font-extrabold text-green-800 mb-4">{title}</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{description}</p>
          <Link href={href} className="inline-block text-green-700 font-medium border-b-2 border-green-700 hover:border-green-900 transition">
            Learn more →
          </Link>
        </div>
        <div>
          <Image
            src={imgSrc}
            alt={title}
            width={600} // Customize as needed
            height={400} // Customize as needed
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            unoptimized // Optional: if images are from external sources not in domains list
          />
        </div>
      </div>
    </section>
  );
}
