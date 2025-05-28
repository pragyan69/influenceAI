
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for small businesses getting started",
      monthlyPrice: 297,
      annualPrice: 2970,
      savings: "2 months free",
      features: [
        "Instagram DM Bot",
        "WhatsApp Automation",
        "Basic AI Training",
        "1,000 Monthly Messages",
        "Email Support",
        "Basic Analytics"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      icon: Crown,
      description: "Most popular for growing businesses",
      monthlyPrice: 697,
      annualPrice: 6970,
      savings: "2 months free",
      features: [
        "Everything in Starter",
        "AI Voice Calling (100 calls/month)",
        "Advanced AI Training",
        "5,000 Monthly Messages",
        "Priority Support",
        "Advanced Analytics",
        "Calendar Integration",
        "Custom Workflows"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      icon: Rocket,
      description: "For large teams and agencies",
      monthlyPrice: 1497,
      annualPrice: 14970,
      savings: "2 months free",
      features: [
        "Everything in Professional",
        "Unlimited AI Voice Calls",
        "Unlimited Messages",
        "Custom AI Development",
        "Dedicated Account Manager",
        "White-label Options",
        "API Access",
        "24/7 Phone Support"
      ],
      cta: "Contact Sales",
      popular: false
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
            Choose the plan that fits your business. All plans include 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isAnnual ? 'bg-violet-deep' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const originalPrice = isAnnual ? plan.monthlyPrice * 12 : null;
            
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
                    <div className="bg-gradient-to-r from-violet-deep to-blue-electric px-4 py-2 rounded-full text-sm font-semibold text-white">
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
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${price}</span>
                    <span className="text-gray-400 ml-1">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                  {isAnnual && originalPrice && (
                    <div className="mt-2">
                      <span className="text-gray-500 line-through text-sm">
                        ${originalPrice}/year
                      </span>
                      <span className="text-green-400 text-sm ml-2">
                        {plan.savings}
                      </span>
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
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet-deep to-blue-electric hover:opacity-90'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  } transition-all duration-300`}
                  size="lg"
                >
                  {plan.cta}
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
              Let's build a tailored AI automation system for your specific needs.
            </p>
            <Button className="bg-gradient-to-r from-violet-deep to-blue-electric hover:opacity-90">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
