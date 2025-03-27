import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <header className="pt-28 pb-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-4/5 h-4/5 bg-[#FF66C4]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 left-1/4 w-24 h-24 bg-[#FF66C4]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-[#FF66C4]/15 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-[#FF66C4] to-[#FF99D6] bg-clip-text text-transparent">
                Enhance
              </span> Your Discord Experience
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Visual is a powerful Discord bot designed to elevate your server with stunning features and intuitive commands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                asChild
                className="px-6 py-7 bg-[#FF66C4] hover:bg-[#FF99D6] text-white font-poppins font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(255,102,196,0.7)] hover:shadow-[0_0_25px_rgba(255,102,196,0.9)]"
              >
                <a 
                  href="https://discord.com/oauth2/authorize" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Add to Discord
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="px-6 py-7 border-2 border-[#FF66C4] text-white hover:bg-[#FF66C4]/10 font-poppins font-semibold transition-all duration-300"
              >
                <a href="#features">
                  Explore Features
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <motion.img 
                src="https://i.imgur.com/vMcyPu7.png" 
                alt="Visual Discord Bot Banner" 
                className="rounded-xl shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-[#1A1A1A] rounded-xl p-3 shadow-lg"
              >
                <p className="text-sm text-gray-300 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-4 w-4 mr-2 text-[#FF66C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg> 
                  Trusted by <span className="font-bold text-white">1000+</span> servers
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
