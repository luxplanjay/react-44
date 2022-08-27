import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
