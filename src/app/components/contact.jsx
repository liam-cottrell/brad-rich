import { useState } from "react";
import { Mail, Phone } from 'lucide-react';
import Snackbar from '@mui/material/Snackbar';

export default function Contact() {
  const questions = [
    {
      name: "businessStructure",
      label: "What is the structure of your business?",
      type: "radio",
      options: ["Sole Trader", "Limited Company (Ltd)", "Partnership", "Other"]
    },
    {
      name: "industry",
      label: "What industry does your business operate in?",
      type: "text",
      placeholder: "e.g., Retail, Construction"
    },
    {
      name: "turnover",
      label: "What is your estimated annual turnover?",
      type: "radio",
      options: ["Under £20,000", "£20,000 - £50,000", "£50,000 - £100,000", "£100,000 - £250,000", "Over £250,000"]
    },
    {
      name: "employees",
      label: "How many people work in your business?",
      type: "radio",
      options: ["Just me", "2-5 employees", "6-10 employees", "11-20 employees", "Over 20 employees"]
    },
    {
      name: "bestTimeToCall",
      label: "When is the best time for us to call you?",
      type: "radio",
      options: ["Morning (9 am - 12 pm)", "Afternoon (12 pm - 5 pm)", "Evening (5 pm - 8 pm)", "Anytime"]
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Your Name"
    },
    {
      name: "phone",
      label: "Phone",
      type: "tel",
      placeholder: "Your Phone"
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Your Email"
    }
  ];

  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    e.stopPropagation();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email) {
      console.log("Form Submitted", formData);
      fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      setSnackbarOpen(true);
    } else {
      return
    }
  };

  return (
    <>
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
                  Contact Me
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Let's discuss your financial needs
                </h2>
                <p className="text-gray-600 mb-8 max-w-lg">
                  Ready to talk about how we can help your business? Fill out the form, and one of our experts will get back to you shortly.
                </p>
                
                <div className="space-y-6">
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="text-(--primary)" size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium mb-1">Email Me</h3>
                      <a href="mailto:info@westonandco.uk" className="text-gray-600 hover:text-(--primary)">bradley@braccountancyservices.co.uk</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="text-(--primary)" size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium mb-1">Call Me</h3>
                      <a href="tel:+442071234567" className="text-gray-600 hover:text-(--primary)">+44 7555 392060</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 animate-fade-in-up flex justify-between flex-col" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5 h-full flex justify-between flex-col min-h-[25rem]">
                  <div className="h-full">
                    <label className="block text-lg font-medium text-gray-700 mb-12">{questions[step].label}</label>
                    {questions[step].type === "radio" && questions[step].options.map((option) => (
                      <label key={option} className="block mb-2">
                        <input type="radio" name={questions[step].name} value={option} onChange={handleChange} className="mr-2" /> {option}
                      </label>
                    ))}
                    {questions[step].type === "text" && (
                      <input type="text" name={questions[step].name} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none" placeholder={questions[step].placeholder} />
                    )}
                    {questions[step].type === "tel" && (
                      <input type="tel" name={questions[step].name} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none" placeholder={questions[step].placeholder} />
                    )}
                    {questions[step].type === "email" && (
                      <input type="email" name={questions[step].name} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none" placeholder={questions[step].placeholder} />
                    )}
                  </div>
                  <div className="flex justify-between">
                    {step > 0 && <button type="button" onClick={prevStep} className="px-6 py-3 bg-gray-400 text-white rounded-md hover:bg-gray-500">Previous</button>}
                    {step < questions.length - 1 ? (
                      <button type="button" onClick={nextStep} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Next</button>
                    ) : (
                      <button type="submit" className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">Submit</button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message="Email has been sent!"
      />
    </>
  );
}
