import { Container } from '../components/Container';
import { motion } from 'framer-motion';
import { Zap, Users, Shield, MapPin, MessageSquare, RefreshCw } from 'lucide-react';

/* ─────────────────────────────────────────────
   Features list — left column
───────────────────────────────────────────── */
const features = [
  {
    icon: Zap,
    title: 'AI-Powered Planning',
    desc: 'Smart itineraries in seconds.',
    color: 'text-brand-coral',
    bg: 'bg-brand-coral/10 dark:bg-brand-coral/10',
  },
  {
    icon: Users,
    title: 'Collaborate Easily',
    desc: 'Plan together with your team in real time.',
    color: 'text-brand-orange',
    bg: 'bg-brand-orange/10 dark:bg-brand-orange/10',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    desc: 'Your data is encrypted and 100% private.',
    color: 'text-state-info',
    bg: 'bg-state-info/10 dark:bg-state-info/20',
  },
];

/* ─────────────────────────────────────────────
   Floating feature pills — around phones
───────────────────────────────────────────── */
const floatingPills = [
  {
    icon: MapPin,
    title: 'Itineraries',
    subtitle: 'Organized perfectly',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10 dark:bg-purple-500/20',
    position: 'top-[8%] left-[8%]',
    delay: 0.6,
  },
  {
    icon: Shield,
    title: 'Budget Tracker',
    subtitle: 'Stay on track',
    color: 'text-state-success',
    bg: 'bg-state-success/10 dark:bg-state-success/20',
    position: 'top-[14%] right-[8%]',
    delay: 0.8,
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    subtitle: 'Plan together seamlessly',
    color: 'text-state-info',
    bg: 'bg-state-info/10 dark:bg-state-info/20',
    position: 'bottom-[4%] left-[-15%]',
    delay: 1.0,
    showAvatars: true,
  },
  {
    icon: MessageSquare,
    title: 'Smart Suggestions',
    subtitle: 'AI recommendations',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10 dark:bg-purple-500/20',
    position: 'bottom-[-2%] left-[38%]',
    delay: 1.1,
  },
  {
    icon: RefreshCw,
    title: 'Real-time Updates',
    subtitle: 'Always in sync.',
    color: 'text-brand-coral',
    bg: 'bg-brand-coral/10 dark:bg-brand-coral/20',
    position: 'bottom-[12%] right-[2%]',
    delay: 1.2,
  },
];

/* ─────────────────────────────────────────────
   Social proof avatar colours
───────────────────────────────────────────── */
const avatarColors = ['bg-brand-coral', 'bg-brand-orange', 'bg-state-info', 'bg-state-success', 'bg-purple-500'];
const avatarLabels = ['A', 'B', 'C', 'D', 'E'];

/* ─────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 280, damping: 22 } },
};

const phoneVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.88 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 180, damping: 22, delay },
  }),
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 220, damping: 20, delay },
  }),
};

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export const CTA = () => {
  return (
    <section id="download" className="relative py-16 md:py-24 overflow-hidden">
      <Container className="relative z-10">
        {/* ── HUGE ROUNDED WRAPPER (Matches Reference) ── */}
        <div className="rounded-[2.5rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden
          bg-white dark:bg-gradient-to-br dark:from-[#09182d] dark:via-[#071326] dark:to-[#040816]
          border border-grey-200 dark:border-white/[0.03]
          shadow-[0_20px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.02)]"
        >
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none mix-blend-overlay z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

          {/* Faint grid texture removed as requested */}

          {/* Edge Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#000000_100%)] opacity-0 dark:opacity-10 pointer-events-none z-0 mix-blend-multiply" />

          {/* Ambient electric blue lighting for dark mode */}
          <div className="absolute top-[10%] right-[20%] w-[600px] h-[600px] bg-[#3b82ff]/10 dark:bg-[#3b82ff]/15 mix-blend-screen rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-[#244dff]/10 dark:bg-[#244dff]/20 mix-blend-screen rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute top-[40%] left-[5%] w-[500px] h-[500px] bg-[#4f46e5]/5 dark:bg-[#4f46e5]/10 mix-blend-screen rounded-full blur-[120px] pointer-events-none z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            {/* ══════════════════════════════════════
                LEFT COLUMN — Text + Features + CTAs
            ══════════════════════════════════════ */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left z-20"
            >
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6
                  bg-white/80 dark:bg-white/5
                  border border-grey-200/80 dark:border-white/10
                  shadow-sm"
                >
                  <span className="text-brand-coral text-sm">🚀</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-coral">
                    Get Started Today
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl xl:text-[3.5rem] font-extrabold tracking-tight leading-[1.05] mb-6 text-brand-navy dark:text-white"
              >
                Your next trip is{' '}
                <br className="hidden md:block" />
                <span className="text-brand-coral">waiting to be <br className="hidden md:block" /> planned</span>
              </motion.h2>

              {/* Sub-copy */}
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-grey-600 dark:text-grey-400 mb-8 max-w-md leading-relaxed"
              >
                Download Trevon for free and start planning your first event in minutes.
              </motion.p>

              {/* Feature grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 w-full">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="flex flex-col gap-4 items-start group"
                  >
                    <div className="relative w-11 h-11 rounded-full bg-white dark:bg-[#111624] border border-grey-200 dark:border-white/5 flex items-center justify-center shadow-lg dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_4px_15px_rgba(0,0,0,0.5)]">
                      <f.icon className={`w-5 h-5 ${f.color} drop-shadow-[0_0_8px_currentColor]`} />
                      <div className={`absolute inset-0 rounded-full ${f.bg} opacity-50 blur-md -z-10 transition-opacity group-hover:opacity-100`} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-navy dark:text-white leading-tight mb-1.5">{f.title}</p>
                      <p className="text-[11px] text-grey-500 dark:text-grey-400 leading-relaxed pr-2">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Store buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                {/* App Store */}
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://apps.apple.com/in/app/trevon/id6751788481"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3
                    bg-white dark:bg-[#111624]
                    border border-grey-200 dark:border-white/5
                    px-6 py-3.5 rounded-2xl
                    shadow-sm dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.4)]
                    hover:shadow-md dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_25px_rgba(255,255,255,0.05)]
                    transition-all duration-300"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                    className="w-6 h-6 object-contain dark:invert"
                    alt="App Store"
                  />
                  <div className="text-left">
                    <div className="text-[9px] text-grey-500 uppercase font-semibold tracking-wider">Download on the</div>
                    <div className="text-sm font-bold text-brand-navy dark:text-white leading-tight mt-0.5">App Store</div>
                  </div>
                </motion.a>

                {/* Google Play */}
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://play.google.com/store/apps/details?id=com.trevon.travel_on"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3
                    bg-white dark:bg-[#111624]
                    border border-grey-200 dark:border-white/5
                    px-6 py-3.5 rounded-2xl
                    shadow-sm dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.4)]
                    hover:shadow-md dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_25px_rgba(255,255,255,0.05)]
                    transition-all duration-300"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                    className="w-6 h-6 object-contain"
                    alt="Google Play"
                  />
                  <div className="text-left">
                    <div className="text-[9px] text-grey-500 uppercase font-semibold tracking-wider">Get it on</div>
                    <div className="text-sm font-bold text-brand-navy dark:text-white leading-tight mt-0.5">Google Play</div>
                  </div>
                </motion.a>
              </motion.div>

              {/* Social proof */}
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {avatarColors.slice(0, 4).map((color, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full ${color} border-2 border-white dark:border-[#111827]
                        text-white text-[10px] font-bold flex items-center justify-center shadow-sm`}
                    >
                      {avatarLabels[i]}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-grey-600 dark:text-grey-400 font-medium max-w-[200px]">
                  Trusted by{' '}
                  <span className="font-bold text-brand-navy dark:text-white">10,000+</span>{' '}
                  event planners to create unforgettable experiences.
                </p>
              </motion.div>
            </motion.div>

            {/* ══════════════════════════════════════
                RIGHT COLUMN — Phones & Pedestal
            ══════════════════════════════════════ */}
            <div className="lg:col-span-7 relative hidden lg:flex items-center justify-center min-h-[640px] xl:min-h-[700px] w-full">

              {/* Massive radial glow behind central cluster (Electric Blue Focus) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[700px] h-[700px] bg-[#3b82ff]/10 dark:bg-[#3b82ff]/15 blur-[150px] rounded-full pointer-events-none z-0" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[400px] h-[400px] bg-[#4f46e5]/10 dark:bg-[#4f46e5]/15 blur-[100px] rounded-full pointer-events-none z-0" />

              {/* Background glowing orbits (Cyan/Blue neon lines) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-[55%] w-[450px] h-[650px] rounded-[100%] border-[1.5px] border-[#3b82ff]/40 -rotate-12 z-0 shadow-[0_0_15px_rgba(59,130,255,0.4)_inset,0_0_15px_rgba(59,130,255,0.4)] [mask-image:linear-gradient(to_bottom,black_20%,transparent_80%)]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-[45%] w-[600px] h-[400px] rounded-[100%] border-[1.5px] border-[#4f46e5]/40 rotate-12 z-0 shadow-[0_0_15px_rgba(79,70,229,0.4)_inset,0_0_15px_rgba(79,70,229,0.4)] [mask-image:linear-gradient(to_right,transparent_10%,black_50%,transparent_90%)]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[700px] h-[700px] rounded-[100%] border-[1px] border-white/10 dark:border-white/5 z-0" />

              {/* Orbit Glowing Dots (Stars with cross flares) */}
              <GlowingDot colorClass="bg-[#5b7cff] text-[#5b7cff]" position="top-[10%] right-[25%]" delay="0s" size="w-2 h-2" />
              <GlowingDot colorClass="bg-purple-400 text-purple-400" position="top-[35%] left-[8%]" delay="1s" size="w-1.5 h-1.5" />
              <GlowingDot colorClass="bg-cyan-400 text-cyan-400" position="bottom-[15%] right-[15%]" delay="2s" size="w-2.5 h-2.5" />
              <GlowingDot colorClass="bg-[#e879f9] text-[#e879f9]" position="top-[55%] right-[2%]" delay="0.5s" size="w-1.5 h-1.5" />
              <GlowingDot colorClass="bg-[#244dff] text-[#244dff]" position="bottom-[25%] left-[10%]" delay="1.5s" size="w-2 h-2" />
              <GlowingDot colorClass="bg-[#3b82ff] text-[#3b82ff]" position="top-[15%] left-[30%]" delay="2.5s" size="w-1 h-1" />

              {/* ── 3D Cinematic Pedestal ── */}
              <div className="absolute bottom-[2%] xl:bottom-[4%] left-1/2 -translate-x-1/2 w-[550px] xl:w-[650px] h-[160px] pointer-events-none z-10">
                {/* Atmospheric Fog */}
                <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[150px] bg-[#244dff]/20 dark:bg-[#244dff]/30 blur-[60px] rounded-[100%]" />
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[100px] bg-white/5 dark:bg-[#4f46e5]/10 blur-[40px] rounded-[100%]" />
                
                {/* Tier 3 (Bottom Layered Ring) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[120px] xl:h-[140px] rounded-[100%] 
                  border-[2px] border-[#3b82ff]/20 dark:border-[#3b82ff]/20
                  bg-gradient-to-b from-white/60 to-transparent dark:from-[#040816]/90 dark:to-transparent
                  shadow-[0_30px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.8)] blur-[0.5px]" />
                
                {/* Tier 2 (Middle Layered Ring) */}
                <div className="absolute bottom-[20px] xl:bottom-[24px] left-1/2 -translate-x-1/2 w-[85%] h-[100px] xl:h-[110px] rounded-[100%] 
                  border-[2px] border-[#4f46e5]/30 dark:border-[#4f46e5]/30
                  bg-gradient-to-b from-white/80 to-[#244dff]/10 dark:from-[#071326]/90 dark:to-[#040816]/80
                  shadow-[0_20px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)]" />
                
                {/* Tier 1 (Top Surface - The glowing rim with subtle magenta highlight) */}
                <div className="absolute bottom-[40px] xl:bottom-[48px] left-1/2 -translate-x-1/2 w-[70%] h-[75px] xl:h-[85px] rounded-[100%] 
                  border-[3px] border-[#5b7cff] dark:border-[#5b7cff]
                  bg-white dark:bg-[#09182d]
                  shadow-[0_0_40px_rgba(59,130,255,0.3),inset_0_0_30px_rgba(59,130,255,0.2)] dark:shadow-[0_0_60px_rgba(91,124,255,0.4),inset_0_0_40px_rgba(168,85,247,0.4)]" />
              </div>

              {/* ── CENTRAL PHONE CLUSTER (Dense, overlapping, cinematic) ── */}

              {/* Phone 1: Left Onboarding (Lowest depth, pushed backward) */}
              <motion.div
                custom={0.4}
                variants={phoneVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute bottom-[24%] left-[16%] w-[145px] xl:w-[155px] z-20 animate-float-slow"
                style={{ transformOrigin: 'bottom center' }}
              >
                <div className="blur-[1px] opacity-90 dark:opacity-80">
                  <PhoneFrame screenshot="/Splash screen 5.png" alt="Welcome" tilt={-14} shadow />
                </div>
              </motion.div>

              {/* Phone 2: Main Home/Dashboard (Front-left focal device, highest visual importance) */}
              <motion.div
                custom={0.2}
                variants={phoneVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute bottom-[16%] left-[28%] w-[165px] xl:w-[180px] z-40 animate-float"
                style={{ transformOrigin: 'bottom center' }}
              >
                <PhoneFrame screenshot="/Homepage (1).png" alt="Trips List" tilt={-4} shadow />
              </motion.div>

              {/* Phone 3: Wedding/Event (Center Hero Device, tallest, closest to viewer) */}
              <motion.div
                custom={0.1}
                variants={phoneVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute bottom-[20%] left-[46%] w-[175px] xl:w-[190px] z-50 animate-float-delayed"
                style={{ transformOrigin: 'bottom center' }}
              >
                <PhoneFrame screenshot="/Event Details 1.png" alt="Event Details" tilt={3} shadow tallScreenshot />
              </motion.div>

              {/* Phone 4: Itinerary (Right-side support, slightly behind center) */}
              <motion.div
                custom={0.3}
                variants={phoneVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute bottom-[22%] left-[66%] w-[150px] xl:w-[160px] z-30 animate-float-slow"
                style={{ transformOrigin: 'bottom center' }}
              >
                <div className="blur-[0.5px]">
                  <PhoneFrame screenshot="/Event Details 2.png" alt="Haldi Details" tilt={12} shadow />
                </div>
              </motion.div>

              {/* ── Floating feature pills ── */}
              {floatingPills.map((pill) => (
                <motion.div
                  key={pill.title}
                  custom={pill.delay}
                  variants={pillVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`absolute ${pill.position} z-50`}
                >
                  <div className="flex items-center gap-3
                    bg-white dark:bg-[#111624]
                    border border-grey-200 dark:border-white/5
                    rounded-2xl px-3.5 py-3
                    shadow-xl dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.6)]
                    min-w-[150px]
                    hover:scale-105 transition-transform duration-300"
                  >
                    <div className="relative w-8 h-8 rounded-[10px] bg-white dark:bg-[#1a2133] border border-grey-200 dark:border-white/5 flex items-center justify-center shrink-0 dark:shadow-[inset_0_0_10px_rgba(255,255,255,0.02)]">
                      <pill.icon className={`w-4 h-4 ${pill.color} drop-shadow-[0_0_6px_currentColor]`} />
                      <div className={`absolute inset-0 rounded-[10px] ${pill.bg} opacity-50 blur-md -z-10`} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-brand-navy dark:text-white leading-tight">{pill.title}</p>
                      <p className="text-[9px] text-grey-500 dark:text-grey-400 mt-[1px]">{pill.subtitle}</p>
                      {pill.showAvatars && (
                        <div className="flex -space-x-1.5 mt-1.5">
                          {avatarColors.slice(0, 4).map((c, i) => (
                            <div
                              key={i}
                              className={`w-4 h-4 rounded-full ${c} border border-white dark:border-[#1f2937]
                                text-white text-[7px] font-bold flex items-center justify-center`}
                            >
                              {avatarLabels[i]}
                            </div>
                          ))}
                          <div className="w-4 h-4 rounded-full bg-grey-200 dark:bg-grey-700
                            border border-white dark:border-[#1f2937]
                            text-grey-600 dark:text-grey-300 text-[7px] font-bold flex items-center justify-center">
                            +12
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ─────────────────────────────────────────────
   Phone Frame sub-component
───────────────────────────────────────────── */
interface PhoneFrameProps {
  screenshot: string;
  alt: string;
  tilt?: number;
  shadow?: boolean;
  tallScreenshot?: boolean;
}

const PhoneFrame = ({ screenshot, alt, tilt = 0, shadow = false, tallScreenshot = false }: PhoneFrameProps) => (
  <div
    className="relative"
    style={{ transform: `rotate(${tilt}deg)` }}
  >
    {/* Shadow beneath phone falling on pedestal */}
    {shadow && (
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[70%] h-4
        bg-black/30 dark:bg-black/80 rounded-[100%] blur-[8px] z-0" />
    )}

    {/* Physical Hardware Buttons */}
    {/* Action/Mute Button */}
    <div className="absolute top-[18%] -left-[1.5px] w-[2px] h-3 bg-[#3f3f46] dark:bg-[#3f3f46] rounded-l-sm shadow-sm z-0" />
    {/* Volume Up */}
    <div className="absolute top-[24%] -left-[1.5px] w-[2px] h-5 bg-[#3f3f46] dark:bg-[#3f3f46] rounded-l-sm shadow-sm z-0" />
    {/* Volume Down */}
    <div className="absolute top-[32%] -left-[1.5px] w-[2px] h-5 bg-[#3f3f46] dark:bg-[#3f3f46] rounded-l-sm shadow-sm z-0" />
    {/* Power Button */}
    <div className="absolute top-[28%] -right-[1.5px] w-[2px] h-7 bg-[#3f3f46] dark:bg-[#3f3f46] rounded-r-sm shadow-sm z-0" />

    {/* Phone body (outer shiny metallic rim) */}
    <div className="relative rounded-[1.85rem] overflow-hidden z-10
      bg-gradient-to-br from-[#52525b] via-[#27272a] to-[#09090b] dark:from-[#3f3f46] dark:via-[#09090b] dark:to-[#000000]
      p-[2.5px] xl:p-[3.5px]
      shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.2),0_20px_50px_rgba(0,0,0,0.3)] 
      dark:shadow-[inset_0_0_2px_rgba(255,255,255,0.4),0_20px_50px_rgba(0,0,0,0.9)]"
    >
      {/* Inner black bezel */}
      <div className="relative rounded-[1.7rem] overflow-hidden bg-[#09090b] p-[0.5px] shadow-[inset_0_0_8px_rgba(0,0,0,1)]">
        
        {/* Subtle bezel highlight */}
        <div className="absolute inset-0 rounded-[1.7rem] border border-white/5 pointer-events-none" />

        {/* Screen container */}
        <div className="relative w-full aspect-[1/2.16] rounded-[1.45rem] overflow-hidden bg-black border-[0.5px] border-black">
          
          <img
            src={screenshot}
            alt={alt}
            className={`absolute inset-0 w-full h-full ${tallScreenshot ? 'object-cover object-top' : 'object-[100%_100%]'}`}
            loading="lazy"
          />
          
          {/* Glass glare effect 1: Top radial highlight */}
          <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/[0.15] dark:from-white/[0.12] to-transparent pointer-events-none z-30 mix-blend-overlay" />
          
          {/* Glass glare effect 2: Sharp diagonal cut */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/[0.08] dark:to-white/[0.1] pointer-events-none z-30" />
        </div>
      </div>
    </div>
  </div>
);

const GlowingDot = ({ colorClass, position, delay, size = 'w-2 h-2' }: { colorClass: string, position: string, delay: string, size?: string }) => (
  <div className={`absolute ${position} z-10 animate-pulse`} style={{ animationDelay: delay }}>
    <div className={`${size} rounded-full ${colorClass} shadow-[0_0_15px_4px_currentColor]`} />
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-[1px] ${colorClass} opacity-60 blur-[0.5px]`} />
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-[1px] ${colorClass} opacity-60 blur-[0.5px]`} />
  </div>
);
