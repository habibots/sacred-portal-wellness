import { SquareClient, SquareEnvironment } from 'square';

const SQUARE_ACCESS_TOKEN = process.env.SQUARE_ACCESS_TOKEN;
const SQUARE_ENV = process.env.SQUARE_ENV;

const locationId = process.env.SQUARE_LOCATION_ID;

if (!SQUARE_ACCESS_TOKEN || !locationId) {
  console.warn(
    'Square environment variables not set. API routes will fail at runtime.'
  );
}

export const SQUARE_LOCATION_ID: string = locationId || '';

const squareClient = new SquareClient({
  token: SQUARE_ACCESS_TOKEN || '',
  environment: SQUARE_ENV === 'production'
    ? SquareEnvironment.Production
    : SquareEnvironment.Sandbox,
});

export default squareClient;
