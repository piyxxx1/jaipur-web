import React from 'react';

const TotalAyurveda = () => {
  return (
    <section className="bg-gradient-to-br from-light-gray to-white py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-red-text rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-green-accent rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Decorative top line */}
          <div className="flex items-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary-blue"></div>
            <div className="w-8 h-px bg-primary-blue mx-2"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary-blue"></div>
          </div>
          
          {/* Main heading */}
          <h2 className="font-accent text-red-text text-4xl sm:text-5xl lg:text-6xl font-normal tracking-wider leading-none mb-6 relative">
            Total Ayurveda
            {/* Decorative underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-text to-primary-blue rounded-full"></div>
          </h2>
          
          {/* Subtitle */}
          <p className="font-secondary text-muted-foreground text-lg sm:text-xl max-w-2xl leading-relaxed">
            Experience the complete wellness journey with our authentic Ayurvedic solutions, 
            crafted from nature&apos;s finest ingredients for your holistic health.
          </p>
          
          {/* Decorative bottom line */}
          <div className="flex items-center mt-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-accent"></div>
            <div className="w-6 h-px bg-green-accent mx-2"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalAyurveda;