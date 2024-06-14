import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_PROJECTS_API_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NEXT_PUBLIC_NOTION_PROJECTS_DATABASE_ID!,
      filter: {
        property: 'status',
        status: {
          equals: 'published',
        },
      },
    });

    return NextResponse.json(response.results);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
