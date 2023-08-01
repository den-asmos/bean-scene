import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';
import { blast } from '../../assets';
import { feedback } from '../../utils/constants';
import TestimonialsCard from './TestimonialsCard';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="app__testimonials section__padding app__wrapper">
      <div className="app__testimonials-content">
        <h1 className="headtext">Our coffee perfection feedback</h1>
        <p className="p__playfair">
          Our customers has amazing things to say about us
        </p>
      </div>

      <div className="app__testimonials-blastTop">
        <img src={blast} alt="blast" />
      </div>

      <div className="app__testimonials-cards">
        {feedback.map((item) => (
          <TestimonialsCard key={item.name} card={item} />
        ))}

        <div className="app__testimonials-card_arrows">
          <button className="btn">
            <FaLongArrowAltLeft />
          </button>
          <button className="btn">
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>

      <div className="app__testimonials-blastBottom">
        <img src={blast} alt="blast" />
      </div>
    </div>
  );
};

export default Testimonials;
