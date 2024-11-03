import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import Section from './Section';
import SubHero from './SubHero';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>GadgetHaven | Home</title>
      </Helmet>
      <Hero />
      <SubHero />
      <Section />
    </div>
  );
};

export default Home;
