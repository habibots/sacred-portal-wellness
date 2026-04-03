import { SquareClient, SquareEnvironment } from 'square';

const SQUARE_ACCESS_TOKEN = process.env.SQUARE_ACCESS_TOKEN;
const SQUARE_ENV = process.env.SQUARE_ENV;

if (!SQUARE_ACCESS_TOKEN) {
  throw new Error('Missing required environment variable: SQUARE_ACCESS_TOKEN');
}

const locationId = process.env.SQUARE_LOCATION_ID;
if (!locationId) {
  throw new Error('Missing required environment variable: SQUARE_LOCATION_ID');
}

export const SQUARE_LOCATION_ID: string = locationId;

const squareClient = new SquareClient({
  token: SQUARE_ACCESS_TOKEN,
  environment: SQUARE_ENV === 'production'
    ? SquareEnvironment.Production
    : SquareEnvironment.Sandbox,
});

export default squareClient;
