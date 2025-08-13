import Image from 'next/image';
import { Check } from 'lucide-react';

const AboutFounder = () => {
  const features = [
    "ISO 9001:2015 & GMP-certified Company",
    "Offers 250+ herbal and personal care items",
    "Annual turnover ranges from ₹3.5 to ₹5 crore",
    "Focused quality control and R&D department",
    "100% Herbal & Natural Ingredients",
    "Pan-India Delivery"
  ];

  return (
    <section className="bg-[#798467] text-white">
      <div className="mx-auto max-w-[1200px] px-5 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div>
            <h2 className="font-accent text-white text-4xl md:text-5xl font-normal mb-8">
              About Founder
            </h2>
            <div className="font-secondary text-base leading-7 space-y-4 text-gray-200">
              <p>
                Founded in 2004 by Mr. Karan Mali, Vedankur Group is a trusted name in Ayurvedic wellness. Starting as Shree International Sales Corporation, the group launched its own premium brand <em className="italic font-normal text-white">Vedankur</em> in 2011—offering natural, effective products rooted in Ayurveda.
              </p>
              <p>
                From herbal soaps and shampoos to Ayurvedic medicines and teas, Vedankur blends purity, tradition, and innovation to deliver wellness in every home. With a growing nationwide presence, Vedankur continues its mission to make Ayurvedic living a part of daily life for millions.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-[#8bc34a] w-5 h-5 mr-3 flex-shrink-0 mt-1" strokeWidth={3} />
                  <span className="font-secondary text-base">{feature.replace(" ", " ")}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Founder Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ae1d8518-6a86-4d1e-9221-d8e6ab2bd428-vedankur-com/assets/images/IMG_9728.JPEG-scaled-23.jpg"
              alt="Mr. Karan Mali, Founder of Vedankur Group"
              width={500}
              height={600}
              className="w-full max-w-sm md:max-w-md lg:max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
