
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { motion } from 'framer-motion';
import {
  Globe,
  RefreshCw,
  Calendar,
  MapPin,
  Bell,
  Search,
  Camera,
  Lock,
  Users,
  Megaphone,
  Palette,
  Share2,
  Zap
} from 'lucide-react';

const FEATURED_UTILITIES = [
  {
    name: 'Language Translator',
    icon: Globe,
    desc: 'Real-time AI voice and text translation across 100+ languages.',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-400/10',
    border: 'border-blue-100 dark:border-blue-400/20',
    glow: 'group-hover:shadow-[0_0_40px_rgba(96,165,250,0.15)]',
    size: 'lg:col-span-2 lg:row-span-1',
    badge: 'AI Powered'
  },
  {
    name: 'Currency Converter',
    icon: RefreshCw,
    desc: 'Instant localized spending with live market exchange rates.',
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-400/10',
    border: 'border-indigo-100 dark:border-indigo-400/20',
    glow: 'group-hover:shadow-[0_0_40px_rgba(129,140,248,0.15)]',
    size: 'lg:col-span-2 lg:row-span-1',
    badge: 'Real-time'
  },
];

const SECONDARY_UTILITIES = [
  {
    name: 'Calendar Sync',
    icon: Calendar,
    desc: 'Connect Google, Outlook, and Apple calendars effortlessly.',
    color: 'text-sky-600 dark:text-sky-400',
    bg: 'bg-sky-50 dark:bg-sky-400/10',
    border: 'border-sky-100 dark:border-sky-400/20',
    size: 'lg:col-span-1 lg:row-span-1'
  },
  {
    name: 'Smart Maps',
    icon: MapPin,
    desc: 'Offline-first routing and collaborative venue selection.',
    color: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-50 dark:bg-rose-400/10',
    border: 'border-rose-100 dark:border-rose-400/20',
    size: 'lg:col-span-1 lg:row-span-1'
  },
  {
    name: 'RSVP Tracking',
    icon: Users,
    desc: 'Automated guest lists and intelligent headcount updates.',
    color: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-50 dark:bg-cyan-400/10',
    border: 'border-cyan-100 dark:border-cyan-400/20',
    size: 'lg:col-span-1 lg:row-span-1'
  },
  {
    name: 'Photo Vault',
    icon: Camera,
    desc: 'Shared high-res albums with face recognition organization.',
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-400/10',
    border: 'border-purple-100 dark:border-purple-400/20',
    size: 'lg:col-span-1 lg:row-span-1'
  },
];

const COMPACT_UTILITIES = [
  { name: 'Privacy Controls', icon: Lock, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-400/10' },
  { name: 'Global Search', icon: Search, color: 'text-slate-600 dark:text-slate-400', bg: 'bg-slate-50 dark:bg-slate-400/10' },
  { name: 'Announcements', icon: Megaphone, color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-400/10' },
  { name: 'Event Branding', icon: Palette, color: 'text-pink-600 dark:text-pink-400', bg: 'bg-pink-50 dark:bg-pink-400/10' },
  { name: 'Social Sharing', icon: Share2, color: 'text-blue-600 dark:text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10' },
  { name: 'Push Alerts', icon: Bell, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-400/10' },
];

export const Utilities = () => {
  return (
    <section id="utilities" className="py-32 relative overflow-hidden noise-overlay bg-[#F8F9FA] dark:bg-[#0b101a]">

      {/* ── Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-[800px] h-[800px]
          bg-indigo-500/[0.04] dark:bg-indigo-500/10
          rounded-full blur-[150px] animate-orb-drift" />
        <div className="absolute bottom-1/4 -right-48 w-[800px] h-[800px]
          bg-brand-coral/[0.03] dark:bg-violet-600/5
          rounded-full blur-[150px] animate-orb-drift-r" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full
          bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.02),transparent_70%)]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          label="THE ECOSYSTEM"
          title="Every tool at your fingertips"
          subtitle="A complete suite of integrated utilities built to handle every detail of your group coordination."
          className="mb-20"
        />

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">

          {/* TIER 1: Featured (Top Row) */}
          {FEATURED_UTILITIES.map((item, i) => (
            <motion.div
              key={item.name}
              className={`${item.size} group relative rounded-[2rem] p-8 overflow-hidden
                bg-white dark:bg-[#0d1525]/80
                border border-[#E2E8F0] dark:border-white/[0.06]
                backdrop-blur-xl transition-all duration-500
                hover:-translate-y-1 ${item.glow}
                shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center border ${item.border}
                    group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full
                    bg-rose-50 text-rose-600 border border-rose-200 dark:bg-brand-coral/10 dark:text-brand-coral dark:border-brand-coral/20">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-800 dark:text-white mb-3 tracking-tight">
                  {item.name}
                </h3>
                <p className="text-sm text-grey-500 dark:text-grey-400 leading-relaxed font-medium max-w-[280px]">
                  {item.desc}
                </p>
              </div>

              {/* Decorative internal elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-brand-coral/5 dark:from-brand-coral/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Zap className="absolute bottom-6 right-6 w-12 h-12 text-brand-coral/5 -rotate-12 group-hover:rotate-0 transition-all duration-700" />
            </motion.div>
          ))}

          {/* TIER 2: Functional (Middle Section) */}
          {SECONDARY_UTILITIES.map((item, i) => (
            <motion.div
              key={item.name}
              className={`${item.size} group relative rounded-[1.75rem] p-6 overflow-hidden
                bg-white dark:bg-[#0d1525]/80
                border border-[#E2E8F0] dark:border-white/[0.06]
                backdrop-blur-xl transition-all duration-500
                hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]
                dark:shadow-none dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center border ${item.border} mb-5
                  group-hover:rotate-6 transition-transform duration-500`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2 tracking-tight">
                  {item.name}
                </h4>
                <p className="text-xs text-grey-500 dark:text-grey-400 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* TIER 3: Support (Bottom Row - Dynamic Grid) */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-2">
            {COMPACT_UTILITIES.map((item, i) => (
              <motion.div
                key={item.name}
                className="group flex items-center gap-3 p-4 rounded-2xl
                  bg-white dark:bg-[#0d1525]/40
                  border border-[#E2E8F0] dark:border-white/[0.04]
                  backdrop-blur-md transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none
                  hover:bg-white dark:hover:bg-[#141e35]/60 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)]
                  hover:scale-[1.02] cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
              >
                <div className={`p-2 rounded-lg ${item.bg} group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <span className="text-[11px] font-bold text-slate-800 dark:text-grey-300 tracking-tight leading-tight">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
};
