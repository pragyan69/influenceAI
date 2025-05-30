
import { Globe, CreditCard, MapPin, Image, Megaphone, Zap, FileText } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Business Website + SSL + Domain Setup",
      description: "Professional website with secure hosting and custom domain"
    },
    {
      icon: CreditCard,
      title: "Payment Gateway + Delivery Integration",
      description: "Seamless payment processing and delivery partner connections"
    },
    {
      icon: MapPin,
      title: "Google Business Profile Listing",
      description: "Optimize your local presence and search visibility"
    },
    {
      icon: Image,
      title: "10 Professional Ad Creatives",
      description: "High-converting visual assets designed by experts"
    },
    {
      icon: Megaphone,
      title: "3 Meta Ad Campaigns",
      description: "Facebook and Instagram campaigns optimized for ROI"
    },
    {
      icon: Zap,
      title: "One Automation Bot",
      description: "Choose from WhatsApp, Instagram DM, or Website bot"
    },
    {
      icon: FileText,
      title: "White-labeled Templates",
      description: "Professional product and service templates ready to use"
    }
  ];

  return (
    <section id="services" className="py-24 bg-dark-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete business automation solutions designed to accelerate your growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-violet-deep to-blue-electric rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
