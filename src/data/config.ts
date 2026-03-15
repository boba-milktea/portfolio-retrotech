import type { ContactLink } from '@/types';

export const config = {
  name: 'Catherine Lin',
  role: '// FULL-STACK DEVELOPER',
  tagline: [
    'Designing and building digital experiences',
    'Building fast, responsive, and scalable web products with React, Next.js, and Java',
    'Creating intuitive and engaging user interfaces',
    'Available for hire',
  ],
  status: 'OPEN TO WORK',
  resumeURL: '/Catherine_Lin_Resume.pdf',
  available: true,

  about: [
    'Self-taught dev. Passionate about building tools people actually want to use.',
    'Care about performance, accessibility, and shipping things that actually work.',
    'Always learning new things and improving my skills.',
    'Looking for a full-time position as a junior developer.',
    'Based in Brussels, Belgium, Remote-friendly.',
  ],

  contact: [
    {
      prefix: 'mailto://',
      label: 'catherine.idv@gmail.com',
      href: 'mailto:catherine.idv@gmail.com',
    },
    {
      prefix: 'linkedin://',
      label: 'linkedin.com/in/kaohsinlin ',
      href: 'https://linkedin.com/in/kaohsinlin',
    },
    {
      prefix: 'github://',
      label: 'github.com/boab-milktea',
      href: 'https://github.com/boab-milktea',
    },
  ] satisfies ContactLink[],
};
