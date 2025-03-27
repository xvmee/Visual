import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  decimal?: boolean;
}

const stats: StatProps[] = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF66C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>,
    value: 20,
    label: "Aktywnych Serwerów",
    suffix: "+"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF66C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>,
    value: 3000,
    label: "Zadowolonych Użytkowników",
    suffix: "+"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF66C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>,
    value: 15000,
    label: "Wykonanych Komend",
    suffix: "+"
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF66C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    value: 99.9,
    label: "Dostępność",
    suffix: "%",
    decimal: true
  }
];

const AnimatedCounter = ({ value, suffix = "", decimal = false }: { value: number, suffix?: string, decimal?: boolean }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = duration / value;
    let timer: ReturnType<typeof setTimeout>;
    
    const updateCount = () => {
      start += value / (duration / 16); // 60fps
      
      if (start > value) {
        setCount(value);
        clearTimeout(timer);
        return;
      }
      
      if (decimal) {
        setCount(parseFloat(start.toFixed(1)));
      } else {
        setCount(Math.floor(start));
      }
      
      timer = setTimeout(updateCount, 16);
    };
    
    updateCount();
    
    return () => clearTimeout(timer);
  }, [value, isInView, decimal]);
  
  const formattedCount = () => {
    if (value >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    } else if (decimal) {
      return count.toFixed(1);
    } else {
      return Math.floor(count);
    }
  };
  
  return <span ref={nodeRef}>{formattedCount()}{suffix}</span>;
};

const StatCard = ({ icon, value, label, suffix, decimal }: StatProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="bg-[#1A1A1A]/50 backdrop-blur-sm rounded-xl p-6 border border-[#FF66C4]/20 text-center"
    >
      <div className="w-14 h-14 bg-[#FF66C4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-3xl font-poppins font-bold mb-2">
        <AnimatedCounter value={value} suffix={suffix} decimal={decimal} />
      </h3>
      <p className="text-gray-300">{label}</p>
    </motion.div>
  );
};

export default function Stats() {
  return (
    <section id="stats" className="py-16 bg-black relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-[#FF66C4]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-[#FF66C4]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Visual w <span className="bg-gradient-to-r from-[#FF66C4] to-[#FF99D6] bg-clip-text text-transparent">Liczbach</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Dołącz do tysięcy serwerów, które już korzystają z możliwości bota Visual.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
