
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { Crown, Shield, Users, Eye, Check, ArrowRight } from 'lucide-react';

const HOST_PERMISSIONS = [
  'Create & delete events',
  'Manage all members & roles',
  'Full analytics access',
  'Configure settings & privacy',
];

const ROLE_META = [
  {
    badge: 'CO-HOST',
    title: 'Edit Rights',
    desc: 'Help manage the event — edit itineraries, activities, and members — without deletion rights.',
    icon: Shield,
    color: 'text-indigo-400',
    iconBg: 'bg-indigo-400/10 dark:bg-indigo-400/15',
    accent: 'border-indigo-400/30',
    glowColor: 'bg-indigo-500/[0.05] dark:bg-indigo-500/10',
  },
  {
    badge: 'MEMBER',
    title: 'View & Participate',
    desc: 'See all event details, join chats, RSVP, and engage with checklists and activities.',
    icon: Users,
    color: 'text-emerald-400',
    iconBg: 'bg-emerald-400/10 dark:bg-emerald-400/15',
    accent: 'border-emerald-400/30',
    glowColor: 'bg-emerald-500/[0.04] dark:bg-emerald-500/8',
  },
  {
    badge: 'NON-MEMBER',
    title: 'Limited Preview',
    desc: 'Discover the event and send a join request. Great for public events and open trips.',
    icon: Eye,
    color: 'text-grey-400 dark:text-grey-500',
    iconBg: 'bg-slate-400/8 dark:bg-slate-400/10',
    accent: 'border-slate-300/30 dark:border-white/10',
    glowColor: 'bg-slate-400/[0.03] dark:bg-slate-500/5',
  },
];

/* Access level bar widths per role */
const ACCESS_LEVELS = [100, 65, 35, 15];

export const Roles = () => {
  return (
    <section id="roles" className="py-24 relative overflow-hidden">

      {/* ── Atmosphere ── */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-[600px] h-[600px]
        bg-brand-coral/[0.06] dark:bg-brand-coral/8
        rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-48 w-[600px] h-[600px]
        bg-brand-navy/[0.05] dark:bg-indigo-900/10
        rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[200px]
        bg-brand-orange/[0.03] dark:bg-transparent
        rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <SectionHeading
          label="FOR EVERY TEAM"
          title="Roles that fit your group"
          subtitle="Flexible permissions keep everyone in their lane — and your event on track."
          className="mb-14"
        />

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-4 max-w-6xl mx-auto">

          {/* ── HOST: Featured tall left card ── */}
          <motion.div
            className="relative rounded-3xl overflow-hidden
              border border-brand-coral/20 dark:border-brand-coral/25
              bg-white/70 dark:bg-[#141e35]/80
              backdrop-blur-xl
              shadow-[0_16px_48px_-12px_rgba(254,105,109,0.15),0_4px_16px_-4px_rgba(254,105,109,0.08)]
              dark:shadow-[0_16px_48px_-12px_rgba(254,105,109,0.12)]
              hover:-translate-y-1.5 hover:shadow-[0_24px_64px_-12px_rgba(254,105,109,0.22)]
              transition-all duration-500 cursor-default"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-coral/[0.08] via-transparent to-brand-orange/[0.05] pointer-events-none" />
            {/* Top edge accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-coral via-brand-orange to-transparent" />

            <div className="relative z-10 p-8 flex flex-col h-full min-h-[360px]">
              {/* Badge + Icon row */}
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                  bg-brand-coral/10 dark:bg-brand-coral/15
                  border border-brand-coral/25
                  text-brand-coral text-[11px] font-bold uppercase tracking-widest">
                  <Crown className="w-3 h-3" />
                  HOST
                </span>
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-coral to-brand-orange
                  flex items-center justify-center shadow-lg shadow-brand-coral/30">
                  <Crown className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Title + desc */}
              <h3 className="text-2xl font-extrabold text-brand-navy dark:text-white mb-3 leading-snug">
                Full Control
              </h3>
              <p className="text-sm text-grey-500 dark:text-grey-400 leading-relaxed mb-8">
                Create, manage, and delete the event. Complete access to all settings, members, and analytics.
              </p>

              {/* Permission list */}
              <ul className="flex flex-col gap-2.5 mt-auto">
                {HOST_PERMISSIONS.map((perm, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-2.5 text-sm font-medium text-brand-navy dark:text-grey-200"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  >
                    <span className="w-5 h-5 rounded-full bg-brand-coral/15 dark:bg-brand-coral/20
                      flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-coral" />
                    </span>
                    {perm}
                  </motion.li>
                ))}
              </ul>

              {/* Access level bar */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/[0.06]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-grey-500 dark:text-grey-500 uppercase tracking-wide">Access Level</span>
                  <span className="text-[11px] font-bold text-brand-coral">Full</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-200/60 dark:bg-white/8 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-brand-coral to-brand-orange"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right column: 3 cards stacked ── */}
          <div className="flex flex-col gap-4">

            {/* CO-HOST: Wide top */}
            <motion.div
              className={`relative rounded-3xl overflow-hidden
                border ${ROLE_META[0].accent}
                bg-white/65 dark:bg-[#141e35]/75
                backdrop-blur-xl
                shadow-[0_8px_32px_-8px_rgba(3,20,73,0.08)]
                dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]
                hover:-translate-y-1 hover:shadow-[0_16px_48px_-8px_rgba(99,102,241,0.15)]
                transition-all duration-500 cursor-default`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={`absolute inset-0 ${ROLE_META[0].glowColor} pointer-events-none`} />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-400/60 to-transparent" />

              <div className="relative z-10 p-6 flex items-start gap-5">
                <div className={`w-12 h-12 rounded-2xl ${ROLE_META[0].iconBg} flex items-center justify-center shrink-0
                  border border-indigo-400/20`}>
                  <Shield className={`w-5 h-5 ${ROLE_META[0].color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest
                      ${ROLE_META[0].iconBg} ${ROLE_META[0].color} border ${ROLE_META[0].accent}`}>
                      CO-HOST
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy dark:text-white mb-1.5">Edit Rights</h4>
                  <p className="text-sm text-grey-500 dark:text-grey-400 leading-relaxed">
                    Help manage the event — edit itineraries, activities, and members — without deletion rights.
                  </p>
                </div>
                {/* Access bar */}
                <div className="shrink-0 flex flex-col items-end gap-1.5 pt-1">
                  <span className="text-[10px] text-grey-400 font-semibold uppercase tracking-wide">Access</span>
                  <div className="w-20 h-1.5 rounded-full bg-slate-200/60 dark:bg-white/8 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-indigo-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${ACCESS_LEVELS[1]}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-indigo-400">{ACCESS_LEVELS[1]}%</span>
                </div>
              </div>
            </motion.div>

            {/* MEMBER + NON-MEMBER side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">

              {/* MEMBER */}
              <motion.div
                className={`relative rounded-3xl overflow-hidden
                  border ${ROLE_META[1].accent}
                  bg-white/65 dark:bg-[#141e35]/75
                  backdrop-blur-xl
                  shadow-[0_8px_32px_-8px_rgba(3,20,73,0.07)]
                  dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]
                  hover:-translate-y-1 hover:shadow-[0_16px_48px_-8px_rgba(52,211,153,0.12)]
                  transition-all duration-500 cursor-default`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`absolute inset-0 ${ROLE_META[1].glowColor} pointer-events-none`} />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400/60 to-transparent" />

                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest
                      ${ROLE_META[1].iconBg} ${ROLE_META[1].color} border ${ROLE_META[1].accent}`}>
                      MEMBER
                    </span>
                    <div className={`w-9 h-9 rounded-xl ${ROLE_META[1].iconBg} flex items-center justify-center border ${ROLE_META[1].accent}`}>
                      <Users className={`w-4 h-4 ${ROLE_META[1].color}`} />
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-brand-navy dark:text-white mb-2">View & Participate</h4>
                  <p className="text-sm text-grey-500 dark:text-grey-400 leading-relaxed flex-1">
                    See all event details, join chats, RSVP, and engage with checklists and activities.
                  </p>
                  <div className="mt-5 pt-4 border-t border-slate-200/50 dark:border-white/[0.06]">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] text-grey-400 font-semibold uppercase tracking-wide">Access</span>
                      <span className="text-[10px] font-bold text-emerald-400">{ACCESS_LEVELS[2]}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-slate-200/60 dark:bg-white/8 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-emerald-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${ACCESS_LEVELS[2]}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* NON-MEMBER */}
              <motion.div
                className={`relative rounded-3xl overflow-hidden
                  border ${ROLE_META[2].accent}
                  bg-white/50 dark:bg-[#141e35]/60
                  backdrop-blur-xl
                  shadow-[0_4px_20px_-8px_rgba(3,20,73,0.05)]
                  dark:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.2)]
                  hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_rgba(3,20,73,0.08)]
                  transition-all duration-500 cursor-default`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`absolute inset-0 ${ROLE_META[2].glowColor} pointer-events-none`} />

                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest
                      bg-slate-200/50 dark:bg-white/8 text-grey-500 dark:text-grey-400
                      border border-slate-300/40 dark:border-white/10">
                      NON-MEMBER
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-100/80 dark:bg-white/6 flex items-center justify-center
                      border border-slate-300/30 dark:border-white/10">
                      <Eye className="w-4 h-4 text-grey-400 dark:text-grey-500" />
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-brand-navy dark:text-white mb-2">Limited Preview</h4>
                  <p className="text-sm text-grey-500 dark:text-grey-400 leading-relaxed flex-1">
                    Discover the event and send a join request. Great for public events and open trips.
                  </p>
                  <div className="mt-5 pt-4 border-t border-slate-200/50 dark:border-white/[0.06]">
                    <div className="flex items-center gap-2 text-[11px] text-grey-400 font-medium">
                      <ArrowRight className="w-3.5 h-3.5 text-brand-coral" />
                      Request to join
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
