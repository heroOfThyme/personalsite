export interface Project {
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  tags?: string[];
  technologies?: string[];
  demoUrl?: string;
  link?: string;
  sourceUrl?: string;
  status?: 'live' | 'in-progress' | 'completed';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Elementii',
    description:
      'Interactive periodic table iOS app built with Swift and SwiftUI. Features detailed element information, quiz modes, and beautiful Bohr model animations. My first venture into iOS development.',
    image: {
      src: '~/assets/images/elementii/screenshot1.png',
      alt: 'Elementii App Screenshot',
    },
    tags: ['Swift', 'SwiftUI', 'iOS'],
    technologies: ['Swift', 'SwiftUI'],
    demoUrl: '/projects/elementii',
    status: 'live',
    featured: true,
  },
  {
    title: 'RVB Data Sciences Corp.',
    description: 'My boutique web agency built with Astro. Clean, modern design with a focus on performance.',
    image: {
      src: '~/assets/images/rvbcorp-main.png',
      alt: 'RVB Corp Website Screenshot',
    },
    tags: ['Astro', 'Tailwind', 'TypeScript'],
    technologies: ['Astro', 'Tailwind'],
    link: 'https://rvbcorp.com',
    demoUrl: 'https://rvbcorp.com',
    status: 'live',
  },
  {
    title: 'Portfolio v2.0',
    description: 'This website! Built with Astro and featuring a modern terminal-inspired design.',
    tags: ['Astro', 'TypeScript', 'Tailwind'],
    technologies: ['Astro', 'TypeScript', 'Tailwind'],
    status: 'in-progress',
  },
];

// Get featured project (first one marked as featured, or first project)
export const getFeaturedProject = (): Project => {
  return projects.find((p) => p.featured) || projects[0];
};

// Get all projects except the featured one
export const getOtherProjects = (): Project[] => {
  const featured = getFeaturedProject();
  return projects.filter((p) => p !== featured);
};

// Get all projects
export const getAllProjects = (): Project[] => {
  return projects;
};
