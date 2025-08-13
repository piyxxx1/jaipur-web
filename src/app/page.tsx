import HeaderNavigation from "@/components/sections/header-navigation";
import HeroCarousel from "@/components/sections/hero-carousel";
import BusinessStats from "@/components/sections/business-stats";
import FeaturedProducts from "@/components/sections/featured-products";
import TotalAyurveda from "@/components/sections/total-ayurveda";
import DivisionsOverview from "@/components/sections/divisions-overview";
import AboutFounder from "@/components/sections/about-founder";
import ContactLocationSection from "@/components/sections/contact-location";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <HeaderNavigation />
      <HeroCarousel />
      <BusinessStats />
      <FeaturedProducts />
      <TotalAyurveda />
      <DivisionsOverview />
      <AboutFounder />
      <ContactLocationSection />
      <Footer />
    </main>
  );
}