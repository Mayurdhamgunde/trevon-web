import { useState, useCallback, useRef } from 'react';

export type IframeStatus = 'idle' | 'loading' | 'loaded' | 'error';

interface UseIframeLoaderReturn {
  status: IframeStatus;
  retryCount: number;
  iframeKey: number;
  handleLoad: () => void;
  handleError: () => void;
  handleRetry: () => void;
  iframeRef: React.RefObject<HTMLIFrameElement | null>;
}

/**
 * Manages iframe loading state, error handling, and retry logic
 * for the embedded Metabase analytics dashboard.
 */
export function useIframeLoader(url: string): UseIframeLoaderReturn {
  const [status, setStatus] = useState<IframeStatus>(
    url && url !== 'YOUR_METABASE_URL' ? 'loading' : 'idle'
  );
  const [retryCount, setRetryCount] = useState(0);
  const [iframeKey, setIframeKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const handleLoad = useCallback(() => {
    setStatus('loaded');
  }, []);

  const handleError = useCallback(() => {
    setStatus('error');
  }, []);

  const handleRetry = useCallback(() => {
    setStatus('loading');
    setRetryCount((prev) => prev + 1);
    // Incrementing the key forces React to remount the iframe entirely
    setIframeKey((prev) => prev + 1);
  }, []);

  return {
    status,
    retryCount,
    iframeKey,
    handleLoad,
    handleError,
    handleRetry,
    iframeRef,
  };
}
