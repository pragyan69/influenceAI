
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-deep/20 via-dark-primary to-blue-electric/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-deep/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-electric/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <span className="text-sm text-gray-300">🚀 Now with AI Voice Calling</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Let AI Do the{' '}
            <span className="gradient-text">Talking.</span>
            <br />
            You Close the Deals.
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Smart bots for DMs, calls, and workflows — fully automated.
            <br />
            Scale your outreach while you focus on closing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-violet-deep to-blue-electric hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 animate-glow"
            >
              Book a Free Demo
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <Play className="mr-2" size={20} />
              See It in Action
            </Button>
          </div>

          {/* Bot Preview Animation */}
          <div className="relative max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Live Bot Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-300">Active</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-dark-secondary/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-blue-electric rounded-full" />
                    <span className="text-sm text-gray-300">Instagram DM</span>
                  </div>
                  <div className="text-xs text-gray-400">Responding to leads...</div>
                  <div className="mt-2 text-sm text-white">+127 messages sent</div>
                </div>
                
                <div className="bg-dark-secondary/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-300">WhatsApp Bot</span>
                  </div>
                  <div className="text-xs text-gray-400">Qualifying prospects...</div>
                  <div className="mt-2 text-sm text-white">+89 qualified leads</div>
                </div>
                
                <div className="bg-dark-secondary/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-violet-deep rounded-full" />
                    <span className="text-sm text-gray-300">AI Voice Calls</span>
                  </div>
                  <div className="text-xs text-gray-400">Booking appointments...</div>
                  <div className="mt-2 text-sm text-white">+34 calls completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
