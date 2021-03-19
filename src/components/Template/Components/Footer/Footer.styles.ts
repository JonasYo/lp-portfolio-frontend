import styled from 'styled-components';
import GeneralStyles from '@styles/general';

const { animations } = GeneralStyles;

export const Container = styled.div`
  padding: 0.5rem calc((100vw - 1000px) / 4);
`;

export const Text = styled.p`
  font-size: 1.25rem;
  color: #fff;
  animation: ${({ fadeIn }) => fadeIn && animations.fadeInUp} 1s linear;
`;
