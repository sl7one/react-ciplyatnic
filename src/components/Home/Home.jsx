import logo from './img/logo.png';
import './home.scss';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="home">
      <h1>HELLO USER</h1>
      <img className="home__logo" src={logo} alt="logo" height="180" width="150" />
      <ul className="home__nav">
        <li className="home__list">
          <NavLink to="/orders" className="home__link">
            Заказы
          </NavLink>
        </li>
        <li className="home__list">
          <NavLink to="/purchases" className="home__link">
            Закупки
          </NavLink>
        </li>
        <li className="home__list">
          <NavLink to="/sales" className="home__link">
            Продажи
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
