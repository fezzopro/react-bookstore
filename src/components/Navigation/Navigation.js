import { NavLink } from 'react-router-dom';
import './Navigation.css';
import avatar from '../../images/users/avatar.svg';

const Nav = () => (
  <header className="nav-bar">
    <nav className="nav">
      <div className="nav-link">
        <h1 className="logo">
          <NavLink to="/">Bookstore CMS</NavLink>
        </h1>
        <ul>
          <li><NavLink to="books">BOOKS</NavLink></li>
          <li><NavLink to="categories">CATEGORIES</NavLink></li>
        </ul>
      </div>
      <div className="avatar-div">
        <NavLink to="#">
          <img src={avatar} alt="User" />
        </NavLink>
      </div>
    </nav>
  </header>
);

export default Nav;
