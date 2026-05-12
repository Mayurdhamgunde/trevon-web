
import { Container } from '../components/Container';
import { motion } from 'framer-motion';

export const Stats = () => {
  const stats = [
    { number: '8', plus: '+', label: 'Planning Steps Guided' },
    { number: '15', plus: '+', label: 'Core Features' },
    { number: '10', plus: '', label: 'Event Management Tabs' },
    { number: '4', plus: '', label: 'Role-Based Access Levels' },
  ];

  return (
    <section className="py-12 relative z-10">
      <Container>
        <motion.div 
          className="glass-card rounded-[2rem] p-8 md:p-12 flex flex-wrap justify-center gap-12 md:gap-24 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-brand-navy dark:text-white mb-2">
                {stat.number}
                <span className="text-brand-coral">{stat.plus}</span>
              </div>
              <div className="text-sm font-medium text-grey-500 dark:text-grey-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
