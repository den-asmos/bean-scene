import { coffee, beans } from '../../assets';
import './Order.css';

const Order = () => {
  return (
    <div className="app__order">
      <div className="app__order-wrapper">
        <div className="app__order-content">
          <h1 className="headtext">Get a chance to have an Amazing morning</h1>
          <p className="p__playfair">
            We are giving you are one time opportunity to experience a better
            life with coffee
          </p>
          <button className="btn">Order Now</button>
        </div>

        <div className="app__order-images">
          <img src={coffee} alt="coffee" className="app__order-images_coffee" />
          <img src={beans} alt="beans" className="app__order-images_beans" />
        </div>
      </div>
    </div>
  );
};

export default Order;
