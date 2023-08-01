import PropTypes from 'prop-types';
import './MenuCard.css';

const MenuCard = ({ coffee }) => {
  return (
    <div className="menu__card">
      <div className="menu__card-image">
        <img src={coffee.image} alt={coffee.title} />
      </div>

      <div className="menu__card-content">
        <h1 className="menu__card-content_header">{coffee.title}</h1>
        <p className="menu__card-content_composition">{coffee.composition}</p>
        <p className="menu__card-content_price">{coffee.price}</p>
      </div>

      <button className="btn">Order Now</button>
    </div>
  );
};

MenuCard.propTypes = {
  coffee: PropTypes.object,
};

export default MenuCard;
