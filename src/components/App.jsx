import styled from 'styled-components';
import { HiArchive, HiArrowCircleUp, HiBriefcase } from 'react-icons/hi';
import { Button } from './Button';
import { Box } from './Box';
import { AppBar } from './AppBar';

const Text = styled.p`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
`;

export const App = () => {
  return (
    <Box position="relative" as="main">
      <AppBar />
      <Box display="flex" justifyContent="flex-end" mt={4} as="section">
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
          officia!
        </Text>
      </Box>

      <Box as="section" mt={6}>
        <Button icon={HiArchive}>Search</Button>
        <Button icon={HiArrowCircleUp}>Filter</Button>
        <Button icon={HiBriefcase} type="submit">
          LogIn
        </Button>
        <Button type="submit">LogIn</Button>
      </Box>
    </Box>
  );
};
