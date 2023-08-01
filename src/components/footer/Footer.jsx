import './Footer.css';
import NewsLetter from './NewsLetter';
import ContactUs from './ContactUs';
import {cup} from '../../assets'

const Footer = () => {
  return (
    <div className="app__footer app__wrapper" id="contact">
      <NewsLetter />
      <ContactUs />

      <div className='app__footer-cups'>
        <div className='app__footer-cupLeft'>
          <img src={cup} alt="cup" />
        </div>
        <div className='app__footer-cupRight'>
          <img src={cup} alt="cup" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
