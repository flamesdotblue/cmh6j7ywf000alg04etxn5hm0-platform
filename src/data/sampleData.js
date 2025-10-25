const data = [
  // Design & CSS
  {
    title: 'Tailwind CSS Documentation',
    url: 'https://tailwindcss.com/docs',
    description: 'Utility-first CSS framework packed with classes to build any design directly in your markup.',
    tags: ['css', 'design', 'utility', 'tailwind']
  },
  {
    title: 'Smashing Magazine',
    url: 'https://www.smashingmagazine.com/',
    description: 'Articles, tutorials and resources for web designers and developers.',
    tags: ['design', 'frontend', 'news']
  },
  {
    title: 'CSS-Tricks',
    url: 'https://css-tricks.com/',
    description: 'Daily articles about CSS, HTML, JavaScript, UI, UX, and modern web techniques.',
    tags: ['css', 'tips', 'design']
  },
  {
    title: 'Radix UI – Accessible Components',
    url: 'https://www.radix-ui.com/',
    description: 'Primitives for building robust, accessible web apps and design systems.',
    tags: ['accessibility', 'components', 'design systems']
  },

  // Core Web Docs
  {
    title: 'MDN Web Docs',
    url: 'https://developer.mozilla.org/en-US/',
    description: 'Resources for developers, by developers. The go-to reference for web standards.',
    tags: ['docs', 'javascript', 'css', 'html']
  },
  {
    title: 'Can I use',
    url: 'https://caniuse.com/',
    description: 'Compatibility tables for support of HTML5, CSS3, and JavaScript APIs across browsers.',
    tags: ['compatibility', 'browsers', 'docs']
  },

  // React & Frontend
  {
    title: 'React – A JavaScript library for building UIs',
    url: 'https://react.dev/',
    description: 'React makes it painless to create interactive UIs with components and hooks.',
    tags: ['react', 'javascript', 'frontend']
  },
  {
    title: 'Next.js – The React Framework',
    url: 'https://nextjs.org/',
    description: 'Production-grade React framework by Vercel for building fast web applications and sites.',
    tags: ['react', 'framework', 'ssr']
  },
  {
    title: 'Vite – Next Generation Frontend Tooling',
    url: 'https://vitejs.dev/',
    description: 'Build tool that provides a faster and leaner development experience for modern web projects.',
    tags: ['build', 'tooling', 'vite']
  },
  {
    title: 'Framer Motion',
    url: 'https://www.framer.com/motion/',
    description: 'A production-ready motion library for React to create beautiful animations.',
    tags: ['animation', 'react']
  },
  {
    title: 'Redux Toolkit',
    url: 'https://redux-toolkit.js.org/',
    description: 'The official, batteries-included toolset for efficient Redux development.',
    tags: ['redux', 'state management', 'react']
  },

  // TypeScript & Tooling
  {
    title: 'TypeScript – JavaScript with syntax for types',
    url: 'https://www.typescriptlang.org/',
    description: 'Strongly typed JavaScript that scales. Better tooling and safety for large codebases.',
    tags: ['typescript', 'javascript', 'types']
  },
  {
    title: 'ESLint',
    url: 'https://eslint.org/',
    description: 'Find and fix problems in your JavaScript code with a pluggable linting utility.',
    tags: ['lint', 'tooling', 'javascript']
  },
  {
    title: 'Prettier',
    url: 'https://prettier.io/',
    description: 'An opinionated code formatter that enforces a consistent style by parsing code and re-printing it.',
    tags: ['format', 'tooling', 'javascript']
  },

  // AI & ML
  {
    title: 'Google AI Studio',
    url: 'https://aistudio.google.com/',
    description: 'Experiment, build, and deploy AI-powered apps with Google’s latest models and tools.',
    tags: ['ai', 'ml', 'tools']
  },
  {
    title: 'OpenAI Platform',
    url: 'https://platform.openai.com/',
    description: 'Developer platform for building with GPT and other advanced AI capabilities.',
    tags: ['ai', 'api', 'gpt']
  },
  {
    title: 'Hugging Face',
    url: 'https://huggingface.co/',
    description: 'The AI community building the future. Models, datasets, spaces, and tools for ML.',
    tags: ['ai', 'ml', 'models']
  },
  {
    title: 'LangChain',
    url: 'https://www.langchain.com/',
    description: 'Framework for developing applications powered by language models.',
    tags: ['ai', 'framework', 'langchain']
  },
  {
    title: 'Cohere',
    url: 'https://cohere.com/',
    description: 'Enterprise AI platform for building, deploying, and operating large language models.',
    tags: ['ai', 'nlp', 'platform']
  },

  // Learning & Quality Content
  {
    title: 'Hacker News',
    url: 'https://news.ycombinator.com/',
    description: 'Social news website focusing on computer science and entrepreneurship.',
    tags: ['news', 'programming']
  },
  {
    title: 'The Verge – Tech News',
    url: 'https://www.theverge.com/',
    description: 'Covers the intersection of technology, science, art, and culture.',
    tags: ['news', 'technology']
  },
  {
    title: 'freeCodeCamp',
    url: 'https://www.freecodecamp.org/',
    description: 'Learn to code for free with millions of people around the world.',
    tags: ['learning', 'coding', 'tutorials']
  },
  {
    title: 'Frontend Masters',
    url: 'https://frontendmasters.com/',
    description: 'Expert-led, in-depth courses for web developers covering the latest technologies.',
    tags: ['learning', 'courses', 'frontend']
  },
  {
    title: 'Egghead.io',
    url: 'https://egghead.io/',
    description: 'Concise, high-quality video tutorials for modern web development.',
    tags: ['learning', 'courses', 'javascript']
  },

  // Performance & Analytics
  {
    title: 'Web.dev (Google)',
    url: 'https://web.dev/',
    description: 'Guidance, best practices, and tools for building fast, secure, and efficient websites.',
    tags: ['performance', 'best practices', 'pwa']
  },
  {
    title: 'Lighthouse',
    url: 'https://developer.chrome.com/docs/lighthouse/overview/',
    description: 'Open-source automated tool for improving the quality of web pages.',
    tags: ['performance', 'audit', 'seo']
  },

  // Hosting & DevOps
  {
    title: 'Vercel',
    url: 'https://vercel.com/',
    description: 'Develop, preview, and ship delightful user experiences with the frontend cloud.',
    tags: ['hosting', 'serverless', 'edge']
  },
  {
    title: 'Netlify',
    url: 'https://www.netlify.com/',
    description: 'Build, deploy, and scale modern web projects on the Jamstack platform.',
    tags: ['hosting', 'jamstack', 'ci']
  },
  {
    title: 'Cloudflare Docs',
    url: 'https://developers.cloudflare.com/',
    description: 'Documentation for Cloudflare products and developer platform features.',
    tags: ['edge', 'security', 'dns']
  },

  // Databases & APIs
  {
    title: 'Supabase',
    url: 'https://supabase.com/',
    description: 'Open source Firebase alternative. Postgres database, authentication, instant APIs, and more.',
    tags: ['database', 'api', 'auth']
  },
  {
    title: 'Firebase',
    url: 'https://firebase.google.com/',
    description: 'Build apps fast with Google’s Firebase platform: database, functions, auth, and hosting.',
    tags: ['database', 'realtime', 'auth']
  },
  {
    title: 'Prisma',
    url: 'https://www.prisma.io/',
    description: 'Next-generation ORM for Node.js and TypeScript with type-safety and great DX.',
    tags: ['database', 'orm', 'typescript']
  },

  // Docs & Guides
  {
    title: 'DevDocs',
    url: 'https://devdocs.io/',
    description: 'Fast, offline-capable API documentation browser for developers.',
    tags: ['docs', 'api', 'reference']
  },
  {
    title: 'Read the Docs',
    url: 'https://readthedocs.org/',
    description: 'Simplify software documentation by building, versioning, and hosting docs for you.',
    tags: ['docs', 'hosting']
  },
];

export default data;
