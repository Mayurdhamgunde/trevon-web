
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { motion } from 'framer-motion';

export const Roles = () => {
  const roles = [
    {
      badge: 'Owner',
      title: 'Full Control',
      desc: 'Can manage settings, delete the event, and invite anyone.',
    },
    {
      badge: 'Admin',
      title: 'Manage Logistics',
      desc: 'Can edit the itinerary, add tasks, and manage members.',
    },
    {
      badge: 'Collaborator',
      title: 'Contribute',
      desc: 'Can add suggestions and complete assigned tasks.',
    },
    {
      badge: 'Viewer',
      title: 'Read Only',
      desc: 'Can only view the itinerary and location details.',
    },
  ];

  return (
    <section id="roles" className="py-24 relative overflow-hidden">
      <Container>
        <SectionHeading
          label="For Teams"
          title="Role-based access control"
          subtitle="Keep everything organized by giving the right permissions to the right people."
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
