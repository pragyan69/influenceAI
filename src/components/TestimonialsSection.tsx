
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Store Owner",
      company: "Style Haven",
      content: "INFLUENCE transformed our customer service. Our Instagram DM bot handles 90% of inquiries automatically, and our conversion rate increased by 180%.",
      rating: 5,
      image: "/api/placeholder/80/80",
      results: "180% conversion increase"
    },
    {
      name: "Mike Rodriguez",
      role: "Fitness Coach",
      company: "FitLife Coaching",
      content: "The AI voice calling feature is incredible. It books discovery calls while I sleep, and I wake up to a calendar full of qualified prospects.",
      rating: 5,
      image: "/api/placeholder/80/80",
      results: "300% more qualified leads"
    },
    {
      name: "Emma Thompson",
      role: "Real Estate Agent",
      company: "Prime Properties",
      content: "I was skeptical about AI, but this system generates 50+ qualified leads weekly. The WhatsApp bot pre-qualifies buyers perfectly.",
      rating: 5,
      image: "/api/placeholder/80/80",
      results: "50+ weekly qualified leads"
    },
    {
      name: "David Chen",
      role: "Hotel Manager",
      company: "Luxury Resort Group",
      content: "Guest inquiries are handled instantly, bookings increased 40%, and our team can focus on in-person guest experiences.",
      rating: 5,
      image: "/api/placeholder/80/80",
      results: "40% booking increase"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-deep/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-electric/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real businesses. See how INFLUENCE is transforming operations across industries.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-medium">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Results Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-deep/20 to-blue-electric/20 rounded-full border border-violet-deep/30 mb-6">
                <span className="text-sm font-semibold gradient-text">
                  {testimonials[currentTestimonial].results}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-deep to-blue-electric rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-300">{testimonials[currentTestimonial].role}</div>
                  <div className="text-gray-400 text-sm">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-violet-deep' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Secondary Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="glass-card rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-violet-deep to-blue-electric rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
