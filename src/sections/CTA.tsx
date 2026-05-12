import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

export const CTA = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-transparent -z-20 transition-colors duration-300" />
      
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-coral/10 dark:bg-brand-coral/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-orange/10 dark:bg-brand-orange/20 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <Container className="relative z-10">
        <motion.div 
          className="glass-card relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden p-8 md:p-16 lg:p-24 text-center shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          
          {/* Inner Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-linear-to-r from-brand-coral/10 to-brand-orange/10 rounded-full blur-[80px] -z-10" />

          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/10 border border-grey-200 dark:border-white/10 shadow-sm mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
            <span className="w-2 h-2 rounded-full bg-brand-coral animate-ping" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-navy dark:text-white">Start Planning Today</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-brand-navy dark:text-white mb-6 tracking-tight max-w-4xl mx-auto leading-tight transition-colors duration-300">
            Ready to plan your next <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-coral to-brand-orange">
              great experience?
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-grey-500 dark:text-grey-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Join thousands of teams and friends who use Trevon to effortlessly manage their events, coordinate schedules, and build unforgettable memories.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="primary" size="lg" className="btn-glow w-full sm:w-auto min-w-[200px] group overflow-hidden relative">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started for Free
                <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[200px]">
              Talk to Sales
            </Button>
          </div>

          {/* Decorative Avatar Group */}
          <div className="mt-16 flex flex-col items-center justify-center gap-4 opacity-80">
            <div className="flex -space-x-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white dark:border-[#111827] bg-grey-200 dark:bg-grey-800 flex items-center justify-center overflow-hidden shadow-sm">
                  <svg className="w-6 h-6 text-grey-400 dark:text-grey-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-grey-500 dark:text-grey-400">
              Trusted by 10,000+ users worldwide
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
