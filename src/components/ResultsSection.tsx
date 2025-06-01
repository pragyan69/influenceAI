
import { useState, useEffect } from 'react';
import { TrendingUp, Repeat, Users, DollarSign } from 'lucide-react';

const ResultsSection = () => {
  const [counters, setCounters] = useState({
    growth: 0,
    roi: 0,
    customers: 0,
    reduction: 0
  });

  const stats = [
    {
      icon: TrendingUp,
      value: 40,
      suffix: "%",
      label: "Average MoM Growth",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Repeat,
      value: 3,
      suffix: "x",
      label: "ROI Over Traditional Methods",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      value: 200,
      suffix: "+",
      label: "New Customers Monthly Per Brand",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: DollarSign,
      value: 95,
      suffix: "%",
      label: "Cost Reduction in Operations",
      color: "from-orange-500 to-red-600"
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 4000; // Increased to 4 seconds for more realistic feel
      const steps = 100;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        // Use easing function for more realistic animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCounters({
          growth: Math.floor(40 * easeOutQuart),
          roi: Math.floor(3 * easeOutQuart),
          customers: Math.floor(200 * easeOutQuart),
          reduction: Math.floor(95 * easeOutQuart)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters({ growth: 40, roi: 3, customers: 200, reduction: 95 });
        }
      }, stepDuration);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('results-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="results" className="py-16 sm:py-24 bg-dark-secondary/50">
      <div id="results-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Proven <span className="gradient-text">Results</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Real numbers from real businesses that transformed with our automation
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const counterValues = [counters.growth, counters.roi, counters.customers, counters.reduction];
            
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 sm:p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto`}>
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
                    {counterValues[index]}
                  </span>
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-gray-300 font-medium text-sm sm:text-base">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
