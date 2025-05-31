
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [liveStats, setLiveStats] = useState({
    instagram: 0,
    whatsapp: 0,
    voice: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        instagram: prev.instagram + Math.floor(Math.random() * 3) + 1,
        whatsapp: prev.whatsapp + Math.floor(Math.random() * 2) + 1,
        voice: prev.voice + Math.floor(Math.random() * 1) + (Math.random() > 0.7 ? 1 : 0)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-deep/20 via-dark-primary to-blue-electric/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-violet-deep/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-electric/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm text-gray-300">🚀 Supercharge Your Business</span>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            Reach{' '}
            <span className="gradient-text">10x Revenue!</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Join the ranks of businesses that have achieved phenomenal growth with our proven strategies.
          </p>

          {/* Animated Globe */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Globe 
                className="w-16 h-16 sm:w-20 sm:h-20 text-violet-deep animate-spin" 
                style={{ animationDuration: '8s' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-deep to-blue-electric rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>
          </div>

          {/* Growth Chart Visual */}
          <div className="mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            <div className="glass-card rounded-2xl p-4 sm:p-8">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mr-2 sm:mr-3" />
                <span className="text-lg sm:text-xl font-semibold text-white">10x Revenue Growth</span>
              </div>
              
              {/* Simple Growth Chart */}
              <div className="relative h-24 sm:h-32 flex items-end justify-center space-x-2 sm:space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-gray-500 rounded-t" style={{ height: '15px' }}></div>
                  <span className="text-xs text-gray-400 mt-2">Month 1</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-blue-500 rounded-t" style={{ height: '30px' }}></div>
                  <span className="text-xs text-gray-400 mt-2">Month 3</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-violet-500 rounded-t" style={{ height: '45px' }}></div>
                  <span className="text-xs text-gray-400 mt-2">Month 6</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-green-500 rounded-t animate-pulse" style={{ height: '90px' }}></div>
                  <span className="text-xs text-green-400 mt-2 font-bold">Month 12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subtext continued */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            <span className="block sm:inline">Smart bots for DMs, calls, and workflows</span>
            <span className="block sm:inline"> — fully automated.</span>
            <br />
            <span className="block sm:inline">Scale your outreach while you focus on closing.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-violet-deep to-blue-electric hover:opacity-90 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 animate-glow"
            >
              <span className="block sm:inline">Book a Free Strategic Growth Session</span>
              <ArrowRight className="ml-2 hidden sm:inline" size={20} />
            </Button>
          </div>

          {/* Bot Preview Animation */}
          <div className="relative max-w-4xl mx-auto px-4">
            <div className="glass-card rounded-2xl p-4 sm:p-8 space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold text-white">Live Bot Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-300">Active</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-dark-secondary/50 rounded-lg p-3 sm:p-4 border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-blue-electric rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-300">Instagram DM</span>
                  </div>
                  <div className="text-xs text-gray-400">Responding to leads...</div>
                  <div className="mt-2 text-sm text-white">+{liveStats.instagram} messages sent</div>
                </div>
                
                <div className="bg-dark-secondary/50 rounded-lg p-3 sm:p-4 border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-300">WhatsApp Bot</span>
                  </div>
                  <div className="text-xs text-gray-400">Qualifying prospects...</div>
                  <div className="mt-2 text-sm text-white">+{liveStats.whatsapp} qualified leads</div>
                </div>
                
                <div className="bg-dark-secondary/50 rounded-lg p-3 sm:p-4 border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-violet-deep rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-300">AI Voice Calls</span>
                  </div>
                  <div className="text-xs text-gray-400">Booking appointments...</div>
                  <div className="mt-2 text-sm text-white">+{liveStats.voice} calls completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
