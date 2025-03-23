import { FileText, ClipboardList, User, Briefcase, Users, CreditCard, Laptop, BarChart, PieChart, Banknote, Building } from 'lucide-react';
import { useState } from 'react';
import Modal from 'react-modal';


const Services = () => {
  const services = [
    {
      icon: <FileText size={24} className="text-primary" />, 
      title: 'Book keeping',
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

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
      setSelectedService(service);
      console.log('modalIsOpen', modalIsOpen);
      setModalIsOpen(true);
    };

    const closeModal = () => {
      setModalIsOpen(false);
      setSelectedService(null);
    };

    return (
      <section id="services" className="py-16 md:py-24 bg-white relative">
      <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-16">
      <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4 animate-fade-in-up">
        My Services
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        Comprehensive accounting services for your business
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Offering a wide range of accounting and financial services to help businesses of all sizes achieve their financial goals.
      </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
      {services.map((service, index) => (
        <div 
        key={service.title} 
        className="flex items-center flex-col justify-center bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover-lift animate-fade-in-up cursor-pointer" 
        style={{ animationDelay: `${0.1 * index + 0.3}s` }}
        onClick={() => openModal(service)}
        >
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
        {service.icon}
        </div>
        <h3 className="text-center text-sm md:text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-600 hidden md:block">{service.description}</p>
        </div>
      ))}
      </div>
      </div>

      <Modal
      isOpen={modalIsOpen && window.innerWidth < 768}
      onRequestClose={closeModal}
      contentLabel="Service Description"
      className="modal fixed inset-0 flex items-center justify-center bg-white p-8 rounded-lg shadow-lg"
      overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50"
      ariaHideApp={false}
      >
      {selectedService && (
      <div>
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
        {selectedService.icon}
        </div>
        <h2 className="text-2xl font-bold mb-4">{selectedService.title}</h2>
        <p className="text-gray-600">{selectedService.description}</p>
        <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Close
        </button>
      </div>
      )}
      </Modal>
      </section>
    );
};

export default Services;
