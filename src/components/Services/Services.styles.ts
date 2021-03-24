import styled from 'styled-components';
import GeneralStyles from '@styles/theme';

const {
  font: { sizes },
  animations,
  patterns,
  mediaQuery,
  colors,
  spacings,
  grid,
} = GeneralStyles;

export const Container = styled.div`
  padding: ${patterns.mobilePadding};

  ${mediaQuery.tabletMediaQuery} {
    padding: ${patterns.tabletPadding};
    margin: 8rem auto;
  }
  ${mediaQuery.desktopMediaQuery} {
    padding: ${patterns.desktopPadding};
    margin: 8rem auto;
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    padding: ${patterns.extraDesktopPadding};
    margin: 15rem auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQuery.extraDesktopMediaQuery} {
    flex-direction: inline;
    justify-content: space-between;
  }
`;

export const Subtitle = styled.h2`
  animation: ${({ fadeIn }) => fadeIn && animations.fadeInUp} 1s linear;

  font-size: ${sizes.large};
  font-weight: 600;
  color: ${colors.white};
  border-left: 6px solid ${colors.frostbite};
  padding-left: 1rem;

  ${mediaQuery.tabletMediaQuery} {
    font-size: ${sizes.large};
  }
  ${mediaQuery.desktopMediaQuery} {
    font-size: ${sizes.large};
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    font-size: ${sizes.xlarge};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  align-self: center;
  margin-top: ${spacings.medium};

  ${mediaQuery.tabletMediaQuery} {
    align-self: auto;
  }
  ${mediaQuery.desktopMediaQuery} {
    align-self: auto;
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    align-self: auto;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  text-align: center;
  font-size: ${sizes.small};
  color: ${colors.white};

  ${mediaQuery.tabletMediaQuery} {
    font-size: ${sizes.xsmall};
    text-align: left;
  }
  ${mediaQuery.desktopMediaQuery} {
    font-size: ${sizes.xsmall};
    text-align: left;
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    font-size: ${sizes.medium};
    text-align: left;
  }
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${grid.gutter};
  margin-top: ${spacings.medium};

  ${mediaQuery.tabletMediaQuery} {
    grid-template-columns: 1fr 1fr;
  }
  ${mediaQuery.desktopMediaQuery} {
    grid-template-columns: 1fr 1fr;
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
