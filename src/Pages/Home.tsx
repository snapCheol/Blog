import React from 'react';
import HomeContent from '../components/HomeContent/HomeContent';
import Main from '../components/Main/Main';
import Section from '../components/Section/Section';

const Home = () => {
  return (
    <Main>
      <Section title="Home">
        <HomeContent />
      </Section>
    </Main>
  );
};

export default Home;
