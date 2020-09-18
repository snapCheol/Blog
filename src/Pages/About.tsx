import React from 'react';
import AboutContent from '../components/AboutContent/AboutContent';
import Main from '../components/Main/Main';
import Section from '../components/Section/Section';

const About = () => {
  return (
    <Main>
      <Section title="About Me">
        <AboutContent />
      </Section>
    </Main>
  );
};

export default About;
