'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart/context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { formatPrice } from '@/lib/utils/format';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  inStock: boolean;
  variants: { id: string; name: string; price: number; inStock: boolean }[];
}

export function ProductGrid({ products }: { products: Product[] }) {
  const { addItem } = useCart();
  const [announcement, setAnnouncement] = useState('');

  const handleAddToCart = (product: Product) => {
    const variant = product.variants[0];
    addItem({
      productId: product.id,
      variantId: variant?.id,
      name: product.name,
      price: variant?.price || product.price,
      quantity: 1,
      image: product.images[0],
    });
    setAnnouncement(`${product.name} added to cart`);
  };

  return (
    <>
    <div aria-live="polite" className="sr-only">{announcement}</div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="h-full hover:shadow-lg transition-shadow">
          <CardHeader className="p-0">
            <div className="relative aspect-square bg-cream-600 dark:bg-charcoal-700 rounded-t-lg overflow-hidden">
              {product.images[0] ? (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <span className="text-charcoal-400">Product Image</span>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <h3 className="text-h6 font-display mb-2">{product.name}</h3>
            <p className="text-body-sm text-charcoal-600 dark:text-charcoal-300 line-clamp-2 mb-4">
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-h5 font-semibold text-forest-800 dark:text-forest-400">
                {formatPrice(product.price)}
              </span>
              <Button
                size="sm"
                onClick={() => handleAddToCart(product)}
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
    </>
  );
}
