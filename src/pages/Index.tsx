import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AIAutomationSection from '@/components/AIAutomationSection';
import IndustriesSection from '@/components/IndustriesSection';
import ResultsSection from '@/components/ResultsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-primary text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AIAutomationSection />
      <IndustriesSection />
      <ResultsSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      
      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-dark-secondary to-dark-primary border-t border-violet-500/20 py-12 sm:py-16 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-blue-500/5"></div>
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="/lovable-uploads/ece987ea-0603-4df3-876d-1f55af092438.png" 
                  alt="INFLUENCE Logo" 
                  className="h-8 sm:h-12 w-auto mr-4"
                />
                <h3 className="text-2xl sm:text-3xl font-bold gradient-text">INFLUENCE</h3>
              </div>
              <p className="text-gray-300 mb-6 sm:mb-8 max-w-md text-base sm:text-lg leading-relaxed">
                Transform your business with AI automation. Let our bots handle the talking while you focus on closing deals and scaling your revenue.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 sm:mb-6 text-lg sm:text-xl">Solutions</h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-300">
                <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-2 transform duration-300 block text-sm sm:text-base">Business Automation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-2 transform duration-300 block text-sm sm:text-base">WhatsApp Bots</a></li>
                <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-2 transform duration-300 block text-sm sm:text-base">Instagram DM Bots</a></li>
                <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-2 transform duration-300 block text-sm sm:text-base">AI Voice Calling</a></li>
                <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-2 transform duration-300 block text-sm sm:text-base">Website Development</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-violet-500/20 mt-12 sm:mt-16 pt-8 sm:pt-10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-base sm:text-lg text-center md:text-left">
              © 2024 INFLUENCE. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mt-4 sm:mt-6 md:mt-0 text-gray-400">
              <a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-300 text-sm sm:text-base">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-300 text-sm sm:text-base">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-300 text-sm sm:text-base">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
