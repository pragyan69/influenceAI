
import { MessageSquare, Instagram, Send, Globe, Hotel, Home, Dumbbell, Phone, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AIAutomationSection = () => {
  const bots = [
    {
      icon: MessageSquare,
      title: "WhatsApp AI Agent",
      description: "24/7 customer support and lead qualification",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Instagram,
      title: "Instagram DM Bot",
      description: "Automated engagement and lead generation",
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: Send,
      title: "Telegram Bot",
      description: "Streamlined communication and automation",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Globe,
      title: "Website Chatbot",
      description: "Intelligent visitor engagement and conversion",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: Hotel,
      title: "Hotel Booking Bot",
      description: "Automated reservations and guest services",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Home,
      title: "Real Estate Lead Bot",
      description: "Property inquiries and lead qualification",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: Dumbbell,
      title: "Gym Scheduling Bot",
      description: "Class bookings and membership management",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Phone,
      title: "AI Voice Calling Agent",
      description: "Automated outbound calls and appointments",
      color: "from-teal-500 to-green-600"
    },
    {
      icon: Users,
      title: "Customer Service Bot",
      description: "Intelligent support and query resolution",
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Robot Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div 
          className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
          style={{
            backgroundImage: `url('/lovable-uploads/575c5c78-d2e4-4718-a590-6c073250cd26.png')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'robotWave 4s ease-in-out infinite',
            transform: 'translateZ(0)', // Enable 3D acceleration
          }}
        />
      </div>

      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-deep/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-electric/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Custom <span className="gradient-text">AI Automation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Tailored AI systems built specifically for your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="glass-card px-6 py-3 rounded-full">
              <span className="text-sm text-gray-300">✨ Custom quotations within 24 hours</span>
            </div>
            <div className="glass-card px-6 py-3 rounded-full">
              <span className="text-sm text-gray-300">⚡ Delivery within 72 hours</span>
            </div>
          </div>
        </div>

        {/* Bots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {bots.map((bot, index) => {
            const Icon = bot.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${bot.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{bot.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{bot.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
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
              Get Custom AI Solution
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIAutomationSection;
