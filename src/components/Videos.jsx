import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
`;

const Item = styled.div`
  cursor: pointer;
  color: ${p => {
    return p.isSelected ? p.theme.colors.accent : p.theme.colors.text;
  }};

  :hover {
    text-decoration: underline;
  }
`;

export const Videos = ({ items, selected, onSelect }) => {
  return (
    <Container>
      {items.map(({ id, link }) => (
        <Item
          key={id}
          onClick={() => onSelect(link)}
          isSelected={link === selected}
        >
          {link}
        </Item>
      ))}
    </Container>
  );
};
