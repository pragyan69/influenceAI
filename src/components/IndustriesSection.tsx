
import { useState } from 'react';
import { ShoppingBag, Dumbbell, GraduationCap, Home, Hotel, Users } from 'lucide-react';

const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      icon: ShoppingBag,
      name: "E-commerce",
      description: "Automate customer support, abandoned cart recovery, and product recommendations through intelligent DM sequences.",
      benefits: ["Order updates", "Product suggestions", "Cart recovery", "Customer support"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: GraduationCap,
      name: "Coaching",
      description: "Scale your coaching business with automated lead qualification, discovery calls, and client onboarding sequences.",
      benefits: ["Lead qualification", "Discovery calls", "Client onboarding", "Follow-up sequences"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Home,
      name: "Real Estate",
      description: "Generate qualified property leads, schedule viewings, and nurture prospects with personalized property recommendations.",
      benefits: ["Lead generation", "Viewing bookings", "Property matching", "Market updates"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Dumbbell,
      name: "Fitness & Gyms",
      description: "Automate membership inquiries, class bookings, and personal training consultations with intelligent bots.",
      benefits: ["Membership sales", "Class bookings", "PT consultations", "Retention campaigns"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Hotel,
      name: "Hotels",
      description: "Streamline reservations, guest services, and special offers through automated hospitality communications.",
      benefits: ["Reservation handling", "Guest services", "Special offers", "Feedback collection"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Users,
      name: "Professional Services",
      description: "Automate client intake, consultation booking, and service delivery updates for maximum efficiency.",
      benefits: ["Client intake", "Consultation booking", "Service updates", "Testimonial requests"],
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="industries" className="py-24 bg-dark-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industries We <span className="gradient-text">Transform</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From e-commerce to professional services, our AI automation adapts to your industry's unique needs.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Industry Cards */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isActive = activeIndustry === index;
              
              return (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                    isActive 
                      ? 'glass-card ring-2 ring-violet-deep' 
                      : 'bg-dark-secondary/30 border border-white/10 hover:bg-white/5'
                  }`}
                  onClick={() => setActiveIndustry(index)}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4 mx-auto`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-center font-semibold text-white">{industry.name}</h3>
                </div>
              );
            })}
          </div>

          {/* Active Industry Details */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-8 h-full">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${industries[activeIndustry].color} flex items-center justify-center mb-6`}>
                {(() => {
                  const Icon = industries[activeIndustry].icon;
                  return <Icon className="w-8 h-8 text-white" />;
                })()}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                {industries[activeIndustry].name}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {industries[activeIndustry].description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-white mb-3">Key Benefits:</h4>
                {industries[activeIndustry].benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-violet-deep rounded-full mr-3" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Don't See Your Industry?
            </h3>
            <p className="text-gray-300 mb-6">
              Our AI automation adapts to any business model. Let's discuss your specific needs.
            </p>
            <button className="bg-gradient-to-r from-violet-deep to-blue-electric px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity">
              Schedule a Custom Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
