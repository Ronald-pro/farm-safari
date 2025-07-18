
import Image from 'next/image';
// ✅ Import Next.js Image component

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
  imgSrc,
  imgLeft = false,
}: AboutUsSectionProps) {
  return (
    <section className="py-6 bg-white even:bg-gray-50">
      <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 ${imgLeft ? 'md:grid-flow-row-dense' : ''}`}>
        <div>
          <h2 className="text-2xl font-extrabold text-green-800 mb-4">{title}</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{description}</p>
        </div>
        <div>
          <Image
            src={imgSrc}
            alt={title}
            width={200} // Customize as needed
            height={200} // Customize as needed
            className="w-full h-40 object-cover rounded-lg shadow-lg"
            unoptimized // Optional: if images are from external sources not in domains list
          />
        </div>
      </div>
    </section>

  );
}
