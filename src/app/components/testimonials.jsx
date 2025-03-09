"use client";

import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "As a startup sole trader I needed an accountant who would help me through the minefield of starting a business. Brad took the time to answer all questions I had and explain anything I wasn't sure about. Absolute top bloke and really good at what he does. Would recommend 100%",
      author: "Websters Workshop",
      position: "CEO",
      rating: 5,
    },
    {
      id: 2,
      content: "After troubles with an inefficient accountant Bradley was recommended to me. After a chat I decided to bring him on to take care of one of my companies, I very quickly realised he was the accountant I needed and he now takes care of four of my companies. Highly recommend his services.",
      author: "Owen White",
      position: "Owner, Not. So. White.",
      rating: 5,
    },
    {
      id: 3,
      content: "Bradley has been dealing with my tax/VAT returns and bookkeeping for around a year now. He is really easy to communicate with and is always available for any queries I may have. His knowledge is second to none and his first class approach has made me more than comfortable to recommend him to friends and colleagues.",
      author: "Estelle Chambers",
      position: "",
      rating: 5,
    },
    {
      id: 4,
      content: "Bradley has been my accountant for two years he has went above and beyond during those years very professional and extremely timely would recommend him to anyone in need of a good trustworthy accountant.",
      author: "Joey Williamson",
      position: "",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4 animate-fade-in-up">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            What our clients say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Don't just take our word for it. Here's what businesses across the UK have to say about our accounting services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex justify-center mb-6">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="h-80 md:h-32 flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`transition-opacity duration-500 absolute w-full ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <blockquote className="text-center">
                    <p className="text-lg md:text-xl text-gray-700 italic mb-6 px-12">"{testimonial.content}"</p>
                    <cite className="not-italic">
                      <div className="font-medium text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500 mt-1">{testimonial.position}</div>
                    </cite>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${index === activeIndex ? 'bg-(--primary)' : 'bg-gray-300'}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
