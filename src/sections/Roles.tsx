
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { motion } from 'framer-motion';

export const Roles = () => {
  const roles = [
    {
      badge: 'HOST',
      title: 'Full Control',
      desc: 'Create, manage, and delete the event. Complete access to all settings, members, and analytics.',
    },
    {
      badge: 'CO-HOST',
      title: 'Edit Rights',
      desc: 'Help manage the event — edit itineraries, activities, and members — without deletion rights.',
    },
    {
      badge: 'MEMBER',
      title: 'View & Participate',
      desc: 'See all event details, join chats, RSVP, and engage with checklists and activities.',
    },
    {
      badge: 'NON-MEMBER',
      title: 'Limited Preview',
      desc: 'Discover the event and send a join request. Great for public events and open trips.',
    },
  ];

  return (
    <section id="roles" className="py-24 relative overflow-hidden">
      {/* Ambient — layered depth for light mode */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[500px] h-[500px]
        bg-brand-coral/[0.05] dark:bg-brand-coral/8
        rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-[500px] h-[500px]
        bg-brand-navy/[0.04] dark:bg-indigo-900/8
        rounded-full blur-[130px] pointer-events-none" />
      <Container>
        <SectionHeading
          label="FOR EVERY TEAM"
          title="Roles that fit your group"
          subtitle="Flexible permissions keep everyone in their lane — and your event on track."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card hoverEffect className="p-8 text-center flex flex-col items-center h-full">
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-navy dark:bg-white/10 text-white dark:text-brand-coral text-xs font-bold uppercase tracking-widest mb-6">
                  {role.badge}
                </span>
                <h4 className="text-xl font-bold text-brand-navy dark:text-white mb-3">{role.title}</h4>
                <p className="text-grey-500 dark:text-grey-400 text-sm leading-relaxed">{role.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
