'use client';

import { useEffect } from 'react';
import { useCart } from '@/lib/cart/context';

/**
 * Tiny client island that clears the cart once on mount.
 * Rendered only after the parent server component has verified
 * the Square order was actually completed.
 */
export function ClearCartOnMount() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return null;
}
