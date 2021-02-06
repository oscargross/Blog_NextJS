import Prismic from 'prismic-javascript';
import { env } from 'process';
env.NODE_ENV
// Prismic API endpoint
export const apiEndpoint = process.env.PRISMIC_URL

export const accessToken = process.env.PRISMIC_TOKEN

export const client = Prismic.client(apiEndpoint, { accessToken });
