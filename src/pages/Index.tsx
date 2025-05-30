
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
      <footer className="bg-gradient-to-r from-dark-secondary to-dark-primary border-t border-violet-500/20 py-16 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-blue-500/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="/lovable-uploads/ece987ea-0603-4df3-876d-1f55af092438.png" 
                  alt="INFLUENCE Logo" 
                  className="h-12 w-auto mr-4"
                />
                <h3 className="text-3xl font-bold gradient-text">INFLUENCE</h3>
              </div>
              <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
                Transform your business with AI automation. Let our bots handle the talking while you focus on closing deals and scaling your revenue.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-xl">Solutions</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-2 transform duration-300 block">Business Automation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-2 transform duration-300 block">WhatsApp Bots</a></li>
                <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-2 transform duration-300 block">Instagram DM Bots</a></li>
                <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-2 transform duration-300 block">AI Voice Calling</a></li>
                <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-2 transform duration-300 block">Website Development</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-xl">Contact</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="tel:7637855557" className="hover:text-white transition-colors hover:translate-x-2 transform duration-300 block">7637855557</a></li>
                <li><a href="mailto:influenceoffcl@gmail.com" className="hover:text-white transition-colors hover:translate-x-2 transform duration-300 block">influenceoffcl@gmail.com</a></li>
                <li><a href="https://calendly.com/officialinfluence/strategic-growth-session" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:translate-x-2 transform duration-300 block">Book Strategy Call</a></li>
                <li><a href="https://api.whatsapp.com/send?phone=917637855557" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:translate-x-2 transform duration-300 block">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-violet-500/20 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-lg">
              © 2024 INFLUENCE. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0 text-gray-400">
              <a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors hover:scale-105 transform duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
