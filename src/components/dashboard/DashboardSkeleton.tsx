import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

/**
 * Full-page shimmer skeleton shown while the Metabase iframe is loading.
 * Mimics the structure of a real analytics dashboard so the layout
 * does not shift when content arrives.
 */
export function DashboardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 flex flex-col gap-4 p-6 pointer-events-none"
      aria-label="Loading analytics dashboard"
      role="status"
    >
      {/* ── KPI Cards Row ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 shrink-0">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} delay={i * 0.07} tall={false} />
        ))}
      </div>

      {/* ── Main Chart Area ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1 min-h-0">
        <SkeletonCard delay={0.3} className="lg:col-span-2 min-h-[220px]" />
        <SkeletonCard delay={0.4} className="min-h-[220px]" />
      </div>

      {/* ── Secondary Charts ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 shrink-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <SkeletonCard key={i} delay={0.5 + i * 0.08} className="h-40" />
        ))}
      </div>

      {/* Screen-reader live region */}
      <span className="sr-only">Loading dashboard data, please wait…</span>
    </motion.div>
  );
}

/* ─── Private sub-component ─── */

interface SkeletonCardProps {
  delay?: number;
  className?: string;
  tall?: boolean;
}

function SkeletonCard({ delay = 0, className, tall = true }: SkeletonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: 'easeOut' }}
      className={cn(
        'relative overflow-hidden rounded-2xl',
        'bg-white dark:bg-white/[0.04]',
        'border border-grey-200/70 dark:border-white/[0.07]',
        tall && 'h-32',
        className
      )}
      style={{
        boxShadow:
          '0 2px 12px rgba(3,20,73,0.05), inset 0 1px 0 rgba(255,255,255,0.8)',
      }}
    >
      {/* Shimmer sweep */}
      <div
        className="absolute inset-0 -translate-x-full"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)',
          animation: 'shimmer-sweep 1.6s ease-in-out infinite',
        }}
      />

      {/* Card inner filler lines */}
      <div className="p-4 flex flex-col gap-2.5 h-full">
        <div className="h-3 w-24 rounded-full bg-grey-200/80 dark:bg-white/[0.08]" />
        <div className="h-6 w-16 rounded-md bg-grey-200/60 dark:bg-white/[0.06]" />
        <div className="mt-auto h-2 w-full rounded-full bg-grey-200/40 dark:bg-white/[0.04]" />
        <div className="h-2 w-3/4 rounded-full bg-grey-200/30 dark:bg-white/[0.03]" />
      </div>
    </motion.div>
  );
}
