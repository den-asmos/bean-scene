import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="app__contactUs">
      <div className="app__contactUs-wrapper section__padding">
        <div className="app__contactUs-logo">
          <h1>Bean Scene</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>

          <div className="app__contactUs-logo_icons">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
          </div>
        </div>

        <div className="app__contactUs-info">
          <div className="app__contactUs-about">
            <h1>About</h1>
            <p>Menu</p>
            <p>Features</p>
            <p>News & Blogs</p>
            <p>Help & Support</p>
          </div>

          <div className="app__contactUs-contacts">
            <h1>Contact Us</h1>
            <p>
              Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
              Bangalore-560016
            </p>
            <p>+1 202-918-2132</p>
            <p>beanscene@mail.com</p>
            <p>www.beanscene.com</p>
          </div>

          <div className="app__contactUs-company">
            <h1>Company</h1>
            <p>How we work</p>
            <p>Terms of service</p>
            <p>Pricing</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
