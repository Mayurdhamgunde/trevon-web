import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft, Sun, Moon, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../utils/cn';

interface DashboardHeaderProps {
  className?: string;
}

/**
 * Sticky top-bar for the Trevon Management Portal.
 * Shows branding, live sync status, theme toggle, and admin avatar.
 */
export function DashboardHeader({ className }: DashboardHeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'sticky top-0 z-50 w-full',
        'border-b border-white/10 dark:border-white/[0.06]',
        className
      )}
      style={{
        background:
          theme === 'dark'
            ? 'rgba(11, 16, 26, 0.82)'
            : 'rgba(255, 255, 255, 0.80)',
        backdropFilter: 'blur(28px) saturate(200%)',
        WebkitBackdropFilter: 'blur(28px) saturate(200%)',
        boxShadow:
          theme === 'dark'
            ? '0 1px 0 0 rgba(255,255,255,0.06), 0 8px 32px -8px rgba(0,0,0,0.45)'
            : '0 1px 0 0 rgba(3,20,73,0.08), 0 8px 32px -8px rgba(3,20,73,0.08)',
      }}
    >
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
        {/* ── Left: Back button + Brand ── */}
        <div className="flex items-center gap-3 min-w-0">
          <Link
            to="/"
            aria-label="Back to home"
            className={cn(
              'flex items-center justify-center w-9 h-9 rounded-xl shrink-0',
              'text-grey-500 dark:text-grey-400',
              'hover:text-brand-navy dark:hover:text-white',
              'hover:bg-grey-100 dark:hover:bg-white/10',
              'border border-grey-200 dark:border-white/10',
              'transition-all duration-200'
            )}
          >
            <ArrowLeft size={16} strokeWidth={2.5} />
          </Link>

          <div className="flex items-center gap-2.5 min-w-0">
            <div
              className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
              style={{
                background: 'linear-gradient(135deg, #031449 0%, #002599 100%)',
                boxShadow: '0 2px 12px rgba(3, 20, 73, 0.35)',
              }}
            >
              <ShieldCheck size={16} className="text-white" strokeWidth={2} />
            </div>

            <div className="min-w-0">
              <h1 className="text-sm font-bold text-brand-navy dark:text-white tracking-tight leading-none truncate">
                Trevon Management Portal
              </h1>
              <p className="text-[11px] text-grey-500 dark:text-grey-400 leading-none mt-0.5 hidden sm:block">
                Analytics &amp; Business Intelligence
              </p>
            </div>
          </div>
        </div>

        {/* ── Right: Status pill, theme toggle, avatar ── */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Live Sync Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className={cn(
              'hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full',
              'text-xs font-semibold',
              'border border-emerald-200/60 dark:border-emerald-500/20',
              'bg-emerald-50 dark:bg-emerald-500/10',
              'text-emerald-700 dark:text-emerald-400'
            )}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <Wifi size={11} strokeWidth={2.5} />
            <span>Supabase Live Sync</span>
          </motion.div>

          {/* Mobile-only dot indicator */}
          <div className="sm:hidden flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">Live</span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-5 bg-grey-200 dark:bg-white/10" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className={cn(
              'flex items-center justify-center w-9 h-9 rounded-xl',
              'text-grey-500 dark:text-grey-400',
              'hover:text-brand-navy dark:hover:text-white',
              'hover:bg-grey-100 dark:hover:bg-white/10',
              'border border-grey-200 dark:border-white/10',
              'transition-all duration-200'
            )}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Admin Avatar */}
          <div className="relative">
            <div
              className={cn(
                'w-9 h-9 rounded-xl flex items-center justify-center',
                'text-xs font-bold text-white select-none cursor-default',
                'ring-2 ring-white/20 dark:ring-white/10'
              )}
              style={{
                background: 'linear-gradient(135deg, #FE696D 0%, #F2994A 100%)',
                boxShadow: '0 2px 8px rgba(254, 105, 109, 0.35)',
              }}
              title="Admin"
            >
              A
            </div>
            {/* Online dot */}
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0b101a]" />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
