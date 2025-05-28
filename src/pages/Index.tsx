
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import IndustriesSection from '@/components/IndustriesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-primary text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <IndustriesSection />
      <TestimonialsSection />
      <PricingSection />
      
      {/* Footer */}
      <footer className="bg-dark-secondary border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-4">INFLUENCE</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Transform your business with AI automation. Let our bots handle the talking while you focus on closing deals.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm">📧</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm">📱</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm">💼</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Instagram DM Bots</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp Automation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Voice Calling</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Workflow Builders</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
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
