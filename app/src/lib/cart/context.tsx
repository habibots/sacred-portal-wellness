'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, CartSummary } from '@/types';

interface CartContextType {
  items: CartItem[];
  summary: CartSummary;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, variantId: string | undefined, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const CART_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

  // Load cart from localStorage using lazy initialization
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const savedCart = localStorage.getItem('sacred-portal-cart');
      if (!savedCart) return [];

      const parsed = JSON.parse(savedCart);

      // Handle migration from old format (plain array) to new format ({ items, savedAt })
      if (Array.isArray(parsed)) {
        return parsed;
      }

      if (parsed.savedAt && Date.now() - parsed.savedAt > CART_TTL_MS) {
        localStorage.removeItem('sacred-portal-cart');
        return [];
      }

      return parsed.items || [];
    } catch (error) {
      console.warn('Failed to load cart:', error);
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(
        'sacred-portal-cart',
        JSON.stringify({ items, savedAt: Date.now() })
      );
    } catch (e) {
      console.warn('Failed to persist cart to localStorage:', e);
    }
  }, [items]);

  const addItem = (newItem: CartItem) => {
    setItems((currentItems) => {
      const existingIndex = currentItems.findIndex(
        (item) =>
          item.productId === newItem.productId &&
          item.variantId === newItem.variantId
      );

      if (existingIndex > -1) {
        const updated = [...currentItems];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      }

      return [...currentItems, newItem];
    });
    setIsOpen(true);
  };

  const removeItem = (productId: string, variantId?: string) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) =>
          !(item.productId === productId && item.variantId === variantId)
      )
    );
  };

  const updateQuantity = (
    productId: string,
    variantId: string | undefined,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeItem(productId, variantId);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId && item.variantId === variantId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setIsOpen(false);
  };

  // Calculate cart summary
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const shipping = 0; // Will be calculated at checkout
  const tax = 0; // Will be calculated at checkout
  const total = subtotal + shipping + tax;

  const summary: CartSummary = {
    subtotal,
    shipping,
    tax,
    total,
    itemCount,
  };

  return (
    <CartContext.Provider
      value={{
        items,
        summary,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
