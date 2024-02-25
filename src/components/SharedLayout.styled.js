import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: #fff;
  margin-right: 10px;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }
`;
