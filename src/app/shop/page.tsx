import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const metadata = {
  title: 'Shop - Sacred Portal Wellness',
  description: 'Browse our collection of yoni steaming products and wellness items',
};

// Placeholder products until Square integration is complete
const placeholderProducts = [
  {
    id: '1',
    name: 'Yoni Steam Blend - Relaxation',
    description: 'A calming blend of herbs for your yoni steaming practice',
    price: 24.99,
    image: '/images/placeholder.png',
    inStock: true,
  },
  {
    id: '2',
    name: 'Yoni Steam Blend - Detox',
    description: 'Cleansing herbs to support your wellness journey',
    price: 24.99,
    image: '/images/placeholder.png',
    inStock: true,
  },
  {
    id: '3',
    name: 'Yoni Steam Seat',
    description: 'Comfortable portable seat for your steaming practice',
    price: 89.99,
    image: '/images/placeholder.png',
    inStock: true,
  },
];

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-h1 font-display mb-8">Shop</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholderProducts.map((product) => (
          <Card key={product.id} className="h-full hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="relative aspect-square bg-cream-600 rounded-t-lg flex items-center justify-center">
                <span className="text-charcoal-400">Product Image</span>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-h6 font-display mb-2">{product.name}</h3>
              <p className="text-body-sm text-charcoal-600 line-clamp-2 mb-4">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-h5 font-semibold text-forest-800">
                  ${product.price.toFixed(2)}
                </span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
