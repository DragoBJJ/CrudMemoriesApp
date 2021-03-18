import styled from 'styled-components';
import map from 'assets/images/map.jpg';

export const WrapperAuth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ signUp }) => (signUp ? 'auto' : '100vh')};
  justify-content: center;
  background-image: url(${map});
  background-size: cover;
  background-repeat: no-repeat;
`;
