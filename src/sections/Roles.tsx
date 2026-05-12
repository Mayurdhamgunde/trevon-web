
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
    <section id="roles" className="py-24 relative overflow-hidden noise-overlay">

      {/* ── Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main radial gradients for depth */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-[800px] h-[800px]
          bg-brand-coral/[0.08] dark:bg-brand-coral/8
          rounded-full blur-[160px] animate-orb-drift" />
        <div className="absolute top-1/2 -translate-y-1/2 -right-48 w-[800px] h-[800px]
          bg-brand-navy/[0.06] dark:bg-indigo-900/10
          rounded-full blur-[160px] animate-orb-drift-r" />
        
        {/* Top/Bottom ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px]
          bg-brand-orange/[0.05] dark:bg-transparent
          rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[250px]
          bg-indigo-600/[0.04] dark:bg-indigo-500/5
          rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          label="FOR EVERY TEAM"
          title="Roles that fit your group"
          subtitle="Flexible permissions keep everyone in their lane — and your event on track."
          className="mb-14"
        />

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 max-w-6xl mx-auto">

          {/* ── HOST: Featured tall left card ── */}
          <motion.div
            className="group relative rounded-[2.5rem] overflow-hidden
              border border-brand-coral/20 dark:border-brand-coral/25
              bg-white/75 dark:bg-[#141e35]/80
              backdrop-blur-2xl
              shadow-[0_40px_100px_-20px_rgba(254,105,109,0.18),0_20px_40px_-12px_rgba(254,105,109,0.12),0_4px_12px_-2px_rgba(254,105,109,0.06)]
              dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]
              hover:-translate-y-2 hover:shadow-[0_60px_120px_-20px_rgba(254,105,109,0.25)]
              transition-all duration-700 cursor-default"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-coral/[0.1] via-transparent to-brand-orange/[0.08] pointer-events-none" />
            {/* Top edge shimmer */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-coral/40 to-transparent" />
            {/* Corner accent glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-coral/10 blur-3xl rounded-full group-hover:scale-125 transition-transform duration-700" />

            <div className="relative z-10 p-10 flex flex-col h-full min-h-[400px]">
              {/* Badge + Icon row */}
              <div className="flex items-center justify-between mb-10">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
                  bg-brand-coral/10 dark:bg-brand-coral/15
                  border border-brand-coral/25
                  text-brand-coral text-[11px] font-bold uppercase tracking-[0.15em]">
                  <Crown className="w-3.5 h-3.5" />
                  HOST
                </span>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-coral to-brand-orange
                  flex items-center justify-center shadow-xl shadow-brand-coral/30 ring-1 ring-white/20">
                  <Crown className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Title + desc */}
              <h3 className="text-3xl font-extrabold text-brand-navy dark:text-white mb-4 leading-snug tracking-tight">
                Full Control
              </h3>
              <p className="text-base text-grey-500 dark:text-grey-400 leading-relaxed mb-10 font-medium">
                Create, manage, and delete the event. Complete access to all settings, members, and analytics.
              </p>

              {/* Permission list */}
              <ul className="flex flex-col gap-3.5 mt-auto">
                {HOST_PERMISSIONS.map((perm, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-sm font-semibold text-brand-navy dark:text-grey-200"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  >
                    <span className="w-6 h-6 rounded-full bg-brand-coral/15 dark:bg-brand-coral/20
                      flex items-center justify-center shrink-0 border border-brand-coral/10">
                      <Check className="w-3.5 h-3.5 text-brand-coral" />
                    </span>
                    {perm}
                  </motion.li>
                ))}
              </ul>

              {/* Access level bar */}
              <div className="mt-10 pt-8 border-t border-slate-200/80 dark:border-white/[0.08]">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-bold text-grey-400 dark:text-grey-500 uppercase tracking-widest">Access Level</span>
                  <span className="text-[11px] font-extrabold text-brand-coral tracking-wider">FULL ACCESS</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200/60 dark:bg-white/8 overflow-hidden p-0.5 ring-1 ring-slate-200/40 dark:ring-transparent">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-brand-coral via-brand-orange to-brand-coral bg-[length:200%_auto] animate-gradient-shift"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right column: 3 cards stacked ── */}
          <div className="flex flex-col gap-6">

            {/* CO-HOST: Wide top */}
            <motion.div
              className={`group relative rounded-[2rem] overflow-hidden
                border ${ROLE_META[0].accent}
                bg-white/70 dark:bg-[#141e35]/85
                backdrop-blur-2xl
                shadow-[0_30px_70px_-15px_rgba(3,20,73,0.12),0_15px_30px_-10px_rgba(3,20,73,0.08)]
                dark:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)]
                hover:-translate-y-1.5 hover:shadow-[0_45px_90px_-15px_rgba(99,102,241,0.2)]
                transition-all duration-700 cursor-default`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={`absolute inset-0 ${ROLE_META[0].glowColor} pointer-events-none`} />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
              
              <div className="relative z-10 p-8 flex items-start gap-6">
                <div className={`w-14 h-14 rounded-2xl ${ROLE_META[0].iconBg} flex items-center justify-center shrink-0
                  border border-indigo-400/20 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                  <Shield className={`w-6 h-6 ${ROLE_META[0].color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest
                      ${ROLE_META[0].iconBg} ${ROLE_META[0].color} border ${ROLE_META[0].accent}`}>
                      CO-HOST
                    </span>
                  </div>
                  <h4 className="text-xl font-extrabold text-brand-navy dark:text-white mb-2 tracking-tight">Edit Rights</h4>
                  <p className="text-sm text-grey-500 dark:text-grey-400 leading-relaxed font-medium">
                    Help manage the event — edit itineraries, activities, and members — without deletion rights.
                  </p>
                </div>
                {/* Access bar */}
                <div className="shrink-0 flex flex-col items-end gap-2 pt-1.5">
                  <span className="text-[10px] text-grey-400 font-bold uppercase tracking-widest">Access</span>
                  <div className="w-24 h-2 rounded-full bg-slate-200/60 dark:bg-white/8 overflow-hidden p-0.5">
                    <motion.div
                      className="h-full rounded-full bg-indigo-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${ACCESS_LEVELS[1]}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                  <span className="text-[10px] font-extrabold text-indigo-400">{ACCESS_LEVELS[1]}%</span>
                </div>
              </div>
            </motion.div>

            {/* MEMBER + NON-MEMBER side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">

              {/* MEMBER */}
              <motion.div
                className={`group relative rounded-[2rem] overflow-hidden
                  border ${ROLE_META[1].accent}
                  bg-white/70 dark:bg-[#141e35]/85
                  backdrop-blur-2xl
                  shadow-[0_30px_70px_-15px_rgba(3,20,73,0.1),0_15px_30px_-10px_rgba(3,20,73,0.06)]
                  dark:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)]
                  hover:-translate-y-1.5 hover:shadow-[0_45px_90px_-15px_rgba(52,211,153,0.18)]
                  transition-all duration-700 cursor-default`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`absolute inset-0 ${ROLE_META[1].glowColor} pointer-events-none`} />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest
                      ${ROLE_META[1].iconBg} ${ROLE_META[1].color} border ${ROLE_META[1].accent}`}>
                      MEMBER
                    </span>
                    <div className={`w-10 h-10 rounded-xl ${ROLE_META[1].iconBg} flex items-center justify-center border ${ROLE_META[1].accent} group-hover:rotate-12 transition-transform duration-500`}>
                      <Users className={`w-5 h-5 ${ROLE_META[1].color}`} />
                    </div>
                  </div>
                  <h4 className="text-lg font-extrabold text-brand-navy dark:text-white mb-2.5 tracking-tight">View & Participate</h4>
                  <p className="text-[13px] text-grey-500 dark:text-grey-400 leading-relaxed flex-1 font-medium">
                    See all event details, join chats, RSVP, and engage with checklists and activities.
                  </p>
                  <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-white/[0.08]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-grey-400 font-bold uppercase tracking-widest">Access</span>
                      <span className="text-[10px] font-extrabold text-emerald-400">{ACCESS_LEVELS[2]}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-200/60 dark:bg-white/8 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-emerald-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${ACCESS_LEVELS[2]}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* NON-MEMBER */}
              <motion.div
                className={`group relative rounded-[2rem] overflow-hidden
                  border ${ROLE_META[2].accent}
                  bg-white/55 dark:bg-[#141e35]/65
                  backdrop-blur-2xl
                  shadow-[0_20px_50px_-15px_rgba(3,20,73,0.08)]
                  dark:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.3)]
                  hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-15px_rgba(3,20,73,0.12)]
                  transition-all duration-700 cursor-default`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`absolute inset-0 ${ROLE_META[2].glowColor} pointer-events-none`} />

                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest
                      bg-slate-200/50 dark:bg-white/8 text-grey-500 dark:text-grey-400
                      border border-slate-300/40 dark:border-white/10">
                      NON-MEMBER
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100/80 dark:bg-white/6 flex items-center justify-center
                      border border-slate-300/30 dark:border-white/10 group-hover:scale-110 transition-transform duration-500">
                      <Eye className="w-5 h-5 text-grey-400 dark:text-grey-500" />
                    </div>
                  </div>
                  <h4 className="text-lg font-extrabold text-brand-navy dark:text-white mb-2.5 tracking-tight">Limited Preview</h4>
                  <p className="text-[13px] text-grey-500 dark:text-grey-400 leading-relaxed flex-1 font-medium">
                    Discover the event and send a join request. Great for public events and open trips.
                  </p>
                  <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-white/[0.08]">
                    <div className="flex items-center gap-2 text-[11px] text-grey-500 font-bold group-hover:text-brand-coral transition-colors">
                      <ArrowRight className="w-4 h-4 text-brand-coral animate-bounce-x" />
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
