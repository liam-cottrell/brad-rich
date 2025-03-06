
import { Check } from 'lucide-react';

const About = () => {
  const credentials = [
    "AAT Chartered Accountant",
    "Certified by the AAT",
    "Registered with the Financial Conduct Authority (FCA)",
    "5 years of combined experience",
    "Expertise in UK tax legislation",
    "Specialized in SME accounting",
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-blue-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-(--primary)/10 rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-(--primary)/10 rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Accounting professionals" 
              className="rounded-xl shadow-lg relative z-10 w-full h-auto object-cover"
              loading="preload"
            />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-200 text-blue-700 font-medium text-sm mb-4">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted accountancy services in the UK since 2020
            </h2>
            <p className="text-gray-600 mb-6">
             Bradley Richardson is a leading chartered account based in the north east.
            </p>
            <p className="text-gray-600 mb-8">
              I pride myself on my client-focused approach, combining traditional accounting expertise with modern technology to deliver efficient and effective financial services.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <Check size={12} className="text-green-600" />
                  </div>
                  <p className="ml-3 text-gray-700">{credential}</p>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-(--primary) text-white font-medium rounded-md hover:bg-(--primary)/90 transition-colors shadow-sm hover-lift"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
