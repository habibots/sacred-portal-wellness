import { z } from 'zod';

// --- Sanitization ---

export function sanitizeString(input: string): string {
  return input.replace(/<[^>]*>/g, '').trim();
}

// --- Checkout Schemas ---

export const CheckoutItemSchema = z.object({
  productId: z.string().min(1),
  variantId: z.string().optional(),
  name: z.string().min(1).max(200),
  price: z.number().positive().finite(),
  quantity: z.number().int().min(1).max(99),
});

export const CheckoutRequestSchema = z.object({
  items: z.array(CheckoutItemSchema).min(1).max(50),
  shippingCost: z.number().min(0).finite(),
});

export type CheckoutItem = z.infer<typeof CheckoutItemSchema>;
export type CheckoutRequest = z.infer<typeof CheckoutRequestSchema>;

// --- Contact Form Schema ---

export const ContactFormSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(254),
  subject: z.string().min(1).max(200),
  message: z.string().min(1).max(5000),
});

export type ContactForm = z.infer<typeof ContactFormSchema>;
