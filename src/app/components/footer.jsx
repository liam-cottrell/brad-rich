
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'Personal Tax', href: '#services' },
    { name: 'Bookkeeping', href: '#services' },
    { name: 'Accounts Preperation', href: '#services' },
    { name: 'Corperation Tax', href: '#services' },
    { name: 'VAT Services', href: '#services' },
    { name: 'Payroll', href: '#services' },
  ];
  
  const company = [
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];
  
  const legal = [
    { name: 'Privacy Policy', href: '/policy' },
    { name: 'Terms of Service', href: '/policy' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="text-xl font-display font-bold text-white mb-4">BR Accountancy Services Limited</div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Professional accountant providing expert financial services to businesses across the UK.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/bradley-richardson-maat-6b27691ba/" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-(--primary) transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/bradrichardsxn/" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-(--primary) transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} BR Accountancy Services Limited. All rights reserved. <br />
            10 Belsay Grove, Bedlington NE22 5YU
          </p>
          <div className="text-gray-500 text-sm">
            Registered in England & Wales No. 14862976
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
