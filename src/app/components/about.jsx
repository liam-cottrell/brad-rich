
import { Check } from 'lucide-react';

const About = () => {
  const credentials = [
    "AAT Licenced Accountant",
    "AAT Licenced Bookkeeper",
    "10+ Years of Experience",
    "Xero Certified Advisor"
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-blue-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-(--primary)/10 rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-(--primary)/10 rounded-lg"></div>
            <img 
              src="/desk.webp" 
              alt="Accounting professionals" 
              className="rounded-xl shadow-lg relative w-full h-auto object-cover"
              loading="preload"
              width={800}
              height={533}
            />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-200 text-blue-700 font-medium text-sm mb-4">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted accountancy services in the UK since 2020
            </h2>
            <p className="text-gray-600 mb-8">
            We believe great accounting is about more than just numbers — it’s about people, businesses, and the ambitions behind them. Founded with a passion for helping businesses grow, we provide reliable, financial support so you can focus on what you do best.<br /><br />
            From start-ups to established companies, offering everything from bookkeeping and tax planning to compliance and strategic financial advice. We use cloud technology to give you real-time insights into your finances, ensuring you always feel in control.
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
