import PropTypes from 'prop-types';
import './TestimonialsCard.css';

const TestimonialsCard = ({ card }) => {
  return (
    <div className="testimonials-card">
      <h1 className="testimonials-card_quote">&#8220;</h1>

      <div className="testimonials-card_content">
        <p className="p__playfair">{card.message}</p>
        <h1 className="headtext">{card.name}</h1>
        <p className="p__playfair">{card.position}</p>
      </div>

      <div className="testimonials-card_image">
        <img src={card.image} alt={card.name} />
      </div>
    </div>
  );
};

TestimonialsCard.propTypes = {
  card: PropTypes.object,
};

export default TestimonialsCard;
