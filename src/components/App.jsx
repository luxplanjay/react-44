import { Toaster } from 'react-hot-toast';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <Box
        as="main"
        p={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        App
      </Box>
      <Toaster position="top-center" reverseOrder={false} />
      <GlobalStyle />
    </>
  );
};
