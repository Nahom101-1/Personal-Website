import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";


export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "", // Replace with your actual Sanity project ID
  dataset: "production", // The dataset to use (e.g., production or staging)
  apiVersion: "2024-12-30", // Use the current date for the latest API features
  title: "Resume Site", // The title displayed in Sanity Studio
  basePath: "/admin", // The URL path to access the Studio (e.g., /admin)
  plugins: [deskTool()], // Add the Desk Tool plugin for content management
});
