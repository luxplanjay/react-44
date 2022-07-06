import { HiAcademicCap } from 'react-icons/hi';
import { Container } from './Alert.styled';

export const Alert = ({ children }) => {
  return (
    <Container>
      <HiAcademicCap size="40" />
      {children}
    </Container>
  );
};
