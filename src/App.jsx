import {
  AboutUs,
  Discover,
  Footer,
  Hero,
  Menu,
  Order,
  Testimonials,
} from './components';
import './App.css';

const App = () => {
  return (
    <div>
      <Hero />
      <Discover />
      <Menu />
      <AboutUs />
      <Order />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
