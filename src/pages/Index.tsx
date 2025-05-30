
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
      
      {/* Footer */}
      <footer className="bg-dark-secondary border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/ece987ea-0603-4df3-876d-1f55af092438.png" 
                  alt="INFLUENCE Logo" 
                  className="h-10 w-auto mr-3"
                />
                <h3 className="text-2xl font-bold gradient-text">INFLUENCE</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Transform your business with AI automation. Let our bots handle the talking while you focus on closing deals.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="mailto:influenceoffcl@gmail.com"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <span className="text-sm">📧</span>
                </a>
                <a 
                  href="tel:7637855557"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <span className="text-sm">📱</span>
                </a>
                <a 
                  href="https://api.whatsapp.com/send?phone=917637855557"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <span className="text-sm">💬</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Business Automation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">WhatsApp Bots</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Instagram DM Bots</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">AI Voice Calling</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Website Development</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="tel:7637855557" className="hover:text-white transition-colors">7637855557</a></li>
                <li><a href="mailto:influenceoffcl@gmail.com" className="hover:text-white transition-colors">influenceoffcl@gmail.com</a></li>
                <li><a href="https://calendly.com/officialinfluence/strategic-growth-session" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book Strategy Call</a></li>
                <li><a href="https://api.whatsapp.com/send?phone=917637855557" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 INFLUENCE. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
