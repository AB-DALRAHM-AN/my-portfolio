export const fetchProjects = async () => {
  const response = await fetch('/api/notionProjects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }

  return response.json();
};
