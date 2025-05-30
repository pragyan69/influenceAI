
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Aakriti Jain",
      role: "Business Owner",
      location: "Delhi, India",
      flag: "🇮🇳",
      content: "Influence helped me automate 80% of my client onboarding through WhatsApp. It's genius.",
      rating: 5
    },
    {
      name: "Rahul Singh",
      role: "Fitness Center Owner",
      location: "Bangalore, India",
      flag: "🇮🇳",
      content: "Our fitness center in Bangalore doubled trials with their custom bot.",
      rating: 5
    },
    {
      name: "James Carter",
      role: "Agency Owner",
      location: "Austin, USA",
      flag: "🇺🇸",
      content: "I've worked with top agencies. Influence is lean, fast, and delivers what matters.",
      rating: 5
    },
    {
      name: "Vanessa Ortiz",
      role: "Sales Director",
      location: "NYC, USA",
      flag: "🇺🇸",
      content: "We closed 12 leads in our first 3 weeks using their AI lead qualification system.",
      rating: 5
    },
    {
      name: "Laura White",
      role: "Course Creator",
      location: "Manchester, UK",
      flag: "🇬🇧",
      content: "They built a bot for our online course funnel in less than 3 days. Results were instant.",
      rating: 5
    },
    {
      name: "Faisal Al Hadi",
      role: "Real Estate Developer",
      location: "Dubai, UAE",
      flag: "🇦🇪",
      content: "Our Dubai real estate bot has become a 24/7 agent. It handles all first-level queries now.",
      rating: 5
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
            Global <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by businesses worldwide to automate and scale their operations
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

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-deep to-blue-electric rounded-full flex items-center justify-center text-2xl">
                  {testimonials[currentTestimonial].flag}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-300">{testimonials[currentTestimonial].role}</div>
                  <div className="text-gray-400 text-sm">{testimonials[currentTestimonial].location}</div>
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

        {/* Secondary Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="glass-card rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-sm mb-4">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-violet-deep to-blue-electric rounded-full flex items-center justify-center">
                  <span className="text-sm">{testimonial.flag}</span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.location}</div>
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
