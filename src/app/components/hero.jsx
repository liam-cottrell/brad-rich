
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-44 md:pb-24 bg-gradient-to-b from-blue-50 to-transparent">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Chartered Accountant in Northumberland
            </div>
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-gray-900 mb-4">
              Financial clarity <br className="hidden sm:block" />
              <span className="text-primary">for your business</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              I provide tailored accounting solutions for businesses across the UK, helping you focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="flex items-center justify-center sm:justify-start px-6 py-3 rounded-md bg-(--primary) text-white font-medium transition-all hover-lift"
              >
                Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#services" 
                className="flex items-center justify-center sm:justify-start px-6 py-3 rounded-md bg-white border border-gray-200 text-gray-700 font-medium transition-all hover:bg-gray-50 hover-lift"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-2xl rotate-3 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Professional accounting services" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover relative z-10"
                loading="lazy"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur p-4 rounded-lg shadow-md z-20 max-w-xs animate-fade-in" style={{ animationDelay: '1s' }}>
                <p className="text-sm font-medium text-gray-800">Trusted by 20+ UK businesses</p>
                <div className="flex items-center mt-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                    ))}
                  </div>
                  <div className="ml-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;