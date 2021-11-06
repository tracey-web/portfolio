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
  resume: 'https://bit.ly/304uOsn', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'markedit.png',
    title: 'MarkedIt - Frontend & Design',
    info: `It is Markedit's mission is to simplify and streamline the assessment, marking and reporting process to save educators and teachers time. We are an Australian team working with qualified teachers to deliver an automated and Simplified Marking Service (SMS).`,
    info2: `Founded in August 2017 we aim to be the world leader in teaching tools for streamlining the student assessment, marking and reporting processes.`,
    url: 'https://markedit.io/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'coch-pro.png',
    title: 'Coch Pro - Frontend & Design',
    info: 'A coaching marketplace for the mastery of personal development.',
    info2:
      'Social media influencers, senior business executives and art masters alike register on this platform to provide communities for their followers. This unique monetisation model allows content owners to monetise their passion through fans and registered community members who sign up to get personalised advice, professional coaching and mentoring experiences.',
    url: 'https://coch.pro/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mixr.png',
    title: 'mixr - Full-stack & Design',
    info: `React / Gatsby App that makes recipies from fridge ingredients.`,
    info2: `The app polls a refigerator API and a recipe API and provides a list of recipe options based on the ingredients available and the recipies it finds.`,
    url: 'https://www.traceylea.net/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'phomo12-API.png',
    title: 'Photo Momento - Full-stack & Design',
    info: `Instagram clone and a major software projects as part of GA's Software Engineering (SEIR48) - 12 week immersive course.`,
    info2: `Written in Ruby on Rails, with PostgreSQL database, JavaScript, HTML5 and CSS3. Photo Momento (PhoMo for short) is an Instagram clone that uses UnSplash data via Mocky (https://mocky.io) to display mock users (Unsplash Contibuters profiles) posts/media (their photos and videos) true to Instagram format. It was created to demonstrate skills that were achieved as part of the FEWD26 10 week course with GA. It has a simulated backend API that serves mock data as JSON, simulated like buttons and endless scroll images.`,
    url: 'https://pho-mo.herokuapp.com/login',
    repo: 'https://github.com/tracey-web/pho-mo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tumblrThemeExample.png',
    title: 'Tumblr TraceyLea9 - Frontend & Design',
    info: `Tumblr Template - Social Media connected, displaying video and photos using api the from Instagram in a more appropriate format for the Tumblr platform.`,
    info2: `This responsive design is a never-ending scrolling mosaic on a static full-picture background, using a transparent left menu which displays the profile picture and the name of the tumblr blog in the centre at the top.`,
    url: 'https://traceylea9.tumblr.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'traceyleastudio.png',
    title: 'Tracey Lea Studio - Frontend & Design',
    info: `Artist website and portfolio - Designs, artworks and media from Tracey's art and exhibition catalogue.`,
    info2: `Tracey has an extensive academic profile in fine arts. In 2017 she completed a Bachelor of Contemporary Arts with First-Class Honours, which resulted in her acceptance as a PhD Candidate (Creative Arts) which she undertook with the University of Tasmania. Key themes that can be seen in Tracey's work are: perception, actual/virtual place, landscape, digital engagement, voice and sanitisation. `,
    url: 'https://www.traceylea.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'GearTrain.png',
    title: 'GearTrain - Frontend, Design, Ecommerce & Social Media',
    info: `Ecommerce Business - Watch Business using Shopify, Oberlo and social media (Instagram and Facebook) marketing.`,
    info2: `GearTrain is a Shopify site that uses Oberlo to handle drop-shipping addressing, inventory items and product management.`,
    url: 'https://geartrain.co/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tic-tac-toe.png',
    title: 'Tic Tac Toe - Frontend & Design',
    info: `An arcade themed version of the traditional Tic Tac Toe (Naughts and Crosses) game.`,
    info2: `This game was created using vanilla JavaScript, HTML and CSS. Hosted on GitHub's Pages.`,
    url: 'https://tracey-web.github.io/tic-tac-toe/',
    repo: 'https://github.com/tracey-web/tic-tac-toe', // if no repo, the button will not show up
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
      url: 'https://www.linkedin.com/in/tracey-l-hill/',
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
