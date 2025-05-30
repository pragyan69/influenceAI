
import { Button } from '@/components/ui/button';
import { Phone, Mail, Calendar, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      action: "7637855557",
      link: "tel:7637855557",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Get detailed information",
      action: "Send Email",
      link: "mailto:influenceoffcl@gmail.com?subject=Need%20help%20In%20Scaling%20my%20business&body=I%20would%20greatly%20appreciate%20your%20assistance%20in%20growing%20my%20business.%20Your%20expertise%20and%20support%20could%20make%20a%20significant%20difference%20on%20this%20exciting%20journey.%20Let%27s%20work%20together%20to%20achieve%20new%20heights!",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Calendar,
      title: "Book Strategy Call",
      description: "Free 30-minute consultation",
      action: "Schedule Now",
      link: "https://calendly.com/officialinfluence/strategic-growth-session",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Quick chat on WhatsApp",
      action: "Start Chat",
      link: "https://api.whatsapp.com/send?phone=917637855557&text=Hello!%20%F0%9F%8C%9F%20I%27m%20passionate%20about%20growing%20my%20business%20and%20exploring%20exciting%20new%20opportunities.%20Let%27s%20embark%20on%20this%20journey%20together%20and%20make%20something%20amazing%20happen!",
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-dark-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how AI automation can transform your business
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const isExternal = method.link.startsWith('http');
            
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <a 
                    href={method.link}
                    {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {method.action}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="glass-card rounded-3xl p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Transform Your Business Today
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of businesses that have automated their operations and 3x their growth with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-violet-deep to-blue-electric hover:opacity-90 transition-all duration-300 text-lg px-8 py-6"
              >
                <a 
                  href="https://calendly.com/officialinfluence/strategic-growth-session"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Free Strategy Call
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <a 
                  href="https://api.whatsapp.com/send?phone=917637855557&text=Hello!%20%F0%9F%8C%9F%20I%27m%20passionate%20about%20growing%20my%20business%20and%20exploring%20exciting%20new%20opportunities.%20Let%27s%20embark%20on%20this%20journey%20together%20and%20make%20something%20amazing%20happen!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
