import { SAN_DIEGO_ZIP_CODES } from './constants';

export function isValidZipCode(zipCode: string): boolean {
  return /^\d{5}(-\d{4})?$/.test(zipCode);
}

export function normalizeZipCode(zipCode: string): string {
  return zipCode.replace(/[^\d]/g, '').slice(0, 5);
}

export function isSanDiegoZipCode(zipCode: string): boolean {
  const normalized = normalizeZipCode(zipCode);
  return SAN_DIEGO_ZIP_CODES.includes(normalized);
}
