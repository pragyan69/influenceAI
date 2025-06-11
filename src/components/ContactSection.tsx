import { Button } from '@/components/ui/button';
import { Calendar, Phone, Mail } from 'lucide-react';
const ContactSection = () => {
  const contactMethods = [{
    iconType: 'lucide',
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    action: "7637855557",
    link: "tel:7637855557",
    color: "from-green-500 to-emerald-600"
  }, {
    iconType: 'lucide',
    icon: Mail,
    title: "Email Us",
    description: "Get detailed information",
    action: "Send Email",
    link: "mailto:influenceoffcl@gmail.com?subject=Need%20help%20In%20Scaling%20my%20business&body=I%20would%20greatly%20appreciate%20your%20assistance%20in%20growing%20my%20business.%20Your%20expertise%20and%20support%20could%20make%20a%20significant%20difference%20on%20this%20exciting%20journey.%20Let%27s%20work%20together%20to%20achieve%20new%20heights!",
    color: "from-blue-500 to-cyan-600"
  }, {
    iconType: 'lucide',
    icon: Calendar,
    title: "Book Strategy Call",
    description: "Free 15-minute consultation",
    action: "Schedule Now",
    link: "https://calendly.com/officialinfluence/strategic-growth-session",
    color: "from-violet-500 to-purple-600"
  }, {
    iconType: 'image',
    iconSrc: '/lovable-uploads/0e01db83-dbd7-4b7b-89c1-78f86d43b470.png',
    title: "WhatsApp",
    description: "Quick chat on WhatsApp",
    action: "Start Chat",
    link: "https://api.whatsapp.com/send?phone=917637855557&text=Hello!%20%F0%9F%8C%9F%20I%27m%20passionate%20about%20growing%20my%20business%20and%20exploring%20exciting%20new%20opportunities.%20Let%27s%20embark%20on%20this%20journey%20together%20and%20make%20something%20amazing%20happen!",
    color: "from-green-500 to-teal-600"
  }];
  return <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-dark-secondary/50 to-dark-primary/80 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-blue-500/5"></div>
      <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Let's discuss how AI automation can transform your business and accelerate your growth
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {contactMethods.map((method, index) => {
          const isExternal = method.link.startsWith('http');
          return <div key={index} className="glass-card rounded-3xl p-6 sm:p-8 text-center hover:transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-violet-500/20 border border-white/10 hover:border-violet-500/30">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${method.color} rounded-3xl flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-lg hover:shadow-xl transition-all duration-300`}>
                  {method.iconType === 'image' ? <img src={method.iconSrc} alt={method.title} className="w-8 h-8 sm:w-10 sm:h-10" /> : <method.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{method.title}</h3>
                <p className="text-gray-300 text-sm mb-4 sm:mb-6 leading-relaxed">{method.description}</p>
                <Button asChild variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105">
                  <a href={method.link} {...isExternal && {
                target: "_blank",
                rel: "noopener noreferrer"
              }}>
                    {method.action}
                  </a>
                </Button>
              </div>;
        })}
        </div>

        {/* Main CTA */}
        <div className="text-center px-4">
          <div className="glass-card rounded-3xl p-8 sm:p-16 max-w-4xl mx-auto shadow-2xl border border-white/10 hover:border-violet-500/30 transition-all duration-500">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white">
              Transform Your Business Today
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">Join hundreds of businesses that have automated their operations and achieved 10x growth with our AI solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-violet-deep to-blue-electric hover:from-violet-600 hover:to-blue-600 transition-all duration-300 text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 shadow-xl hover:shadow-2xl hover:scale-105">
                <a href="https://calendly.com/officialinfluence/strategic-growth-session" target="_blank" rel="noopener noreferrer">
                  Book Free Strategy Call
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 transition-all duration-300 hover:scale-105">
                <a href="https://api.whatsapp.com/send?phone=917637855557&text=Hello!%20%F0%9F%8C%9F%20I%27m%20passionate%20about%20growing%20my%20business%20and%20exploring%20exciting%20new%20opportunities.%20Let%27s%20embark%20on%20this%20journey%20together%20and%20make%20something%20amazing%20happen!" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;