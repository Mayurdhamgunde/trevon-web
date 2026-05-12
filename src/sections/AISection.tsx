import { Container } from '../components/Container';
import { Badge } from '../components/Badge';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import {
  Sparkles, MapPin, Calendar, Users,
  DollarSign, Clock, CheckCircle2, Bot, Send, Zap,
} from 'lucide-react';

const useTypingEffect = (text: string, speed: number, active: boolean) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) return;
    setDisplayed('');
    setDone(false);
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { setDone(true); clearInterval(iv); }
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed, active]);

  return { displayed, done };
};

const steps = [
  { day: 'Day 1', title: 'Arrival & Beach Yoga', time: '9:00 AM', icon: '🧘', ok: true },
  { day: 'Day 2', title: 'Team Workshop', time: '10:00 AM', icon: '🏄', ok: true },
  { day: 'Day 3', title: 'Farewell Dinner', time: '7:00 PM', icon: '🍽️', ok: false },
];
const locs = [
  { name: 'Taj Exotica Resort', tag: 'Hotel', color: 'text-brand-coral' },
  { name: 'Calangute Beach', tag: 'Venue', color: 'text-sky-400' },
  { name: 'Spice Garden', tag: 'Dining', color: 'text-emerald-400' },
];
const collabs = [
  { i: 'R', bg: 'bg-brand-coral' },
  { i: 'S', bg: 'bg-sky-500' },
  { i: 'P', bg: 'bg-emerald-500' },
  { i: 'M', bg: 'bg-violet-500' },
];

const PROMPT = 'Plan a 3-day wellness retreat in Goa for 15 people.';
const RESPONSE = "I've generated a full itinerary with venues, budget breakdown, team assignments, and booking links for your 3-day Goa retreat.";

export const AISection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  const [started, setStarted] = useState(false);
  const [showPanels, setShowPanels] = useState(false);
  const [showDone, setShowDone] = useState(false);

  const { displayed: promptText, done: promptDone } = useTypingEffect(PROMPT, 38, started);
  const { displayed: respText, done: respDone } = useTypingEffect(RESPONSE, 22, promptDone);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setStarted(true), 400);
    return () => clearTimeout(t);
  }, [inView]);

  useEffect(() => {
    if (!promptDone) return;
    const t = setTimeout(() => setShowPanels(true), 400);
    return () => clearTimeout(t);
  }, [promptDone]);

  useEffect(() => {
    if (!respDone) return;
    const t = setTimeout(() => setShowDone(true), 300);
    return () => clearTimeout(t);
  }, [respDone]);

  return (
    <section id="ai" className="py-32 relative overflow-hidden" ref={ref}>

      {/* ── Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light mode: soft radial ambient gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-600/[0.03] dark:via-indigo-600/8 to-transparent" />
        {/* Top-left coral bloom — visible in light, subtle in dark */}
        <div className="absolute -top-1/4 -left-1/4 w-[700px] h-[700px]
          bg-brand-coral/[0.07] dark:bg-indigo-600/12 rounded-full blur-[160px] animate-orb-drift" />
        {/* Bottom-right navy haze */}
        <div className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px]
          bg-brand-navy/[0.05] dark:bg-violet-700/10 rounded-full blur-[160px] animate-orb-drift-r" />
        {/* Center soft warm glow — light mode focal bloom */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2
          w-[600px] h-[350px] bg-brand-orange/[0.04] dark:bg-slate-500/6 rounded-full blur-[120px]" />
        {/* Bottom edge vignette */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2
          w-[900px] h-[180px] bg-indigo-900/[0.04] dark:bg-indigo-800/10 rounded-full blur-[80px]" />
      </div>

      <Container>
        {/* ── Header ── */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <Badge variant="subtle" className="mb-5 shadow-sm">TrevAI Assistant</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-[1.1] tracking-tight">
            <span className="text-brand-navy dark:text-white">Watch AI plan your trip</span><br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral via-brand-orange to-yellow-400"
              style={{ filter: 'drop-shadow(0 0 30px rgba(254,105,109,0.25))' }}
            >
              in real time.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-grey-500 dark:text-grey-400 max-w-2xl mx-auto leading-relaxed font-medium">
            One sentence is all it takes. TrevAI builds a complete plan —{' '}
            <span className="text-brand-navy dark:text-white font-semibold">schedule, budget, team, venues</span> — instantly.
          </p>
        </motion.div>

        {/* ── Workspace card ── */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          whileHover={{ y: -5, transition: { duration: 0.5, ease: 'easeOut' } }}
        >
          {/* Glow ring — indigo/blue, not orange */}
          <div className="absolute -inset-px rounded-[2.5rem]
            bg-gradient-to-br from-indigo-500/20 via-blue-500/10 to-violet-500/20
            blur-xl opacity-50 dark:opacity-70 pointer-events-none" />

          <div className="rounded-[2.5rem] relative overflow-hidden
            border border-white/[0.07]
            shadow-2xl shadow-black/10 dark:shadow-black/60
            bg-white/80 dark:bg-[#0d1525]
            backdrop-blur-xl">

            {/* Inner orbs — cool toned */}
            <div className="absolute -top-28 -right-28 w-[420px] h-[420px]
              bg-indigo-500/8 dark:bg-indigo-500/14 rounded-full blur-3xl pointer-events-none animate-orb-drift" />
            <div className="absolute -bottom-28 -left-28 w-[420px] h-[420px]
              bg-violet-600/6 dark:bg-violet-600/12 rounded-full blur-3xl pointer-events-none animate-orb-drift-r" />
            {/* Top shimmer — subtle indigo */}
            <div className="absolute top-0 inset-x-0 h-px
              bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />

            <div className="relative z-10 p-6 md:p-8">
              {/* Window chrome */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="text-xs font-mono text-grey-400 ml-3">TrevAI Workspace</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  AI Active
                </div>
              </div>

              {/* 3-column layout */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-4">

                {/* ── LEFT: Chat ── */}
                <div className="flex flex-col gap-2.5">
                  <motion.div
                    className="rounded-2xl p-2.5 bg-white/60 dark:bg-[#141e35]/90 border border-slate-200/50 dark:border-white/[0.07] backdrop-blur-md shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-brand-navy dark:bg-white/10 flex items-center justify-center text-xs font-bold text-white shrink-0">
                        Me
                      </div>
                      <p className="text-sm text-brand-navy dark:text-grey-200 leading-relaxed min-h-[1.5rem]">
                        {promptText}
                        {!promptDone && started && (
                          <span className="inline-block w-0.5 h-4 bg-brand-coral ml-0.5 animate-pulse" />
                        )}
                      </p>
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    {promptDone && (
                      <motion.div
                        className="rounded-2xl p-2.5 bg-brand-coral/[0.06] dark:bg-[#1e1525]/90 border border-brand-coral/20"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="flex gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-coral to-brand-orange flex items-center justify-center shrink-0 shadow-sm">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            {!respText && (
                              <div className="flex gap-1 pt-2">
                                {[0, 150, 300].map(d => (
                                  <span key={d} className="w-2 h-2 rounded-full bg-brand-coral/60 animate-bounce" style={{ animationDelay: `${d}ms` }} />
                                ))}
                              </div>
                            )}
                            <p className="text-sm text-brand-navy dark:text-grey-200 leading-relaxed min-h-[1.5rem]">
                              {respText}
                              {!respDone && respText && (
                                <span className="inline-block w-0.5 h-4 bg-brand-coral ml-0.5 animate-pulse" />
                              )}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    className="mt-auto flex flex-col gap-2 pt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {[
                      { Icon: Zap, label: 'Instant generation' },
                      { Icon: MapPin, label: 'Smart venue matching' },
                      { Icon: DollarSign, label: 'Budget optimization' },
                      { Icon: Users, label: 'Team coordination' },
                    ].map(({ Icon, label }, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-grey-500 dark:text-grey-400">
                        <Icon className="w-3.5 h-3.5 text-brand-coral shrink-0" />
                        {label}
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* ── CENTER: Itinerary ── */}
                <motion.div
                  className="rounded-2xl p-3.5 bg-white/60 dark:bg-[#141e35]/90 border border-slate-200/50 dark:border-white/[0.07] backdrop-blur-md shadow-sm"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={showPanels ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-coral" />
                      <span className="text-sm font-bold text-brand-navy dark:text-white">3-Day Itinerary</span>
                    </div>
                    <span className="text-xs bg-brand-coral/10 text-brand-coral px-2 py-0.5 rounded-full font-semibold">Goa</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    {steps.map((step, i) => (
                      <AnimatePresence key={i}>
                        {showPanels && (
                          <motion.div
                            className="flex items-start gap-2 p-2 rounded-xl bg-white/70 dark:bg-[#1a2540]/80 border border-slate-200/40 dark:border-white/[0.06] shadow-sm"
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + i * 0.18, duration: 0.4 }}
                          >
                            <span className="text-lg leading-none mt-0.5">{step.icon}</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2 mb-0.5">
                                <span className="text-[10px] font-bold text-brand-coral uppercase tracking-wide">{step.day}</span>
                                <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-semibold ${step.ok ? 'bg-emerald-400/10 text-emerald-400' : 'bg-yellow-400/10 text-yellow-400'}`}>
                                  {step.ok ? 'confirmed' : 'pending'}
                                </span>
                              </div>
                              <p className="text-[11px] font-semibold text-brand-navy dark:text-white truncate">{step.title}</p>
                              <div className="flex items-center gap-1 mt-1">
                                <Clock className="w-3 h-3 text-grey-400" />
                                <span className="text-[9px] text-grey-400">{step.time}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    ))}
                  </div>

                  <AnimatePresence>
                    {showPanels && !showDone && (
                      <motion.div className="mt-4 flex items-center gap-2 text-xs text-brand-coral"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                        AI optimizing schedule...
                      </motion.div>
                    )}
                    {showDone && (
                      <motion.div className="mt-4 flex items-center gap-2 text-xs text-emerald-400"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Schedule optimized &amp; ready
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* ── RIGHT: Budget + Locations + Team ── */}
                <div className="flex flex-col gap-2.5">
                  <motion.div
                    className="rounded-2xl p-2.5 bg-white/60 dark:bg-[#141e35]/90 border border-slate-200/50 dark:border-white/[0.07] backdrop-blur-md shadow-sm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={showPanels ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <DollarSign className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-bold text-brand-navy dark:text-white">Budget</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-grey-400 mb-1.5">
                      <span>₹3.12L used</span><span>₹4.5L total</span>
                    </div>
                    <div className="h-1.5 bg-grey-100 dark:bg-white/[0.08] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-400 to-brand-orange rounded-full"
                        initial={{ width: 0 }}
                        animate={showPanels ? { width: '69%' } : {}}
                        transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
                      />
                    </div>
                    <p className="text-[11px] text-grey-400 mt-1.5">69% allocated · on track</p>
                  </motion.div>

                  <motion.div
                    className="rounded-2xl p-2.5 bg-white/60 dark:bg-[#141e35]/90 border border-slate-200/50 dark:border-white/[0.07] backdrop-blur-md shadow-sm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={showPanels ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-sky-400" />
                      <span className="text-sm font-bold text-brand-navy dark:text-white">Venues</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      {locs.map((loc, i) => (
                        <motion.div key={i} className="flex items-center justify-between"
                          initial={{ opacity: 0 }}
                          animate={showPanels ? { opacity: 1 } : {}}
                          transition={{ delay: 0.45 + i * 0.1 }}
                        >
                          <span className="text-xs text-brand-navy dark:text-grey-300 font-medium truncate">{loc.name}</span>
                          <span className={`text-[10px] font-semibold ${loc.color} shrink-0 ml-2`}>{loc.tag}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="rounded-2xl p-2.5 bg-white/60 dark:bg-[#141e35]/90 border border-slate-200/50 dark:border-white/[0.07] backdrop-blur-md shadow-sm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={showPanels ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-4 h-4 text-violet-400" />
                      <span className="text-sm font-bold text-brand-navy dark:text-white">Team · 15 members</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {collabs.map((c, i) => (
                        <motion.div key={i}
                          className={`w-8 h-8 rounded-full ${c.bg} flex items-center justify-center text-xs font-bold text-white border-2 border-white/20 shadow-sm`}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={showPanels ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.55 + i * 0.07, type: 'spring', stiffness: 280 }}
                        >
                          {c.i}
                        </motion.div>
                      ))}
                      <motion.div
                        className="w-8 h-8 rounded-full bg-grey-200 dark:bg-white/10 flex items-center justify-center text-[10px] font-bold text-grey-500 dark:text-grey-400 border-2 border-white/20"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={showPanels ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.84, type: 'spring', stiffness: 280 }}
                      >
                        +11
                      </motion.div>
                    </div>
                    <p className="text-[11px] text-grey-400 mt-2">Roles &amp; tasks auto-assigned</p>
                  </motion.div>
                </div>
              </div>

              {/* Bottom prompt bar */}
              <motion.div
                className="mt-8 flex items-center gap-3 rounded-2xl px-3 py-1.5
                  bg-white/60 dark:bg-[#141e35]/90
                  border border-slate-200/50 dark:border-white/[0.07]
                  backdrop-blur-md shadow-sm"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Sparkles className="w-4 h-4 text-brand-coral shrink-0" />
                <span className="text-sm text-grey-400 dark:text-grey-500 flex-1 font-mono truncate">
                  Try: "Plan a destination wedding in Udaipur for 200 guests..."
                </span>
                <button className="flex items-center gap-1.5 bg-gradient-to-r from-brand-coral to-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity shrink-0">
                  <Send className="w-3.5 h-3.5" />
                  Generate
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
