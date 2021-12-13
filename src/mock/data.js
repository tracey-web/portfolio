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
  artPortfolio: 'https://traceylea.com/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tech-stack.png',
    title: 'My Tech Stack',
    info: ` I currently use VS Code as my primary editor and have evolved my preferred tech-stack with Ruby/Rails/PostgreSQL on the back-end and React/MUI on the front-end.`,
    info2: `The other tools that are shown below the line are proficencies and tools that I regularly draw on to get produce my projects and get my work done. This is by no means an exhaustive list and I'm always happy to test and try new platforms, tools and technologies with the aim of potentially adding them to my toolkit or moving them into my preferred tech-stack.`,
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'c4c2.png',
    title: 'change4change - React Native Mobile App',
    info: `The front-end has been developed using a React Native / TypeScript framework to integrate with a serverless node.js back-end`,
    info2: `Change4Change's mission is to create a contemporary donor experience for young Australians. Linked to innovative and impactful charities. We partner with select charitable organisations who are leaders in their charitable areas, impactful and reflect our innovative approach to fundraising. Change 4 Change allows you to donate your spare change with each purchase you make, and so much more!`,
    url: 'https://www.change4change.com.au/',
    repo: '', // if no repo, the button will not show up
  },
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
    img: 'swarm-saviour.png',
    title: 'Swarm Saviour - Full-stack & Design',
    info: `The technical development aim with this project was to build on what seems to have evolved as my preferred tech stack and proficiency. I really enjoyed the work done with Ruby/Rails/PostgreSQL so that to me was an obvious choice and my React/MUI understanding can always be honed so I went with that as well.`,
    url: 'https://www.swarmsaviour.com/',
    repo: 'https://github.com/tracey-web/swarm-saviour-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'phomo12-API.png',
    title: 'Photo Momento - Full-stack & Design',
    info: `Instagram clone and a major software projects as part of GA's Software Engineering (SEIR48) - 12 week immersive course.`,
    info2: `Written in Ruby on Rails, with PostgreSQL database, JavaScript, HTML5 and CSS3. Photo Momento (PhoMo for short) is an Instagram clone that uses UnSplash data via Mocky (https://mocky.io) to display mock users (Unsplash Contibuters profiles) posts/media (their photos and videos) true to Instagram format.`,
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
