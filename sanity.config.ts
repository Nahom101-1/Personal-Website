import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./backend/schemas";


const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiVersion: "2024-12-30",
  title: "Resume Site",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
