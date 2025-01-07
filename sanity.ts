import { createClient } from '@sanity/client';

export const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",// Sanity project ID
    dataset: 'production',          // Replace if you're using a different dataset
    apiVersion: '2024-12-30',       // Use the current date
    useCdn: true,                   // `true` for faster, cached responses; `false` for fresh data
  });