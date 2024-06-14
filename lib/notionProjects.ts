import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

// Notion Projects API

// Create a new Notion client
export const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_PROJECTS_API_KEY!,
});

// Fetch pages from the Notion database
export const fetchProjects = async () => {
  try {
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
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to fetch projects");
  }
};

// Fetch a page by its slug
export const fetchBySlug = async (slug: string) => {
  try {
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
  } catch (error) {
    console.error("Error fetching page by slug:", error);
    throw new Error("Failed to fetch page by slug");
  }
};

// Fetch a page by its ID
export const fetchProjectsBlocks = async (pageId: string) => {
  try {
    const response = await notion.blocks.children.list({
      block_id: pageId,
    });
    return response.results as BlockObjectResponse[];
  } catch (error) {
    console.error("Error fetching page blocks:", error);
    throw new Error("Failed to fetch page blocks");
  }
};
