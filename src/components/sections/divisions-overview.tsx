import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const divisionsData = [
  {
    title: "Daily Need",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ae1d8518-6a86-4d1e-9221-d8e6ab2bd428-vedankur-com/assets/images/Design_2-2-19.jpg",
    description: "The Daily Need Division provides everyday essentials formulated using time-tested Ayurvedic principles. This division focuses on promoting natural self-care habits for the entire family.",
    features: ["Natural Ingredients", "Family Safe", "Daily Wellness"]
  },
  {
    title: "Cosmetic",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ae1d8518-6a86-4d1e-9221-d8e6ab2bd428-vedankur-com/assets/images/Neem-facewash-scaled-20.png",
    description: "The Cosmetic Division focuses on natural beauty enhancement without harsh chemicals. These products blend Ayurvedic herbs with modern skincare science to create effective, skin-friendly formulations.",
    features: ["Chemical-Free", "Herbal Skincare", "Beauty Enhancement"]
  },
  {
    title: "Medicine",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ae1d8518-6a86-4d1e-9221-d8e6ab2bd428-vedankur-com/assets/images/kesar-goti-fb-21.jpg",
    description: "MoniDay's Medicine Division is rooted in classical Ayurvedic healing. It focuses on preventive and curative care through herbal formulations that have no side effects and help in maintaining overall health.",
    features: ["Ayurvedic Healing", "No Side Effects", "Immunity Boosters"]
  },
];

interface DivisionCardProps {
  imageSrc: string;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const DivisionCard = ({ imageSrc, title, description, features, index }: DivisionCardProps) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-lg transition-all duration-500 transform hover:-translate-y-3">
    {/* Image container with gradient border */}
    <div className="relative p-1 bg-gradient-to-br from-primary-blue via-secondary-blue to-accent-blue rounded-2xl">
      <div className="relative overflow-hidden rounded-xl bg-white">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={imageSrc}
            alt={`${title} division products`}
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
    
    {/* Content */}
    <div className="p-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold font-primary text-primary-blue uppercase tracking-wide">
          {title}
        </h3>
        <Badge variant="secondary" className="bg-gradient-to-r from-green-accent to-secondary-blue text-white font-semibold">
          Division {index + 1}
        </Badge>
      </div>
      
      <p className="text-muted-foreground font-secondary text-base leading-relaxed mb-6">
        {description}
      </p>
      
      {/* Features */}
      <div className="flex flex-wrap gap-2">
        {features.map((feature, featureIndex) => (
          <Badge 
            key={featureIndex}
            variant="outline" 
            className="text-xs font-medium border-primary-blue/20 text-primary-blue hover:bg-primary-blue hover:text-white transition-colors duration-200"
          >
            {feature}
          </Badge>
        ))}
      </div>
    </div>
    
    {/* Decorative corner element */}
    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-red-text to-primary-blue rounded-full opacity-80"></div>
  </div>
);

const DivisionsOverview = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-blue via-secondary-blue to-primary-blue overflow-hidden">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="white"></path>
        </svg>
      </div>
      
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KPHN2Zz4=')] animate-pulse"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-white"></div>
            <div className="w-8 h-px bg-white mx-2"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-white"></div>
          </div>
          
          <h2 className="font-accent text-white text-2xl sm:text-3xl mb-4 opacity-90">
            Total Ayurveda
          </h2>
          <h1 className="font-primary text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider mb-6">
            <span className="text-red-text">Moni</span>
            <span className="text-white">Day</span> Divisions
          </h1>
          <p className="font-secondary text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of Ayurvedic solutions across three specialized divisions, 
            each designed to enhance your wellness journey naturally.
          </p>
        </div>
        
        {/* Divisions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {divisionsData.map((division, index) => (
            <DivisionCard
              key={index}
              {...division}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default DivisionsOverview;