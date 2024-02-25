import { Outlet } from 'react-router-dom';
import { Header, Nav, NavLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <p>Cars From USA</p>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog cars</NavLink>
          <NavLink to="/favorite">Favorite cars</NavLink>
        </Nav>
      </Header>
      <Outlet />
    </div>
  );
};
