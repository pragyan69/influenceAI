
import { MessageCircle, Settings, Phone, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Settings,
      title: "1. Connect & Configure",
      description: "Link your Instagram, WhatsApp, and phone systems. Set up your AI with custom scripts and workflows.",
      features: ["No-code setup", "Custom AI training", "Multi-platform sync"]
    },
    {
      icon: MessageCircle,
      title: "2. AI Handles Outreach",
      description: "Your bots automatically send personalized DMs, respond to inquiries, and qualify leads 24/7.",
      features: ["Smart responses", "Lead qualification", "Auto follow-ups"]
    },
    {
      icon: Phone,
      title: "3. Voice Calls & Booking",
      description: "AI voice agents make calls, book appointments, and transfer hot leads directly to your calendar.",
      features: ["Natural conversations", "Calendar integration", "Call recording"]
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="gradient-text">INFLUENCE</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From setup to sales in three simple steps. Watch your lead generation run on autopilot.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center">
              <div className="w-1/3 h-0.5 bg-gradient-to-r from-violet-deep to-blue-electric" />
              <div className="w-1/3 h-0.5 bg-gradient-to-r from-blue-electric to-violet-deep" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  <div className="glass-card rounded-2xl p-8 h-full hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-2">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-violet-deep to-blue-electric rounded-2xl flex items-center justify-center mx-auto group-hover:animate-glow">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                      
                      {/* Features */}
                      <ul className="space-y-2">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center justify-center text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-blue-electric rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow for mobile */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-8">
                        <ArrowRight className="w-6 h-6 text-violet-deep transform rotate-90" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500%", label: "Increase in Lead Response" },
            { value: "24/7", label: "Automated Operations" },
            { value: "85%", label: "Conversion Rate Boost" },
            { value: "0", label: "Manual DM Replies Needed" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
