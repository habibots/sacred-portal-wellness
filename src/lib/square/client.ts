import { Client, Environment } from 'square';

// Initialize Square client
const squareClient = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN || '',
  environment: process.env.SQUARE_ENV === 'production' 
    ? Environment.Production 
    : Environment.Sandbox,
});

export const catalogApi = squareClient.catalogApi;
export const ordersApi = squareClient.ordersApi;
export const paymentsApi = squareClient.paymentsApi;

export default squareClient;
