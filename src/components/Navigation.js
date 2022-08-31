import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

const Navigation = () => (
  <nav>
    <Link to="/">Главная</Link>
    <Link to="/todos">Заметки</Link>
  </nav>
);

export default Navigation;
