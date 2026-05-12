import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Play, Sparkles, MapPin, Users, Calendar, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 } as const,
    },
  };

  const floatCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        delay,
      } as const,
    }),
  };

  return (
    <section className="relative pt-28 pb-8 md:pt-40 md:pb-16 overflow-hidden min-h-screen flex items-center">
      {/* ======= MULTI-LAYERED BACKGROUND ======= */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Premium Light Mode Gradient Base */}
        <div className="absolute inset-0 bg-[#f8f9fb] dark:bg-[#0b101a]" />

        {/* Soft, warm mesh radial glows for light mode specifically */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(254,105,109,0.08),transparent_50%),radial-gradient(ellipse_at_top_right,rgba(242,153,74,0.1),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(0,37,153,0.05),transparent_50%)] dark:hidden" />

        {/* Subtle dot grid pattern for depth */}
        <div
          className="absolute inset-0 opacity-[0.6] dark:opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--color-brand-navy) 0.5px, transparent 0.5px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Noise texture for premium feel */}
        <div className="absolute inset-0 noise-overlay opacity-[0.4] dark:opacity-[0.15]" />

        {/* Large animated glow orbs with mix-blend-multiply for rich light mode depth */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5], x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 left-[10%] w-[800px] h-[800px] bg-brand-coral/20 dark:bg-brand-coral/15 rounded-full blur-[140px] mix-blend-multiply dark:mix-blend-normal"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4], x: [0, -60, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-32 right-[15%] w-[700px] h-[700px] bg-brand-orange/25 dark:bg-brand-orange/15 rounded-full blur-[140px] mix-blend-multiply dark:mix-blend-normal"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-navy/15 dark:bg-state-info/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal"
        />
        {/* Additional right-side filler orb */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3], x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-brand-coral/20 dark:bg-brand-coral/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal"
        />

        {/* Radial gradient overlay for center focus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(248,249,251,0.6)_80%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,#0b101a_80%)] pointer-events-none" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ======= LEFT COLUMN: TEXT CONTENT ======= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <Badge
                variant="subtle"
                className="mb-6 px-4 py-2 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-sm border-brand-coral/20 dark:border-brand-coral/30"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-coral mr-2" />
                <span className="text-brand-navy dark:text-grey-300 font-semibold">AI-Powered Planning</span>
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[2.75rem] md:text-6xl lg:text-[3.5rem] xl:text-7xl font-extrabold tracking-tight mb-6 text-brand-navy dark:text-white leading-[1.08]"
            >
              Plan trips.{' '}
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-brand-coral via-brand-orange to-brand-coral bg-clip-text text-transparent bg-size-[200%_auto] animate-[gradient-shift_4s_ease-in-out_infinite]">
                  Together.
                </span>
                <motion.span
                  className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-linear-to-r from-brand-coral to-brand-orange rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-slate-700 font-medium dark:text-slate-300 mb-8 max-w-lg leading-relaxed"
            >
              The all-in-one platform for planning events and trips — from weekend getaways to corporate retreats.{' '}
              <span className="font-semibold text-brand-navy dark:text-white">Powered by AI</span>, built for collaboration.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-3.5 mb-8 w-full lg:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="btn-glow w-full sm:w-auto shadow-xl shadow-brand-coral/25 dark:shadow-brand-coral/40 relative overflow-hidden group hover:scale-105 hover:shadow-2xl hover:shadow-brand-coral/60 active:scale-[0.98] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="w-4 h-4 fill-current" />
                  See How It Works
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-shimmer" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white/70 dark:bg-white/5 backdrop-blur-xl hover:bg-slate-50 dark:hover:bg-white/10 border-grey-200/60 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-none hover:scale-105 active:scale-[0.98] transition-all duration-300"
              >
                Download Free &rarr;
              </Button>
            </motion.div>

            {/* Store Buttons */}
            <motion.div id="download" variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 scroll-mt-64">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="https://apps.apple.com/in/app/trevon/id6751788481"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-grey-200/50 dark:border-white/10 px-5 py-3 rounded-2xl shadow-md hover:shadow-lg hover:border-brand-coral/30 dark:hover:border-white/20 transition-all duration-300"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  className="w-6 h-6 object-contain dark:invert"
                  alt="App Store"
                />
                <div className="text-left">
                  <div className="text-[10px] text-grey-500 uppercase font-semibold tracking-wider">Download on the</div>
                  <div className="text-sm font-bold text-brand-navy dark:text-white leading-tight">App Store</div>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="https://play.google.com/store/apps/details?id=com.trevon.travel_on"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-grey-200/50 dark:border-white/10 px-5 py-3 rounded-2xl shadow-md hover:shadow-lg hover:border-brand-coral/30 dark:hover:border-white/20 transition-all duration-300"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                  className="w-6 h-6 object-contain"
                  alt="Google Play"
                />
                <div className="text-left">
                  <div className="text-[10px] text-grey-500 uppercase font-semibold tracking-wider">Get it on</div>
                  <div className="text-sm font-bold text-brand-navy dark:text-white leading-tight">Google Play</div>
                </div>
              </motion.a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mt-8 pt-6 border-t border-grey-200/50 dark:border-white/10 w-full lg:w-auto"
            >
              <div className="flex -space-x-2.5">
                {[
                  'bg-brand-coral',
                  'bg-brand-orange',
                  'bg-state-info',
                  'bg-state-success',
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} border-2 border-white dark:border-[#111827] flex items-center justify-center text-white text-[10px] font-bold`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-xs text-grey-500 dark:text-grey-400 mt-0.5">
                  Loved by <span className="font-bold text-brand-navy dark:text-white">2,000+</span> planners
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ======= RIGHT COLUMN: FLOATING PRODUCT CARDS ======= */}
          <div className="lg:col-span-6 xl:col-span-7 relative hidden lg:flex items-center justify-center min-h-[520px]">
            {/* Ambient glow behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-coral/10 dark:bg-brand-coral/20 rounded-full blur-[80px] animate-pulse-glow" />

            {/* ---- Main Card: AI Itinerary Planner ---- */}
            <motion.div
              custom={0.3}
              variants={floatCardVariants}
              initial="hidden"
              animate="visible"
              className="absolute top-4 left-8 xl:left-16 w-[320px] animate-float z-20"
            >
              <div className="glass-card !border-slate-200/80 dark:!border-white/10 shadow-xl shadow-black/5 rounded-3xl p-5 overflow-hidden relative group hover:scale-105 transition-all duration-300">
                {/* Card glow accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-coral/10 dark:bg-brand-coral/20 rounded-full blur-2xl" />
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-brand-coral to-brand-orange flex items-center justify-center shadow-lg shadow-brand-coral/25">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy dark:text-white">TrevAI Planner</h4>
                    <p className="text-[11px] text-grey-500 dark:text-grey-400">Generating itinerary...</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-coral animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-coral animate-pulse [animation-delay:0.3s]" />
                  </div>
                </div>

                <div className="space-y-2.5 relative z-10">
                  {[
                    { time: 'Day 1', text: 'Arrival & Beach Resort Check-in', icon: MapPin, color: 'text-brand-coral' },
                    { time: 'Day 2', text: 'Morning Yoga & Team Workshop', icon: Users, color: 'text-state-info' },
                    { time: 'Day 3', text: 'Adventure Activities & Farewell', icon: Zap, color: 'text-brand-orange' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-grey-50/80 dark:bg-white/5 rounded-xl px-3 py-2.5 border border-slate-200/70 dark:border-white/5">
                      <item.icon className={`w-4 h-4 ${item.color} shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-bold text-grey-500 dark:text-grey-400 uppercase tracking-wider">{item.time}</div>
                        <div className="text-xs font-semibold text-brand-navy dark:text-white truncate">{item.text}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mt-4 relative z-10">
                  <div className="flex justify-between text-[10px] font-semibold text-grey-500 dark:text-grey-400 mb-1.5">
                    <span>Planning progress</span>
                    <span className="text-brand-coral">78%</span>
                  </div>
                  <div className="h-1.5 bg-grey-100 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-linear-to-r from-brand-coral to-brand-orange rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '78%' }}
                      transition={{ delay: 1.2, duration: 1.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ---- Secondary Card: Collaboration ---- */}
            <motion.div
              custom={0.5}
              variants={floatCardVariants}
              initial="hidden"
              animate="visible"
              className="absolute bottom-12 right-4 xl:right-8 w-[260px] animate-float-delayed z-30"
            >
              <div className="glass-card !border-slate-200/80 dark:!border-white/10 shadow-xl shadow-black/5 rounded-2xl p-4 relative overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-state-info/10 dark:bg-state-info/15 rounded-full blur-xl" />
                <div className="flex items-center gap-2.5 mb-3 relative z-10">
                  <div className="w-8 h-8 rounded-lg bg-state-info/10 dark:bg-state-info/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-state-info" />
                  </div>
                  <h4 className="text-xs font-bold text-brand-navy dark:text-white">Live Collaboration</h4>
                </div>
                <div className="flex items-center gap-2 relative z-10">
                  <div className="flex -space-x-2">
                    {['bg-brand-coral', 'bg-state-info', 'bg-state-success'].map((color, i) => (
                      <div key={i} className={`w-7 h-7 rounded-full ${color} border-2 border-white dark:border-[#1a2332] text-white text-[9px] font-bold flex items-center justify-center`}>
                        {['S', 'M', 'A'][i]}
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-grey-500 dark:text-grey-400">3 members editing</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-state-success animate-pulse" />
                      <span className="text-[10px] font-semibold text-state-success">Live now</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ---- Tertiary Card: Trip Stats ---- */}
            <motion.div
              custom={0.7}
              variants={floatCardVariants}
              initial="hidden"
              animate="visible"
              className="absolute top-8 right-0 xl:right-4 w-[200px] animate-float-slow z-10"
            >
              <div className="glass-card !border-slate-200/80 dark:!border-white/10 shadow-xl shadow-black/5 rounded-2xl p-4 relative overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="absolute top-0 left-0 w-16 h-16 bg-brand-orange/10 dark:bg-brand-orange/15 rounded-full blur-xl" />
                <div className="flex items-center gap-2 mb-3 relative z-10">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/10 dark:bg-brand-orange/20 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-brand-orange" />
                  </div>
                  <h4 className="text-xs font-bold text-brand-navy dark:text-white">Goa Retreat</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 relative z-10">
                  <div className="bg-grey-50/80 dark:bg-white/5 rounded-lg p-2 text-center border border-slate-200/70 dark:border-white/5">
                    <div className="text-lg font-extrabold text-brand-navy dark:text-white">3</div>
                    <div className="text-[9px] font-semibold text-grey-500 dark:text-grey-400 uppercase">Days</div>
                  </div>
                  <div className="bg-grey-50/80 dark:bg-white/5 rounded-lg p-2 text-center border border-slate-200/70 dark:border-white/5">
                    <div className="text-lg font-extrabold text-brand-coral">15</div>
                    <div className="text-[9px] font-semibold text-grey-500 dark:text-grey-400 uppercase">People</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ---- Small floating notification pill ---- */}
            <motion.div
              custom={0.9}
              variants={floatCardVariants}
              initial="hidden"
              animate="visible"
              className="absolute bottom-24 left-[2%] z-20 animate-float-slow"
            >
              <div className="flex items-center gap-2 glass-card shadow-xl shadow-black/15 rounded-full px-4 py-2 hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500">
                <div className="w-6 h-6 rounded-full bg-brand-coral/10 flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-brand-coral" />
                </div>
                <span className="text-xs font-bold text-brand-navy dark:text-white">AI Suggestion:</span>
                <span className="text-[10px] font-semibold text-brand-coral">Beachfront Resort</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
