import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'src/projects');

// GET THE DATA OF ALL PROJECTS
export function getSortedProjectsData() {
  // Get project file names
  const fileNames = fs.readdirSync(projectsDirectory);

  // Get the data from each file.
  const allProjectsData = fileNames.map((filename) => {
    // Get id from file name.
    const id = filename.replace(/\.md$/, '');

    // Read markdown file as string.
    const fullPath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the project metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as {
        date: string;
        title: string;
        description: string;
        role: string;
        tags: string[];
        mainImage: string;
        mainImageAlt: string;
      }),
    };
  });

  // Sort projects by date and return
  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// GET THE IDs OF ALL PROJECTS FOR THE DYNAMIC ROUTING
export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// GET THE DATA OF A SINGLE PROJECT FROM THE ID
export async function getProjectData(id: string) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the project metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...(matterResult.data as {
      date: string;
      title: string;
      tags: string[];
      description: string;
      role: string;
      mainImage: string;
      mainImageAlt: string;
    }),
  };
}
