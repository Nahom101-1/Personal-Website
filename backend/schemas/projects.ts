// import { ruleTypes } from "../../types/types";
const projects = {
  name: "work",
  title: "Projects & Relevant Coursework",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the project or course.",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      description: "Specify if this is a 'Project' or 'Coursework'.",
      options: {
        list: [
          { title: "Project", value: "project" },
          { title: "Coursework", value: "coursework" },
        ],
        layout: "radio",
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Unique identifier for the item (used in the URL).",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description:
        "A brief description of the project or course. Highlight key learning outcomes or features.",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      description: "A list of technologies or tools used (optional).",
      options: {
        layout: "tags",
      },
    },
    {
      name: "githubLink",
      title: "GitHub Link",
      type: "url",
      description: "The GitHub repository link for the project or coursework.",
    },
    {
      name: "liveLink",
      title: "Live Link",
      type: "url",
      description:
        "If applicable, the live link to the deployed project (optional).",
    },
    {
      name: "date",
      title: "Completion Date",
      type: "datetime",
      description: "The date when the project/coursework was completed.",
    },
    {
        name: "image",
        title: "Cover Image",
        type: "image",
        description: "Optional cover image for the project or coursework.",
        options: {
            hotspot: true,
        },
    }
  ],
};


export default projects;