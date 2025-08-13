import Image from "next/image";
import { Check } from "lucide-react";

const features = [
  "ISO 9001:2015 & GMP-certified Company",
  "Offers 250+ herbal and personal care items",
  "Annual turnover ranges from ₹3.5 to ₹5 crore",
  "Focused quality control and R&D department",
  "100% Herbal & Natural Ingredients",
  "Pan-India Delivery",
];

const founderImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ae1d8518-6a86-4d1e-9221-d8e6ab2bd428-vedankur-com/assets/images/IMG_9728.JPEG-scaled-23.jpg?";
const networkGraphic = "https://vedankur.com/wp-content/uploads/2025/06/Green-Vector-Smart-Object.png";
const silhouetteGraphic = "https://vedankur.com/wp-content/uploads/2025/06/Background-Vector-Smart-Object.png";

const CompanyFeatures = () => {
  return (
    <section
      className="relative bg-[#F3F6F0]"
      style={{
        backgroundImage: `url(${networkGraphic})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-5 lg:gap-16 gap-12 items-center">
          <div className="lg:col-span-3">
            <h2 className="font-primary text-primary-blue text-h3 lg:text-h2 font-bold mb-4">
              About Founder
            </h2>
            <p className="font-secondary text-dark-gray mb-6 text-base leading-relaxed">
              Founded in 2004 by Mr. Karan Mali, Vedankur Group is a trusted name in Ayurvedic wellness. Starting as Shree International Sales Corporation, the group launched its own premium brand <em className="font-semibold text-red-text not-italic">Vedankur</em> in 2011—offering natural, effective products rooted in Ayurveda.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-green-accent w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="font-secondary text-dark-gray">{feature.replace("₹5 crore", "₹5 crore")}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="bg-white p-2 rounded-xl shadow-2xl max-w-sm w-full">
              <Image
                src={founderImage}
                alt="Founder of Vedankur"
                width={380}
                height={450}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-1px] left-0 w-full h-[75px] z-10">
        <Image
          src={silhouetteGraphic}
          alt="Village silhouette decoration"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          unoptimized
        />
      </div>
    </section>
  );
};

export default CompanyFeatures;
