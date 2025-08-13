"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const carouselImages = [
  "/slider-assest/1-main.jpg",
  "/slider-assest/2-skin care.jpg",
  "/slider-assest/3-natural-fragrances.jpg",
  "/slider-assest/4-body care.jpg",
  "/slider-assest/5-makeup.jpg",
  "/slider-assest/6-Hair-care.png",
];

export default function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Autoplay plugin with configurable timing (5 seconds)
  const plugin = React.useRef(
    Autoplay({ 
      delay: 5000, 
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      stopOnFocusIn: true
    })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="w-full relative bg-gradient-to-r from-primary-blue to-secondary-blue" aria-label="Hero Image Carousel">
             <Carousel
         setApi={setApi}
         plugins={[plugin.current]}
         opts={{
           loop: true,
           align: "start",
         }}
         onMouseEnter={plugin.current.stop}
         onMouseLeave={plugin.current.reset}
         className="w-full"
       >
        <CarouselContent className="-ml-0">
          {carouselImages.map((src, index) => (
            <CarouselItem key={index} className="pl-0">
                                                           <div className="relative w-full h-[40vh] sm:h-[70vh] md:h-[75vh] lg:h-[85vh] max-h-[1000px] overflow-hidden">
                                 <Image
                   src={src}
                   alt={`MoniDay Healthcare promotional banner ${index + 1} - Premium Ayurvedic products`}
                   fill
                   priority={index === 0}
                   quality={95}
                   className="object-cover transition-transform duration-700 ease-out"
                   sizes="100vw"
                 />
                
                
                
                {/* Content overlay for first slide */}
                {index === 0 && (
                  <div className="absolute inset-0 flex items-center justify-start">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                                                    <div className="max-w-xl text-white border-2 border-white/30 px-3 sm:px-6 py-2 sm:py-4 rounded-lg backdrop-blur-sm bg-black/20 shadow-2xl">
                                                                                                                                                                                                            <h1 className="font-primary text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 leading-tight">
                              <span className="text-white">Welcome to</span>{" "}
                              <span className="text-red-text bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Moni</span>
                              <span className="text-red-text bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Day</span>{" "}
                              <span className="text-white">Healthcare</span>
                            </h1>
                                                   <p className="font-secondary text-xs sm:text-sm md:text-base mb-3 sm:mb-4 text-white/90 leading-relaxed">
                             Experience the power of authentic Ayurvedic wellness with our premium range of natural healthcare products.
                           </p>
                           <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                                         <Button 
                               asChild
                               size="default"
                               className="bg-red-text hover:bg-red-text/90 text-white font-semibold px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                             >
                               <Link href="/shop">
                                 Shop Now
                               </Link>
                             </Button>
                                                                                                                                                                                                                                <Button 
                                  asChild
                                  variant="outline"
                                  size="default"
                                  className="border-white text-blue-800 hover:bg-white hover:text-primary-blue font-semibold px-4 sm:px-6 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-sm sm:text-base"
                                >
                                  <Link href="/about">
                                    Learn More
                                  </Link>
                                </Button>
                          </div>
                        </div>
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
                 </CarouselContent>
       </Carousel>

      {/* Enhanced dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center justify-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1" role="tablist">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-all duration-300 hover:scale-125",
                current === index + 1 
                  ? "w-6 bg-white shadow-lg" 
                  : "bg-white/60 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
              role="tab"
              aria-selected={current === index + 1}
            />
          ))}
        </div>
      </div>
      
      {/* Slide counter */}
      <div className="absolute top-3 right-3 z-10 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs font-medium">
        {current} / {count}
      </div>
    </section>
  );
}