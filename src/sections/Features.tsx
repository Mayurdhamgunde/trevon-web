import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { motion } from 'framer-motion';
import {
  Calendar,
  Sparkles,
  LayoutTemplate,
  MessageCircle,
  Wallet,
  ClipboardList,
  BarChart3,
  Globe,
  ImageIcon,
} from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  color: string;
  gradient: string;
  accent: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: <Calendar className="w-6 h-6" />,
    color: 'text-brand-coral',
    gradient: 'from-brand-coral/20 to-brand-orange/10',
    accent: 'from-brand-coral to-brand-orange',
    title: 'Event & Trip Planning',
    desc: 'Create single-day events or multi-day trips with day-by-day itineraries. An 8-step wizard guides you through every detail.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    color: 'text-brand-orange',
    gradient: 'from-brand-orange/20 to-yellow-400/10',
    accent: 'from-brand-orange to-yellow-400',
    title: 'TrevAI — Smart Planning',
    desc: 'Just describe your trip in natural language. AI auto-generates complete itineraries with activity suggestions and budget estimates.',
  },
  {
    icon: <LayoutTemplate className="w-6 h-6" />,
    color: 'text-violet-400',
    gradient: 'from-violet-400/20 to-purple-500/10',
    accent: 'from-violet-400 to-purple-500',
    title: 'Template Library',
    desc: 'Jump-start with pre-designed templates for weddings, birthdays, beach trips, corporate events, and family vacations.',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    color: 'text-sky-400',
    gradient: 'from-sky-400/20 to-blue-500/10',
    accent: 'from-sky-400 to-blue-500',
    title: 'Real-Time Group Chat',
    desc: 'Event-specific group chats, direct messages, media sharing, and voice messages — keep the whole crew in sync.',
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    color: 'text-emerald-400',
    gradient: 'from-emerald-400/20 to-green-500/10',
    accent: 'from-emerald-400 to-green-500',
    title: 'Budget & Split Bills',
    desc: 'Track expenses, split costs fairly among members, and stay on budget throughout your event or trip.',
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    color: 'text-teal-400',
    gradient: 'from-teal-400/20 to-cyan-500/10',
    accent: 'from-teal-400 to-cyan-500',
    title: 'Checklists & Essentials',
    desc: 'Packing lists, task trackers, vendor contacts (POC), important links, FAQs — everything essential in one tab.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'text-rose-400',
    gradient: 'from-rose-400/20 to-pink-500/10',
    accent: 'from-rose-400 to-pink-500',
    title: 'Analytics Dashboard',
    desc: 'RSVP stats, activity participation, budget tracking, and event insights. Available to Hosts and Co-Hosts.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    color: 'text-indigo-400',
    gradient: 'from-indigo-400/20 to-blue-600/10',
    accent: 'from-indigo-400 to-blue-600',
    title: 'Utility Tools',
    desc: 'Built-in language translator, currency converter, calendar integration, and location/map support for global travelers.',
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    color: 'text-amber-400',
    gradient: 'from-amber-400/20 to-orange-500/10',
    accent: 'from-amber-400 to-orange-500',
    title: 'Photo Gallery & Media',
    desc: 'Capture and share your best moments. Event-specific photo galleries, image uploads, and camera integration.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Section ambient — light mode depth, dark mode subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]
        bg-brand-coral/[0.06] dark:bg-brand-coral/10
        rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px]
        bg-brand-navy/[0.04] dark:bg-indigo-900/10
        rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <SectionHeading
          label="Everything You Need"
          title="Packed with powerful features"
          subtitle="Every tool you need to plan, collaborate, and enjoy your events and trips."
          className="mb-16"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={cardVariants} className="group">
              <div className="relative h-full rounded-2xl border border-slate-200/60 dark:border-white/8
                bg-white/85 dark:bg-white/[0.03]
                backdrop-blur-sm overflow-hidden transition-all duration-500 ease-out cursor-default
                shadow-[0_8px_32px_-8px_rgba(3,20,73,0.08),0_2px_8px_-2px_rgba(3,20,73,0.04)]
                dark:shadow-none
                hover:-translate-y-2
                hover:shadow-[0_20px_48px_-12px_rgba(3,20,73,0.14),0_8px_16px_-4px_rgba(3,20,73,0.06)]
                dark:hover:shadow-2xl dark:hover:shadow-black/40
                hover:border-opacity-80">

                {/* Gradient hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 p-7 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 border border-white/20 dark:border-white/10 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <span className={feature.color}>{feature.icon}</span>
                  </div>

                  {/* Text */}
                  <h3 className="text-base font-bold text-brand-navy dark:text-white mb-2.5 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-grey-500 dark:text-grey-400 leading-relaxed flex-1">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
