import { useState, useEffect, useRef } from 'react';

export const ImpactMetrics = () => {
  const [counters, setCounters] = useState({
    panchayats: 0,
    applications: 0,
    volunteers: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const targets = {
    panchayats: 150,
    applications: 5280,
    volunteers: 420
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        panchayats: Math.floor(targets.panchayats * progress),
        applications: Math.floor(targets.applications * progress),
        volunteers: Math.floor(targets.volunteers * progress)
      });

      if (currentStep >= steps) {
        setCounters(targets);
        clearInterval(interval);
      }
    }, stepTime);
  };

  const metrics = [
    {
      number: counters.panchayats,
      label: "Panchayats Served"
    },
    {
      number: counters.applications,
      label: "Applications Supported"
    },
    {
      number: "₹2.8Cr",
      label: "Benefits Delivered"
    },
    {
      number: counters.volunteers,
      label: "Active Volunteers"
    }
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-impact py-16 text-white text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Hamara Impact
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-3">
                {typeof metric.number === 'string' ? metric.number : metric.number.toLocaleString()}
              </div>
              <div className="text-lg opacity-90">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};