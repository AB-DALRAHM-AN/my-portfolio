import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

// Notion Blog API

// Create a new Notion client
export const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_BLOGS_API_KEY!,
});

// Fetch pages from the Notion database
export const fetchPages = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_BLOGS_DATABASE_ID!,
    filter: {
      property: "status",
      status: {
        equals: "published",
      },
    },
  });
  return response.results;
};

// Fetch a page by its slug
export const fetchBySlug = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_BLOGS_DATABASE_ID!,
    filter: {
      property: "slug",
      rich_text: {
        equals: slug,
      },
    },
  });
  return response.results[0] as PageObjectResponse | undefined;
};

// Fetch a page by its ID
export const fetchPageBlocks = async (pageId: string) => {
  const response = await notion.blocks.children.list({
    block_id: pageId,
  });
  return response.results as BlockObjectResponse[];
};
