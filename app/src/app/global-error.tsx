'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#FAF9F6', color: '#2C2C2C' }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Something Went Wrong</h1>
          <p style={{ fontSize: '1.125rem', color: '#595959', marginBottom: '2rem' }}>
            A critical error occurred. Please try again.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button
              onClick={reset}
              style={{ padding: '0.75rem 1.5rem', backgroundColor: '#1B5E20', color: 'white', border: 'none', borderRadius: '0.375rem', fontSize: '1rem', cursor: 'pointer' }}
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.href = '/'}
              style={{ padding: '0.75rem 1.5rem', border: '2px solid #1B5E20', color: '#1B5E20', borderRadius: '0.375rem', fontSize: '1rem', cursor: 'pointer', background: 'transparent' }}
            >
              Return Home
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
