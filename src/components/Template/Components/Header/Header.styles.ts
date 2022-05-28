import styled from 'styled-components';
import GeneralStyles from '@styles/themes/default';

const { patterns, mediaQuery } = GeneralStyles;

export default styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  padding: 2rem;
  position: relative;
  width: 100%;
  top: 0;

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
