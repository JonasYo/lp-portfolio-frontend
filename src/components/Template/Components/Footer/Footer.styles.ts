import styled from 'styled-components';
import GeneralStyles from '@styles/theme';

const { animations, patterns } = GeneralStyles;

export const Container = styled.div`
  padding: ${patterns.extraDesktopPadding};
`;

export const Text = styled.p`
  font-size: 1.25rem;
  color: #fff;
  animation: ${({ fadeIn }) => fadeIn && animations.fadeInUp} 1s linear;
`;
