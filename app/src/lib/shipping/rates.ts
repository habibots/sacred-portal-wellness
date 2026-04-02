import { isSanDiegoZipCode } from './validation';
import { SHIPPING_RATES, DeliveryMethod } from './constants';

export interface ShippingCalculation {
  method: DeliveryMethod;
  cost: number;
  isFree: boolean;
  message: string;
}

export function calculateShipping(
  zipCode: string,
  subtotal: number
): ShippingCalculation {
  if (isSanDiegoZipCode(zipCode)) {
    const isFree = subtotal >= SHIPPING_RATES.FREE_DELIVERY_THRESHOLD;
    
    return {
      method: 'local',
      cost: isFree ? 0 : SHIPPING_RATES.LOCAL_DELIVERY,
      isFree,
      message: isFree
        ? 'Free local delivery (order over $100)'
        : `Local delivery: $${SHIPPING_RATES.LOCAL_DELIVERY.toFixed(2)}`,
    };
  }

  return {
    method: 'standard',
    cost: SHIPPING_RATES.STANDARD_SHIPPING,
    isFree: false,
    message: `Standard shipping: $${SHIPPING_RATES.STANDARD_SHIPPING.toFixed(2)}`,
  };
}

export function getDeliveryEstimate(method: DeliveryMethod): string {
  switch (method) {
    case 'local':
      return '3-5 business days';
    case 'standard':
      return '5-7 business days';
    default:
      return 'Not available';
  }
}
