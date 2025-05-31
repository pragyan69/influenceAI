
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
        instagram: prev.instagram + Math.floor(Math.random() * 8) + 3,
        whatsapp: prev.whatsapp + Math.floor(Math.random() * 6) + 2,
        voice: prev.voice + Math.floor(Math.random() * 3) + (Math.random() > 0.5 ? 1 : 0)
      }));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Globe Background - Earth-like rotation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-[300vw] h-[300vw] sm:w-[250vw] sm:h-[250vw] md:w-[200vw] md:h-[200vw] lg:w-[150vw] lg:h-[150vw] xl:w-[120vw] xl:h-[120vw] opacity-25 sm:opacity-35 md:opacity-40"
          style={{
            backgroundImage: `url('/lovable-uploads/f5f9c622-a236-4144-9c5a-59fe3e73d913.png')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'earthRotation 45s linear infinite',
            filter: 'contrast(1.2) saturate(1.1) brightness(0.9)',
          }}
        />
      </div>

      {/* Enhanced background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-deep/40 via-dark-primary/85 to-blue-electric/35" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-24 sm:w-32 md:w-48 lg:w-72 h-24 sm:h-32 md:h-48 lg:h-72 bg-violet-deep/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 md:w-64 lg:w-96 h-32 sm:h-48 md:h-64 lg:h-96 bg-blue-electric/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/6 w-20 sm:w-28 md:w-40 lg:w-56 h-20 sm:h-28 md:h-40 lg:h-56 bg-green-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-3 sm:mb-4 md:mb-6 lg:mb-8">
            <span className="text-xs sm:text-sm md:text-base text-gray-300">🚀 Supercharge Your Business</span>
          </div>

          {/* Main headline - Enhanced mobile responsiveness */}
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight px-2">
            Reach{' '}
            <span className="gradient-text block sm:inline">10x Revenue!</span>
          </h1>

          {/* Subtext - Better mobile spacing */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-3 sm:mb-4 md:mb-6 lg:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Join the ranks of businesses that have achieved phenomenal growth with our proven strategies.
          </p>

          {/* Growth Chart Visual - Enhanced mobile layout */}
          <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-12 max-w-2xl mx-auto px-2">
            <div className="glass-card rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-8">
              <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-green-400 mr-1 sm:mr-2 md:mr-3" />
                <span className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold text-white">10x Revenue Growth</span>
              </div>
              
              {/* Enhanced Growth Chart */}
              <div className="relative h-12 sm:h-16 md:h-24 lg:h-32 flex items-end justify-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-2 sm:w-3 md:w-4 lg:w-6 xl:w-8 bg-gray-500 rounded-t transition-all duration-1000" style={{ height: '8px' }}></div>
                  <span className="text-xs sm:text-xs md:text-sm text-gray-400 mt-1">Month 1</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-2 sm:w-3 md:w-4 lg:w-6 xl:w-8 bg-blue-500 rounded-t transition-all duration-1000" style={{ height: '16px' }}></div>
                  <span className="text-xs sm:text-xs md:text-sm text-gray-400 mt-1">Month 3</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-2 sm:w-3 md:w-4 lg:w-6 xl:w-8 bg-violet-500 rounded-t transition-all duration-1000" style={{ height: '24px' }}></div>
                  <span className="text-xs sm:text-xs md:text-sm text-gray-400 mt-1">Month 6</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-2 sm:w-3 md:w-4 lg:w-6 xl:w-8 bg-green-500 rounded-t animate-pulse transition-all duration-1000" style={{ height: '48px' }}></div>
                  <span className="text-xs sm:text-xs md:text-sm text-green-400 mt-1 font-bold">Month 12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Subtext - Mobile optimized */}
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-4 sm:mb-6 md:mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
            <span className="block mb-1 sm:mb-2">Smart bots for DMs, calls, and workflows — fully automated.</span>
            <span className="block">Scale your outreach while you focus on closing.</span>
          </p>

          {/* CTA Buttons - Enhanced mobile layout */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-2">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-violet-deep to-blue-electric hover:opacity-90 transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-6 animate-glow min-h-[44px] sm:min-h-[48px]"
            >
              <span className="text-center leading-tight">Book a Free Strategic Growth Session</span>
              <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
            </Button>
          </div>

          {/* Bot Preview Animation - Enhanced mobile responsiveness */}
          <div className="relative max-w-5xl mx-auto px-2">
            <div className="glass-card rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-8 space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white">Live Bot Dashboard</h3>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm text-gray-300">Active</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2 md:gap-3 lg:gap-4">
                <div className="bg-dark-secondary/50 rounded-md sm:rounded-lg p-2 sm:p-2 md:p-3 lg:p-4 border border-white/10">
                  <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-electric rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-300">Instagram DM</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-1">Responding to leads...</div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-white">
                    +{liveStats.instagram.toLocaleString()} messages sent
                  </div>
                </div>
                
                <div className="bg-dark-secondary/50 rounded-md sm:rounded-lg p-2 sm:p-2 md:p-3 lg:p-4 border border-white/10">
                  <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-300">WhatsApp Bot</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-1">Qualifying prospects...</div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-white">
                    +{liveStats.whatsapp.toLocaleString()} qualified leads
                  </div>
                </div>
                
                <div className="bg-dark-secondary/50 rounded-md sm:rounded-lg p-2 sm:p-2 md:p-3 lg:p-4 border border-white/10 sm:col-span-1 col-span-1">
                  <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-violet-deep rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-300">AI Voice Calls</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-1">Booking appointments...</div>
                  <div className="text-xs sm:text-sm md:text-base font-bold text-white">
                    +{liveStats.voice.toLocaleString()} calls completed
                  </div>
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
