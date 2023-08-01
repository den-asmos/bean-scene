import Navbar from './Navbar';
import './Hero.css';

const Hero = () => {
  return (
    <div className="app__bg">
      <Navbar />
      <div className="app__hero section__padding" id="home">
        <div className="app__hero-content">
          <p className="p__playfair">We’ve got your morning covered with</p>
          <h1 className="app__hero-content_header">Coffee</h1>
          <p className="p__playfair">
            It is best to start your day with a cup of coffee. Discover the best
            flavours coffee you will ever have. We provide the best for our
            customers.
          </p>
          <button className="btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
