'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart/context';
import { Button } from '@/components/ui/button';

interface Props {
  productId: string;
  variantId?: string;
  name: string;
  price: number;
  image?: string;
  inStock: boolean;
}

export function AddToCartButton({ productId, variantId, name, price, image, inStock }: Props) {
  const { addItem } = useCart();
  const [announcement, setAnnouncement] = useState('');

  const handleClick = () => {
    addItem({
      productId,
      variantId,
      name,
      price,
      quantity: 1,
      image,
    });
    setAnnouncement(`${name} added to cart`);
  };

  return (
    <>
      <div aria-live="polite" className="sr-only">
        {announcement}
      </div>
      <Button size="lg" onClick={handleClick} disabled={!inStock} className="w-full sm:w-auto">
        {inStock ? 'Add to Cart' : 'Out of Stock'}
      </Button>
    </>
  );
}
