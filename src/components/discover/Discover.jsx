import { beanCup, blast } from '../../assets';
import './Discover.css';

const Discover = () => {
  return (
    <div className="app__discover section__padding">
      <div className="app__discover-content">
        <h1 className="headtext">Discover the best coffee</h1>
        <p className="p__playfair">
          Bean Scene is a coffee shop that provides you with quality coffee that
          helps boost your productivity and helps build your mood. Having a cup
          of coffee is good, but having a cup of real coffee is greater. There
          is no doubt that you will enjoy this coffee more than others you have
          ever tasted.
        </p>
        <button className="btn">Learn More</button>
      </div>

      <div className="app__discover-image">
        <img src={beanCup} alt="bean cup" />
      </div>

      <div className="app__discover-coffeeBlast">
        <img src={blast} alt="blast" />
      </div>
    </div>
  );
};

export default Discover;
