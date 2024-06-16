// pages/api/projects.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { fetchProjects } from '@/lib/notionProjects'; // Adjust the path based on your project structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const projects = await fetchProjects();
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Failed to fetch projects' });
  }
}
