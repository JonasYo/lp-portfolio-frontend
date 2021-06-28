import styled from 'styled-components';
import GeneralStyles from '@styles/theme';

const { patterns, mediaQuery } = GeneralStyles;

export const Container = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  padding: 2rem;

  ${mediaQuery.tabletMediaQuery} {
    padding: ${patterns.tabletPadding};
  }
  ${mediaQuery.desktopMediaQuery} {
    padding: ${patterns.desktopPadding};
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    padding: ${patterns.extraDesktopPadding};
  }
`;
