import { about } from '../../utils/constants';
import AboutUsCard from './AboutUsCard';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="app__aboutUs section__padding" id="about">
      <div className="app__aboutUs-heading">
        <h1 className="headtext">Why are we different?</h1>
        <p className="p__playfair">
          We don’t just make your coffee, we make your day!
        </p>
      </div>

      <div className="app__aboutUs-cards">
        {about.map((card) => (
          <AboutUsCard key={card.title} card={card} />
        ))}
      </div>

      <div className="app__aboutUs-subheading">
        <p className="p__playfair">
          Great ideas start with great coffee, Lets help you achieve that
        </p>
        <h1 className="headtext">Get started today</h1>
      </div>

      <button className="btn">Join Us</button>
    </div>
  );
};

export default AboutUs;
