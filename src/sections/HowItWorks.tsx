import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const steps = [
    {
      title: 'Sign Up',
      desc: 'Create an account and set up your profile in seconds.',
    },
    {
      title: 'Start a Plan',
      desc: 'Use templates or AI to draft your trip or event instantly.',
    },
    {
      title: 'Invite Team',
      desc: 'Add collaborators and assign roles effortlessly.',
    },
    {
      title: 'Finalize & Enjoy',
      desc: 'Watch the plan come to life and have a great time.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <Container>
        <SectionHeading
          label="Simple Process"
          title="From idea to itinerary in minutes"
          className="mb-20"
        />

        <div className="flex flex-col md:flex-row justify-between relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-grey-200 dark:bg-white/10 overflow-hidden">
             <motion.div 
               className="h-full bg-linear-to-r from-brand-coral to-brand-orange"
               initial={{ width: "0%" }}
               whileInView={{ width: "100%" }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
             />
          </div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              className="relative flex flex-col items-center text-center flex-1 px-4 mb-12 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.3, duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-full bg-white dark:bg-[#0b101a] border-[3px] border-transparent bg-clip-padding relative z-10 shadow-xl mb-6 flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-coral to-brand-orange -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute inset-[3px] rounded-full bg-white dark:bg-[#0b101a] -z-10"></div>
                <span className="text-2xl font-bold bg-gradient-to-br from-brand-coral to-brand-orange bg-clip-text text-transparent">{idx + 1}</span>
              </div>
              <h4 className="text-xl font-bold text-brand-navy dark:text-white mb-3">{step.title}</h4>
              <p className="text-grey-500 dark:text-grey-400 text-sm max-w-[200px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
