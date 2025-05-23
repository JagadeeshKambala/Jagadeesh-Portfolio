export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment processing.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, task assignment, and progress tracking.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that provides current weather information and forecasts for locations worldwide.',
    technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'HTML/CSS'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'Recipe Finder',
    description: 'An app to find recipes based on ingredients you have at home, with filtering options for dietary preferences.',
    technologies: ['Vue.js', 'Vuex', 'Spoonacular API', 'SCSS'],
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'A mobile-first fitness tracking application for logging workouts, tracking progress, and setting fitness goals.',
    technologies: ['React Native', 'GraphQL', 'Apollo Client', 'MongoDB'],
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 6,
    title: 'Movie Database',
    description: 'A database application for browsing movies, reading reviews, and tracking watched movies and watchlists.',
    technologies: ['React', 'Redux', 'TMDb API', 'Styled Components'],
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 7,
    title: 'Budget Planner',
    description: 'A personal finance application for budgeting, expense tracking, and financial goal setting.',
    technologies: ['Angular', 'TypeScript', 'Firebase', 'Chart.js'],
    image: 'https://images.pexels.com/photos/5466810/pexels-photo-5466810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 8,
    title: 'Social Media Dashboard',
    description: 'A dashboard for managing and analyzing social media accounts across multiple platforms.',
    technologies: ['React', 'Node.js', 'Express', 'Social Media APIs'],
    image: 'https://images.pexels.com/photos/5967751/pexels-photo-5967751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 9,
    title: 'Real Estate Listings',
    description: 'A real estate platform for browsing property listings, with search filters and interactive maps.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Google Maps API'],
    image: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

export const featuredProjects = projects.filter(project => project.featured);