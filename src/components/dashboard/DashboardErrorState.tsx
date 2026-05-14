import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Wifi } from 'lucide-react';
import { cn } from '../../utils/cn';

interface DashboardErrorStateProps {
  /** Whether the URL is simply a placeholder (not yet configured) */
  isPlaceholder?: boolean;
  retryCount?: number;
  onRetry?: () => void;
  className?: string;
}

/**
 * Error / empty-state rendered when the Metabase iframe fails to load
 * or when the URL has not yet been configured.
 */
export function DashboardErrorState({
  isPlaceholder = false,
  retryCount = 0,
  onRetry,
  className,
}: DashboardErrorStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'flex flex-col items-center justify-center gap-6 h-full min-h-[400px] p-8 text-center',
        className
      )}
      role="alert"
      aria-live="polite"
    >
      {/* Icon ring */}
      <div className="relative">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{
            background: isPlaceholder
              ? 'linear-gradient(135deg, rgba(3,20,73,0.08) 0%, rgba(0,37,153,0.06) 100%)'
              : 'linear-gradient(135deg, rgba(254,105,109,0.12) 0%, rgba(242,153,74,0.08) 100%)',
            border: isPlaceholder
              ? '1px solid rgba(3,20,73,0.12)'
              : '1px solid rgba(254,105,109,0.2)',
            boxShadow: isPlaceholder
              ? '0 8px 32px rgba(3,20,73,0.08)'
              : '0 8px 32px rgba(254,105,109,0.12)',
          }}
        >
          {isPlaceholder ? (
            <Wifi size={32} className="text-brand-navy dark:text-blue-400" strokeWidth={1.5} />
          ) : (
            <AlertTriangle
              size={32}
              className="text-brand-coral"
              strokeWidth={1.5}
            />
          )}
        </div>

        {/* Subtle pulsing outer ring */}
        <div
          className="absolute inset-0 rounded-2xl animate-pulse-glow"
          style={{
            background: isPlaceholder
              ? 'rgba(3,20,73,0.05)'
              : 'rgba(254,105,109,0.06)',
          }}
        />
      </div>

      {/* Text */}
      <div className="max-w-sm">
        <h2 className="text-lg font-bold text-brand-navy dark:text-white mb-2">
          {isPlaceholder
            ? 'Dashboard Not Yet Configured'
            : 'Failed to Load Dashboard'}
        </h2>
        <p className="text-sm text-grey-500 dark:text-grey-400 leading-relaxed">
          {isPlaceholder ? (
            <>
              Replace{' '}
              <code className="text-xs font-mono px-1.5 py-0.5 rounded-md bg-grey-100 dark:bg-white/10 text-brand-navy dark:text-white border border-grey-200 dark:border-white/10">
                METABASE_SECURE_DASHBOARD_URL
              </code>{' '}
              in{' '}
              <code className="text-xs font-mono px-1.5 py-0.5 rounded-md bg-grey-100 dark:bg-white/10 text-brand-navy dark:text-white border border-grey-200 dark:border-white/10">
                AnalyticsDashboard.tsx
              </code>{' '}
              with your signed Metabase embed URL to activate the portal.
            </>
          ) : (
            <>
              The analytics dashboard could not be reached. This is usually a
              network issue or a CORS / embedding restriction on the Metabase
              side.
              {retryCount > 0 && (
                <span className="block mt-1 text-grey-400 dark:text-grey-500">
                  Attempted {retryCount} {retryCount === 1 ? 'retry' : 'retries'}.
                </span>
              )}
            </>
          )}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {!isPlaceholder && onRetry && (
          <button
            onClick={onRetry}
            className={cn(
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl',
              'text-sm font-semibold text-white',
              'transition-all duration-200',
              'hover:-translate-y-0.5 hover:shadow-lg'
            )}
            style={{
              background: 'linear-gradient(135deg, #031449 0%, #002599 100%)',
              boxShadow: '0 4px 16px rgba(3,20,73,0.25)',
            }}
          >
            <RefreshCw size={15} strokeWidth={2.5} />
            Retry
          </button>
        )}

        <a
          href="https://www.metabase.com/docs/latest/embedding/signed-embedding"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl',
            'text-sm font-semibold',
            'text-grey-600 dark:text-grey-300',
            'border border-grey-200 dark:border-white/10',
            'hover:border-grey-300 dark:hover:border-white/20',
            'hover:bg-grey-50 dark:hover:bg-white/5',
            'transition-all duration-200'
          )}
        >
          Metabase Embed Docs ↗
        </a>
      </div>

      {/* Setup checklist for placeholder state */}
      {isPlaceholder && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={cn(
            'w-full max-w-md rounded-2xl p-5 text-left',
            'border border-grey-200/70 dark:border-white/[0.07]',
            'bg-white dark:bg-white/[0.03]'
          )}
          style={{
            boxShadow: '0 4px 24px rgba(3,20,73,0.06)',
          }}
        >
          <p className="text-xs font-bold text-brand-navy dark:text-white uppercase tracking-widest mb-3">
            Quick Setup Guide
          </p>
          <ol className="space-y-2">
            {[
              'Connect Supabase Postgres to Metabase Cloud',
              'Create your questions / dashboard in Metabase',
              'Enable "Public sharing" or use Signed Embedding',
              'Copy the embed URL and paste it as METABASE_SECURE_DASHBOARD_URL',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-grey-600 dark:text-grey-400">
                <span
                  className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #031449, #002599)',
                  }}
                >
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </motion.div>
      )}
    </motion.div>
  );
}
