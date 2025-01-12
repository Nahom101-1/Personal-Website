import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "", 
  dataset: "production", 
  apiVersion: "2024-12-30",
  useCdn: true, 
});
