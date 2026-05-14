import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Zap } from 'lucide-react';
import { cn } from '../../utils/cn';

interface StatItem {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
  icon: React.ReactNode;
}

const STATS: StatItem[] = [
  {
    label: 'Total Downloads',
    value: '—',
    delta: 'Live via Metabase',
    positive: true,
    icon: <TrendingUp size={16} strokeWidth={2} />,
  },
  {
    label: 'Trips Created',
    value: '—',
    delta: 'Live via Metabase',
    positive: true,
    icon: <BarChart3 size={16} strokeWidth={2} />,
  },
  {
    label: 'Active Members',
    value: '—',
    delta: 'Live via Metabase',
    positive: true,
    icon: <Users size={16} strokeWidth={2} />,
  },
  {
    label: 'AI vs Template',
    value: '—',
    delta: 'Live via Metabase',
    positive: true,
    icon: <Zap size={16} strokeWidth={2} />,
  },
];

interface DashboardStatsBarProps {
  className?: string;
}

/**
 * Horizontal row of KPI summary chips shown above the iframe.
 * Values are intentionally left as "—" — they'll be populated live by Metabase.
 */
export function DashboardStatsBar({ className }: DashboardStatsBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn('grid grid-cols-2 lg:grid-cols-4 gap-3', className)}
    >
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * i, duration: 0.4 }}
          className={cn(
            'group relative flex items-center gap-3 px-4 py-3 rounded-xl',
            'border border-grey-200/70 dark:border-white/[0.07]',
            'bg-white dark:bg-white/[0.04]',
            'hover:border-grey-300 dark:hover:border-white/15',
            'hover:-translate-y-0.5',
            'transition-all duration-300'
          )}
          style={{
            boxShadow:
              '0 2px 8px rgba(3,20,73,0.04), inset 0 1px 0 rgba(255,255,255,0.8)',
          }}
        >
          {/* Icon */}
          <div
            className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-white"
            style={{
              background: 'linear-gradient(135deg, #031449 0%, #002599 100%)',
              boxShadow: '0 2px 8px rgba(3,20,73,0.25)',
            }}
          >
            {stat.icon}
          </div>

          {/* Text */}
          <div className="min-w-0">
            <p className="text-xs text-grey-500 dark:text-grey-400 leading-none mb-1 truncate">
              {stat.label}
            </p>
            <p className="text-lg font-bold text-brand-navy dark:text-white leading-none">
              {stat.value}
            </p>
          </div>

          {/* Delta badge */}
          <div className="ml-auto shrink-0">
            <span
              className={cn(
                'text-[10px] font-semibold px-1.5 py-0.5 rounded-full whitespace-nowrap',
                stat.positive
                  ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-500/20'
                  : 'bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border border-red-200/60 dark:border-red-500/20'
              )}
            >
              {stat.delta}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
