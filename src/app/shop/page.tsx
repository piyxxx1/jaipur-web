import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Droplets, 
  Palette, 
  Scissors, 
  Stethoscope, 
  ShowerHead, 
  SprayCan 
} from "lucide-react";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";

const categories = [
  {
    id: 1,
    name: "Skin Care",
    description: "Products and advice related to skin care",
    icon: Sparkles,
    productCount: 25,
    color: "bg-gradient-to-br from-pink-100 to-rose-100"
  },
  {
    id: 2,
    name: "Hair Care",
    description: "Products and advice related to hair care",
    icon: Droplets,
    productCount: 18,
    color: "bg-gradient-to-br from-blue-100 to-indigo-100"
  },
  {
    id: 3,
    name: "Makeup",
    description: "Makeup products and tutorials",
    icon: Palette,
    productCount: 32,
    color: "bg-gradient-to-br from-purple-100 to-violet-100"
  },
  {
    id: 4,
    name: "Nail Care",
    description: "Products and advice related to nail care",
    icon: Scissors,
    productCount: 15,
    color: "bg-gradient-to-br from-red-100 to-pink-100"
  },
  {
    id: 5,
    name: "Oral Care",
    description: "Products for oral health, such as toothbrushes, toothpaste, and mouthwash",
    icon: Stethoscope,
    productCount: 12,
    color: "bg-gradient-to-br from-green-100 to-emerald-100"
  },
  {
    id: 6,
    name: "Body Care",
    description: "Products for body health and hygiene, such as soaps, body washes, and lotions",
    icon: ShowerHead,
    productCount: 28,
    color: "bg-gradient-to-br from-yellow-100 to-orange-100"
  },
  {
    id: 7,
    name: "Fragrances",
    description: "Perfumes, deodorants, and other fragrant products",
    icon: SprayCan,
    productCount: 22,
    color: "bg-gradient-to-br from-cyan-100 to-teal-100"
  }
];

export default function ShopPage() {
  return (
    <>
      <HeaderNavigation />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Product Categories</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of Ayurvedic wellness products, carefully crafted to bring you natural, effective healthcare solutions.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className={`${category.color} rounded-t-lg`}>
                    <div className="flex items-center justify-between">
                      <IconComponent className="h-8 w-8 text-gray-700" />
                      <Badge variant="secondary" className="bg-white/80 text-gray-700">
                        {category.productCount} products
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {category.description}
                    </CardDescription>
                    <div className="mt-4">
                      <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                        Explore {category.name} →
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-gray-600 mb-6">
                Contact our customer support team for personalized recommendations and assistance.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
