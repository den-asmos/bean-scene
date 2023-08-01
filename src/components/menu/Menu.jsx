import MenuCard from './MenuCard';
import { menu } from './../../utils/constants';
import './Menu.css';

const Menu = () => {
  return (
    <div className="app__menu section__padding" id="menu">
      <div className="app__menu-content">
        <h1 className="headtext">Enjoy a new blend of coffee style</h1>
        <p className="p__playfair">
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing
        </p>
      </div>

      <div className="app__menu-coffee">
        {menu.map((coffee) => (
          <MenuCard key={coffee.title} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
