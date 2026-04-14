'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';

type Props = {
  images: string[];
  name: string;
};

export function ProductImageGallery({ images, name }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  const hasMultiple = images.length > 1;
  const safeIndex = Math.min(activeIndex, Math.max(images.length - 1, 0));

  const goTo = useCallback(
    (i: number) => {
      if (images.length === 0) return;
      const next = ((i % images.length) + images.length) % images.length;
      setActiveIndex(next);
    },
    [images.length],
  );

  const next = useCallback(() => goTo(safeIndex + 1), [goTo, safeIndex]);
  const prev = useCallback(() => goTo(safeIndex - 1), [goTo, safeIndex]);

  useEffect(() => {
    const el = mainRef.current;
    if (!el || !hasMultiple) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
    };
    el.addEventListener('keydown', handleKey);
    return () => el.removeEventListener('keydown', handleKey);
  }, [next, prev, hasMultiple]);

  if (images.length === 0) {
    return (
      <div className="relative aspect-square bg-cream-600 dark:bg-charcoal-700 rounded-lg flex items-center justify-center">
        <span className="text-charcoal-400">No image available</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div
        ref={mainRef}
        tabIndex={hasMultiple ? 0 : -1}
        role={hasMultiple ? 'group' : undefined}
        aria-roledescription={hasMultiple ? 'carousel' : undefined}
        aria-label={hasMultiple ? `${name} — image ${safeIndex + 1} of ${images.length}` : undefined}
        className="relative aspect-square bg-cream-600 dark:bg-charcoal-700 rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 dark:focus-visible:ring-forest-400"
      >
        {images.map((img, i) => (
          <div
            key={img + i}
            aria-hidden={i !== safeIndex}
            className={`absolute inset-0 transition-opacity duration-300 ${
              i === safeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <Image
              src={img}
              alt={
                i === 0
                  ? `${name} — main product image`
                  : `${name} — view ${i + 1}`
              }
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
              priority={i === 0}
            />
          </div>
        ))}

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-charcoal-800 shadow-md touch-manipulation dark:bg-charcoal-900/80 dark:hover:bg-charcoal-900 dark:text-cream-100"
            >
              <svg aria-hidden="true" focusable="false" className="pointer-events-none" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-charcoal-800 shadow-md touch-manipulation dark:bg-charcoal-900/80 dark:hover:bg-charcoal-900 dark:text-cream-100"
            >
              <svg aria-hidden="true" focusable="false" className="pointer-events-none" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <div
              aria-live="polite"
              className="absolute bottom-2 right-2 rounded-full bg-black/60 text-white text-caption px-2 py-1"
            >
              {safeIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {hasMultiple && (
        <div
          role="tablist"
          aria-label={`${name} image thumbnails`}
          className="grid grid-cols-4 sm:grid-cols-5 gap-2"
        >
          {images.map((img, i) => {
            const active = i === safeIndex;
            return (
              <button
                key={img + i}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Show image ${i + 1} of ${images.length}`}
                onClick={() => goTo(i)}
                className={`relative aspect-square rounded-md overflow-hidden touch-manipulation transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 dark:focus-visible:ring-forest-400 ${
                  active
                    ? 'ring-2 ring-forest-800 dark:ring-forest-400'
                    : 'ring-1 ring-charcoal-100 dark:ring-charcoal-700 hover:ring-forest-400 opacity-80 hover:opacity-100'
                }`}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover pointer-events-none"
                  sizes="(max-width: 768px) 25vw, 12vw"
                  unoptimized
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
