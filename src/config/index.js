/* eslint-disable max-len */
import featuredProjects from './featured';
import projects from './projects';

let navLinks = [
  {
    name: 'About',
    url: '/#about',
  },
];
if (featuredProjects.length > 0 && featuredProjects.length > 0) {
  navLinks.push({
    name: 'Work',
    url: '/#projects',
  });
}
navLinks = [
  ...navLinks,
  ...[
    // {
    //   name: 'Blog',
    //   url: 'https://blog.jrgarciadev.com',
    // },

    {
      name: 'Contact',
      url: '/#contact',
    },
  ],
];

module.exports = {
  email: 'robertosumoza@gmail.com',

  featuredProjects,
  projects,

  skills: ['JavaScript (ES6+)', 'Node.js', 'Vue.js', 'Nuxt.js', 'React', 'React Native', 'Next.js'],

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/robsumoza',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/roberto-sumoza/',
    },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/robsumoza',
    // },
    {
      name: 'Twitter',
      url: 'https://twitter.com/robsumoza',
    },
  ],

  navLinks,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },
};
