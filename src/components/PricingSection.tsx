
import { Button } from '@/components/ui/button';
import { Check, Gift, Crown } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Free Plan",
      icon: Gift,
      description: "Perfect for getting started",
      price: "₹0",
      period: "2 Weeks",
      features: [
        "Professional Logo Design",
        "Business Card Template",
        "Free Growth Strategy Session",
        "Basic Consultation"
      ],
      cta: "Get Started Free",
      popular: false,
      ctaLink: "https://calendly.com/officialinfluence/strategic-growth-session"
    },
    {
      name: "Pro Plan",
      icon: Crown,
      description: "Most popular for growing businesses",
      price: "₹10,999",
      period: "Year",
      originalPrice: "₹15,999",
      features: [
        "Everything in Free Plan",
        "Complete Website + SSL + Domain",
        "Payment Gateway Integration",
        "Google Business Profile Setup",
        "10 Professional Ad Creatives",
        "3 Meta Ad Campaigns",
        "One Custom Automation Bot",
        "White-labeled Templates",
        "Priority Support",
        "24/7 Technical Assistance"
      ],
      cta: "Start Pro Plan",
      popular: true,
      ctaLink: "https://calendly.com/officialinfluence/strategic-growth-session"
    }
  ];

  return (
    <section className="py-24 bg-dark-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the plan that accelerates your business growth
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            
            return (
              <div
                key={index}
                className={`relative rounded-3xl p-8 ${
                  plan.popular
                    ? 'glass-card ring-2 ring-violet-deep transform scale-105'
                    : 'bg-dark-secondary/50 border border-white/10'
                } hover:transform hover:scale-105 transition-all duration-300`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-violet-deep to-blue-electric px-6 py-2 rounded-full text-sm font-semibold text-white">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${
                    plan.popular ? 'from-violet-deep to-blue-electric' : 'from-gray-600 to-gray-700'
                  } flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="text-gray-500 line-through text-sm">
                      Originally {plan.originalPrice}/year
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet-deep to-blue-electric hover:opacity-90'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  } transition-all duration-300`}
                  size="lg"
                >
                  <a 
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.cta}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's build a tailored AI automation system for your specific business needs.
            </p>
            <Button 
              asChild
              className="bg-gradient-to-r from-violet-deep to-blue-electric hover:opacity-90"
            >
              <a 
                href="https://calendly.com/officialinfluence/strategic-growth-session"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Custom Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
