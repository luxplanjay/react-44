import { Toaster } from 'react-hot-toast';
import { useMedia } from 'react-use';
import { HiCake } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';

const DesktopNav = () => {
  return <div>Desktop nav</div>;
};

const MobileNav = () => {
  return (
    <div>
      <GiHamburgerMenu />
    </div>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;
`;

export const App = () => {
  const isDesktop = useMedia('(min-width: 768px)');

  return (
    <>
      {isDesktop ? (
        <Button type="button">
          <HiCake />
          Съесть вкусняшку
        </Button>
      ) : (
        <IconButton>
          <HiCake />
        </IconButton>
      )}

      <Button type="button">
        <HiCake />
        {isDesktop && 'Съесть вкусняшку'}
      </Button>

      <Box
        as="header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px solid black"
        px={4}
        py={2}
      >
        <div>Logo</div>
        {isDesktop ? <DesktopNav /> : <MobileNav />}
      </Box>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
