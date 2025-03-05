import { FileText, ClipboardList, User, Briefcase, Users, CreditCard, Laptop, BarChart, PieChart, Banknote, Building } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <FileText size={24} className="text-primary" />, 
      title: 'Bookkeeping',
      description: 'Efficient and reliable bookkeeping services tailored to your business needs, ensuring accurate financial records.'
    },
    {
      icon: <ClipboardList size={24} className="text-primary" />, 
      title: 'Accounts Preparation',
      description: 'Annual accounts prepared with accuracy and professionalism for sole traders, partnerships, and limited companies.'
    },
    {
      icon: <User size={24} className="text-primary" />, 
      title: 'Personal Tax',
      description: 'Simplifying personal tax by handling your tax returns and maximising allowances and reliefs.'
    },
    {
      icon: <Briefcase size={24} className="text-primary" />, 
      title: 'Corporation Tax',
      description: 'Preparation and submission of accurate corporation tax returns, ensuring compliance and minimising tax liability.'
    },
    {
      icon: <Users size={24} className="text-primary" />, 
      title: 'Payroll',
      description: 'Hassle-free payroll processing, including PAYE and National Insurance contributions, ensuring timely payments.'
    },
    {
      icon: <CreditCard size={24} className="text-primary" />, 
      title: 'VAT',
      description: 'Accurate VAT return preparation and submission across different VAT schemes.'
    },
    {
      icon: <Laptop size={24} className="text-primary" />, 
      title: 'Accountancy Software',
      description: 'Guidance on choosing, setting up, and optimising accountancy software for financial efficiency.'
    },
    {
      icon: <BarChart size={24} className="text-primary" />, 
      title: 'Budgeting and Forecasting',
      description: 'Tailored budgeting and forecasting services to help set financial goals and track performance.'
    },
    {
      icon: <PieChart size={24} className="text-primary" />, 
      title: 'Management Accounting',
      description: 'Regular financial reports and insights to enhance cash flow, profitability, and overall performance.'
    },
    {
      icon: <Banknote size={24} className="text-primary" />, 
      title: 'Capital Gains Tax',
      description: 'Expert guidance on Capital Gains Tax for property, investments, and assets, ensuring optimal tax reliefs.'
    },
    {
      icon: <Building size={24} className="text-primary" />, 
      title: 'Company Secretarial Services',
      description: 'Handling company formation, compliance, and filing confirmation statements with Companies House.'
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4 animate-fade-in-up">
            My Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Comprehensive accounting services for your business
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I offer a wide range of accounting and financial services to help businesses of all sizes achieve their financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover-lift animate-fade-in-up" 
              style={{ animationDelay: `${0.1 * index + 0.3}s` }}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
