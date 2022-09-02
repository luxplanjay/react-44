import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from 'hooks';

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: #e84a5f;
  }
`;

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Главная</Link>
      {isLoggedIn && <Link to="/todos">Заметки</Link>}
    </nav>
  );
};

export default Navigation;
