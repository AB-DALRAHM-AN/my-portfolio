// lib/notionProjects.ts

import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

// Create a new Notion client
export const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_PROJECTS_API_KEY!,
});

// Fetch projectPages from the Notion database
export const fetchProjects = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_PROJECTS_DATABASE_ID!,
    filter: {
      property: "status",
      status: {
        equals: "published",
      },
    },
  });
  return response.results;
};

// Fetch a projectPages by its slug
export const fetchProjectsBySlug = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_PROJECTS_DATABASE_ID!,
    filter: {
      property: "slug",
      rich_text: {
        equals: slug,
      },
    },
  });
  return response.results[0] as PageObjectResponse | undefined;
};

// Fetch a projectPages by its ID
export const fetchProjectsBlocks = async (pageId: string) => {
  const response = await notion.blocks.children.list({
    block_id: pageId,
  });
  return response.results as BlockObjectResponse[];
};
