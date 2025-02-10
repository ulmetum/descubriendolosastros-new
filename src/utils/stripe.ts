import { STRIPE_SECRET_KEY } from '@/config'
import Stripe from 'stripe'

export const stripe = new Stripe(STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
  typescript: true,
})
