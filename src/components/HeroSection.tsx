
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [liveStats, setLiveStats] = useState({
    instagram: 1247,
    whatsapp: 892,
    voice: 156
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        instagram: prev.instagram + Math.floor(Math.random() * 5) + 2,
        whatsapp: prev.whatsapp + Math.floor(Math.random() * 4) + 1,
        voice: prev.voice + Math.floor(Math.random() * 2) + (Math.random() > 0.6 ? 1 : 0)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Custom Globe Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-[200vw] h-[200vw] sm:w-[150vw] sm:h-[150vw] md:w-[120vw] md:h-[120vw] lg:w-[100vw] lg:h-[100vw] xl:w-[80vw] xl:h-[80vw] opacity-20 sm:opacity-30"
          style={{
            backgroundImage: `url('/lovable-uploads/f5f9c622-a236-4144-9c5a-59fe3e73d913.png')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'spin 60s linear infinite',
          }}
        />
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-deep/30 via-dark-primary/80 to-blue-electric/30" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-violet-deep/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-blue-electric/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4 sm:mb-6 md:mb-8">
            <span className="text-xs sm:text-sm text-gray-300">🚀 Supercharge Your Business</span>
          </div>

          {/* Main headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
            Reach{' '}
            <span className="gradient-text">10x Revenue!</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the ranks of businesses that have achieved phenomenal growth with our proven strategies.
          </p>

          {/* Growth Chart Visual */}
          <div className="mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
            <div className="glass-card rounded-2xl p-3 sm:p-4 md:p-8">
              <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-400 mr-2 sm:mr-3" />
                <span className="text-sm sm:text-lg md:text-xl font-semibold text-white">10x Revenue Growth</span>
              </div>
              
              {/* Simple Growth Chart */}
              <div className="relative h-16 sm:h-24 md:h-32 flex items-end justify-center space-x-1 sm:space-x-2 md:space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 sm:w-6 md:w-8 bg-gray-500 rounded-t" style={{ height: '10px' }}></div>
                  <span className="text-xs text-gray-400 mt-1 sm:mt-2">Month 1</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 sm:w-6 md:w-8 bg-blue-500 rounded-t" style={{ height: '20px' }}></div>
                  <span className="text-xs text-gray-400 mt-1 sm:mt-2">Month 3</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 sm:w-6 md:w-8 bg-violet-500 rounded-t" style={{ height: '30px' }}></div>
                  <span className="text-xs text-gray-400 mt-1 sm:mt-2">Month 6</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 sm:w-6 md:w-8 bg-green-500 rounded-t animate-pulse" style={{ height: '60px' }}></div>
                  <span className="text-xs text-green-400 mt-1 sm:mt-2 font-bold">Month 12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subtext continued */}
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            <span className="block">Smart bots for DMs, calls, and workflows</span>
            <span className="block"> — fully automated.</span>
            <br />
            <span className="block">Scale your outreach while you focus on closing.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 md:mb-16">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-violet-deep to-blue-electric hover:opacity-90 transition-all duration-300 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 animate-glow"
            >
              <span>Book a Free Strategic Growth Session</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          {/* Bot Preview Animation */}
          <div className="relative max-w-4xl mx-auto">
            <div className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-8 space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">Live Bot Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm text-gray-300">Active</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                <div className="bg-dark-secondary/50 rounded-lg p-2 sm:p-3 md:p-4 border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-blue-electric rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-300">Instagram DM</span>
                  </div>
                  <div className="text-xs text-gray-400">Responding to leads...</div>
                  <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-white">+{liveStats.instagram.toLocaleString()} messages sent</div>
                </div>
                
                <div className="bg-dark-secondary/50 rounded-lg p-2 sm:p-3 md:p-4 border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-300">WhatsApp Bot</span>
                  </div>
                  <div className="text-xs text-gray-400">Qualifying prospects...</div>
                  <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-white">+{liveStats.whatsapp.toLocaleString()} qualified leads</div>
                </div>
                
                <div className="bg-dark-secondary/50 rounded-lg p-2 sm:p-3 md:p-4 border border-white/10 sm:col-span-1 col-span-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-violet-deep rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-300">AI Voice Calls</span>
                  </div>
                  <div className="text-xs text-gray-400">Booking appointments...</div>
                  <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-white">+{liveStats.voice.toLocaleString()} calls completed</div>
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
