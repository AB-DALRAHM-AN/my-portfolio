import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import "server-only";

// Notion Blog API

// Create a new Notion client
export const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_API_KEY!,
});

// Fetch pages from the Notion database
export const fetchPages = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID!,
    filter: {
      property: "status",
      status: {
        equals: "published",
      },
    },
  });
});
// Fetch a page by its slug
export const fetchBySlug = React.cache((slug: string) => {
  return notion.databases
    .query({
      database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID!,
      filter: {
        property: "slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

// Fetch a page by its ID
export const fetchPageBlocks = React.cache((pageId: string) => {
  return notion.blocks.children
    .list({
      block_id: pageId,
    })
    .then((res) => res.results as BlockObjectResponse[]);
});