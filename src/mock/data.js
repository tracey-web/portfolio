import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'http://bit.ly/3tCJDfS', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'traceyleastudio.png',
    title: 'Tracey Lea Studio',
    info: 'Artist website and portfolio',
    info2: `Designs, artworks and media from the Tracey's art catalog.`,
    url: 'https://www.traceylea.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'coch-pro.png',
    title: 'Coch Pro',
    info: 'A coaching marketplace ofr the mastery of personal development.',
    info2:
      'Social media influencers, senior business executives and art masters alike register on this platform to provide communities for their followers to get professional coaching and mentoring experiences.',
    url: 'https://coch.pro/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'markedit.png',
    title: 'MarkedIt',
    info: `It is Markedit's mission is to simplify and streamline the assessment, marking and reporting process to save educators and teachers time. We are an Australian team working with qualified teachers to deliver an automated and Simplified Marking Service (SMS).`,
    info2: `Founded in August 2017 we aim to be the world leader in teaching tools for streamlining the student assessment, marking and reporting processes.`,
    url: 'https://markedit.io/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in working together?',
  btn: 'Ping Me',
  email: 'tracey@traceylea.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/DigitalPye',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/digitalPye',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tracey-hill-01152824/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/tracey-web',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
