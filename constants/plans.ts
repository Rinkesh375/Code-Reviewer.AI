export const TIER_LIMITS = {
  FREE: {
    repositories: 5,
    reviewsPerRepo: 5,
  },
  PRO: {
    repositories: null, 
    reviewsPerRepo: null, 
  },
} as const;