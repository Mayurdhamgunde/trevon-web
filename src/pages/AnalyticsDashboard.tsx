import { motion } from 'framer-motion';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { DashboardStatsBar } from '../components/dashboard/DashboardStatsBar';
import { MetabaseEmbed } from '../components/dashboard/MetabaseEmbed';
import { useIframeLoader } from '../hooks/useIframeLoader';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CONFIGURATION
 *
 * Replace this with your real Metabase signed-embed URL once your dashboard
 * is published. Keep it as "YOUR_METABASE_URL" during development — the UI
 * will show a friendly setup guide instead.
 *
 * How to get this URL:
 *   1. Open your Metabase dashboard
 *   2. Click Share → Public link  (or use Signed Embedding for production)
 *   3. Paste the URL below
 * ─────────────────────────────────────────────────────────────────────────────
 */
const METABASE_SECURE_DASHBOARD_URL = 'YOUR_METABASE_URL';

/**
 * AnalyticsDashboard
 *
 * Full-screen, protected management portal page that embeds a Metabase
 * dashboard inside a polished glassmorphism shell.
 *
 * Route:  /analytics  (see App.tsx)
 * Access: Admin-only (enforce via your auth layer / protected route wrapper)
 */
export default function AnalyticsDashboard() {
  const { status, retryCount, iframeKey, handleLoad, handleError, handleRetry, iframeRef } =
    useIframeLoader(METABASE_SECURE_DASHBOARD_URL);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      /**
       * h-screen + flex-col ensures the layout fills exactly the viewport
       * height so the iframe can grow into the available space without a
       * scroll bar on the outer shell.
       */
      className="h-screen flex flex-col overflow-hidden bg-[#f4f5f9] dark:bg-[#0b101a] transition-colors duration-300"
    >
      {/* ── Ambient decorative background orbs ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
        <div
          className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full opacity-[0.04] dark:opacity-[0.06]"
          style={{
            background:
              'radial-gradient(circle, #031449 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'orb-drift 18s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.05] dark:opacity-[0.07]"
          style={{
            background:
              'radial-gradient(circle, #002599 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'orb-drift-r 22s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full opacity-[0.03] dark:opacity-[0.04]"
          style={{
            background:
              'radial-gradient(circle, #FE696D 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'orb-drift 26s ease-in-out 3s infinite',
          }}
        />
      </div>

      {/* ── Sticky Header ── */}
      <DashboardHeader />

      {/* ── Scrollable body (the iframe itself does NOT scroll — the padding area might on very small screens) ── */}
      <div className="relative z-10 flex flex-col flex-1 min-h-0 gap-4 p-4 md:p-6 overflow-auto">
        {/* KPI summary bar */}
        <DashboardStatsBar />

        {/* Main embedded dashboard */}
        <MetabaseEmbed
          url={METABASE_SECURE_DASHBOARD_URL}
          status={status}
          iframeKey={iframeKey}
          retryCount={retryCount}
          iframeRef={iframeRef}
          onLoad={handleLoad}
          onError={handleError}
          onRetry={handleRetry}
          className="flex-1 min-h-[500px]"
        />

        {/* Footer watermark */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="shrink-0 text-center text-[11px] text-grey-400 dark:text-grey-600 pb-1"
        >
          Trevon Management Portal · Data powered by{' '}
          <a
            href="https://supabase.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-coral transition-colors duration-200 underline underline-offset-2"
          >
            Supabase
          </a>{' '}
          ×{' '}
          <a
            href="https://www.metabase.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-coral transition-colors duration-200 underline underline-offset-2"
          >
            Metabase
          </a>
        </motion.p>
      </div>
    </motion.div>
  );
}
