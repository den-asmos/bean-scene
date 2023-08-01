import PropTypes from 'prop-types';
import './AboutUsCard.css';

const AboutUsCard = ({ card }) => {
  return (
    <div className="aboutUs-card">
      <div className="aboutUs-card_image">
        <img src={card.image} alt={card.title} />
      </div>

      <div className="aboutUs-card_content">
        <h1 className="headtext">{card.title}</h1>
        <p className="p__playfair">{card.description}</p>
      </div>
    </div>
  );
};

AboutUsCard.propTypes = {
  card: PropTypes.object,
};

export default AboutUsCard;
