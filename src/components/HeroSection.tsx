
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
      {/* Enhanced Globe Background - New Blue Earth */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-[400vw] h-[400vw] xs:w-[350vw] xs:h-[350vw] sm:w-[300vw] sm:h-[300vw] md:w-[250vw] md:h-[250vw] lg:w-[200vw] lg:h-[200vw] xl:w-[150vw] xl:h-[150vw] opacity-20 xs:opacity-25 sm:opacity-30 md:opacity-35 lg:opacity-40"
          style={{
            backgroundImage: `url('/lovable-uploads/bd30c280-08cb-4f0b-9318-ca28cf6a4df2.png')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'earthRotation 60s linear infinite',
            filter: 'contrast(1.3) saturate(1.2) brightness(0.8)',
          }}
        />
      </div>

      {/* Enhanced background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-deep/50 via-dark-primary/90 to-blue-electric/40" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-16 xs:w-20 sm:w-24 md:w-32 lg:w-48 xl:w-72 h-16 xs:h-20 sm:h-24 md:h-32 lg:h-48 xl:h-72 bg-violet-deep/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-20 xs:w-24 sm:w-32 md:w-48 lg:w-64 xl:w-96 h-20 xs:h-24 sm:h-32 md:h-48 lg:h-64 xl:h-96 bg-blue-electric/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/6 w-12 xs:w-16 sm:w-20 md:w-28 lg:w-40 xl:w-56 h-12 xs:h-16 sm:h-20 md:h-28 lg:h-40 xl:h-56 bg-green-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="animate-fade-in">
          {/* Badge - Enhanced mobile optimization */}
          <div className="inline-flex items-center px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4 xs:mb-5 sm:mb-6 md:mb-8">
            <span className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-300">🚀 Supercharge Your Business</span>
          </div>

          {/* Main headline - Enhanced mobile responsiveness */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-tight px-1 xs:px-2">
            Reach{' '}
            <span className="gradient-text block xs:block sm:inline">10x Revenue!</span>
          </h1>

          {/* Subtext - Better mobile spacing */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 max-w-4xl mx-auto leading-relaxed px-2 xs:px-3">
            Join the ranks of businesses that have achieved phenomenal growth with our proven strategies.
          </p>

          {/* Growth Chart Visual - Enhanced mobile layout */}
          <div className="mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto px-2 xs:px-3">
            <div className="glass-card rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8">
              <div className="flex items-center justify-center mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                <TrendingUp className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-green-400 mr-2 xs:mr-3" />
                <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">10x Revenue Growth</span>
              </div>
              
              {/* Enhanced Growth Chart */}
              <div className="relative h-16 xs:h-20 sm:h-24 md:h-28 lg:h-32 flex items-end justify-center space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-5">
                <div className="flex flex-col items-center">
                  <div className="w-3 xs:w-4 sm:w-5 md:w-6 lg:w-8 bg-gray-500 rounded-t transition-all duration-1000" style={{ height: '12px' }}></div>
                  <span className="text-xs xs:text-sm md:text-base text-gray-400 mt-1 xs:mt-2">Month 1</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 xs:w-4 sm:w-5 md:w-6 lg:w-8 bg-blue-500 rounded-t transition-all duration-1000" style={{ height: '20px' }}></div>
                  <span className="text-xs xs:text-sm md:text-base text-gray-400 mt-1 xs:mt-2">Month 3</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 xs:w-4 sm:w-5 md:w-6 lg:w-8 bg-violet-500 rounded-t transition-all duration-1000" style={{ height: '32px' }}></div>
                  <span className="text-xs xs:text-sm md:text-base text-gray-400 mt-1 xs:mt-2">Month 6</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 xs:w-4 sm:w-5 md:w-6 lg:w-8 bg-green-500 rounded-t animate-pulse transition-all duration-1000" style={{ height: '56px' }}></div>
                  <span className="text-xs xs:text-sm md:text-base text-green-400 mt-1 xs:mt-2 font-bold">Month 12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Subtext - Mobile optimized */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-2 xs:px-3">
            <span className="block mb-2 xs:mb-3">Smart bots for DMs, calls, and workflows — fully automated.</span>
            <span className="block">Scale your outreach while you focus on closing.</span>
          </p>

          {/* CTA Buttons - Enhanced mobile layout */}
          <div className="flex flex-col gap-3 xs:gap-4 sm:gap-5 justify-center items-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 px-2 xs:px-3">
            <Button 
              size="lg" 
              className="w-full xs:w-full sm:w-auto bg-gradient-to-r from-violet-deep to-blue-electric hover:opacity-90 transition-all duration-300 text-sm xs:text-base sm:text-lg md:text-xl px-4 xs:px-5 sm:px-6 md:px-8 py-3 xs:py-4 sm:py-5 md:py-6 animate-glow min-h-[48px] xs:min-h-[52px] sm:min-h-[56px]"
            >
              <span className="text-center leading-tight">Book a Free Strategic Growth Session</span>
              <ArrowRight className="ml-2 xs:ml-3 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            </Button>
          </div>

          {/* Bot Preview Animation - Enhanced mobile responsiveness */}
          <div className="relative max-w-5xl mx-auto px-2 xs:px-3">
            <div className="glass-card rounded-lg sm:rounded-xl md:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-white">Live Bot Dashboard</h3>
                <div className="flex items-center space-x-2 xs:space-x-3">
                  <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs xs:text-sm sm:text-base text-gray-300">Active</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 xs:gap-4 sm:gap-5">
                <div className="bg-dark-secondary/50 rounded-lg p-3 xs:p-4 sm:p-5 border border-white/10">
                  <div className="flex items-center space-x-2 xs:space-x-3 mb-2 xs:mb-3">
                    <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 bg-blue-electric rounded-full" />
                    <span className="text-xs xs:text-sm sm:text-base text-gray-300">Instagram DM</span>
                  </div>
                  <div className="text-xs xs:text-sm text-gray-400 mb-1 xs:mb-2">Responding to leads...</div>
                  <div className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-white">
                    +{liveStats.instagram.toLocaleString()} messages sent
                  </div>
                </div>
                
                <div className="bg-dark-secondary/50 rounded-lg p-3 xs:p-4 sm:p-5 border border-white/10">
                  <div className="flex items-center space-x-2 xs:space-x-3 mb-2 xs:mb-3">
                    <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 bg-green-500 rounded-full" />
                    <span className="text-xs xs:text-sm sm:text-base text-gray-300">WhatsApp Bot</span>
                  </div>
                  <div className="text-xs xs:text-sm text-gray-400 mb-1 xs:mb-2">Qualifying prospects...</div>
                  <div className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-white">
                    +{liveStats.whatsapp.toLocaleString()} qualified leads
                  </div>
                </div>
                
                <div className="bg-dark-secondary/50 rounded-lg p-3 xs:p-4 sm:p-5 border border-white/10">
                  <div className="flex items-center space-x-2 xs:space-x-3 mb-2 xs:mb-3">
                    <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 bg-violet-deep rounded-full" />
                    <span className="text-xs xs:text-sm sm:text-base text-gray-300">AI Voice Calls</span>
                  </div>
                  <div className="text-xs xs:text-sm text-gray-400 mb-1 xs:mb-2">Booking appointments...</div>
                  <div className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-white">
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
