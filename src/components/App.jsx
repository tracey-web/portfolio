import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        image
      }
    }
  }
`;

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const { site } = useStaticQuery(query);
  const { image } = site.siteMetadata;

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Helmet>
        <meta property="og:title" content="Tracey Hill - Developer" />
        <meta property="og:image" content={image} />
        <meta
          property="og:description"
          content="A software developer and educator with 10+ years experience in web technologies. Focusing on advancing my skills as a full-stack developer with the addition of UI and UX design skills."
        />
      </Helmet>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
