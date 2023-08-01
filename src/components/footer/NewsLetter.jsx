import { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [value, setValue] = useState('');

  const clickHandler = () => {
    setValue('');
  };

  return (
    <div className="app__newsLetter">
      <div className="app__newsLetter-wrapper section__padding">
        <div className="app__newsLetter-content">
          <h1 className="headtext">Subscribe to get the Latest News</h1>
          <p className="p__playfair">
            Don’t miss out on our latest news, updates, tips and special offers
          </p>
        </div>

        <div className="app__newsLetter-input">
          <input
            type="email"
            value={value}
            onChange={({ target }) => setValue(target.value)}
            placeholder="Enter your email"
          />
          <button className="btn" onClick={clickHandler}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
