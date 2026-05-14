import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { DashboardSkeleton } from './DashboardSkeleton';
import { DashboardErrorState } from './DashboardErrorState';
import type { IframeStatus } from '../../hooks/useIframeLoader';

interface MetabaseEmbedProps {
  url: string;
  status: IframeStatus;
  iframeKey: number;
  retryCount: number;
  iframeRef: React.RefObject<HTMLIFrameElement | null>;
  onLoad: () => void;
  onError: () => void;
  onRetry: () => void;
  className?: string;
}

const IS_PLACEHOLDER = (url: string) =>
  !url || url === 'YOUR_METABASE_URL' || url.trim() === '';

/**
 * The glassmorphism container that wraps the Metabase iframe.
 * Handles loading skeleton, error fallback, and the live iframe itself.
 */
export function MetabaseEmbed({
  url,
  status,
  iframeKey,
  retryCount,
  iframeRef,
  onLoad,
  onError,
  onRetry,
  className,
}: MetabaseEmbedProps) {
  const isPlaceholder = IS_PLACEHOLDER(url);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className={cn(
        'relative flex-1 min-h-0 rounded-2xl overflow-hidden',
        'border border-grey-200/60 dark:border-white/[0.07]',
        'bg-white dark:bg-[#0d1321]',
        className
      )}
      style={{
        boxShadow:
          '0 0 0 1px rgba(255,255,255,0.6) inset, 0 32px 80px -16px rgba(3,20,73,0.12), 0 8px 24px -8px rgba(3,20,73,0.08)',
      }}
    >
      {/* Ambient top-edge glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(3,20,73,0.3) 30%, rgba(0,37,153,0.4) 50%, rgba(3,20,73,0.3) 70%, transparent)',
        }}
      />

      {/* ── Loading Skeleton (shown while status === 'loading') ── */}
      <AnimatePresence>
        {status === 'loading' && !isPlaceholder && (
          <DashboardSkeleton />
        )}
      </AnimatePresence>

      {/* ── Error / Placeholder State ── */}
      <AnimatePresence>
        {(status === 'error' || status === 'idle' || isPlaceholder) && (
          <DashboardErrorState
            isPlaceholder={isPlaceholder || status === 'idle'}
            retryCount={retryCount}
            onRetry={onRetry}
          />
        )}
      </AnimatePresence>

      {/* ── The Metabase Iframe ── */}
      {!isPlaceholder && (
        <motion.iframe
          key={iframeKey}
          ref={iframeRef}
          src={url}
          title="Trevon Analytics Dashboard"
          allow="fullscreen"
          className={cn(
            'absolute inset-0 w-full h-full border-0',
            'transition-opacity duration-500',
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          )}
          onLoad={onLoad}
          onError={onError}
          initial={{ opacity: 0 }}
          animate={{ opacity: status === 'loaded' ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          style={{ colorScheme: 'normal' }}
        />
      )}

      {/* Subtle inner vignette for depth */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          boxShadow: 'inset 0 0 80px rgba(3,20,73,0.025)',
        }}
      />
    </motion.div>
  );
}
