import styled from 'styled-components';
import GeneralStyles from '@styles/theme';

const {
  font: { sizes },
  animations,
  patterns,
  spacings,
  mediaQuery,
} = GeneralStyles;

export const Container = styled.section`
  padding: ${patterns.mobilePadding};
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQuery.tabletMediaQuery} {
    padding: ${patterns.tabletPadding};
    margin: 8rem auto;
    background-color: #131627;

    justify-content: space-between;
  }
  ${mediaQuery.desktopMediaQuery} {
    padding: ${patterns.desktopPadding};
    margin: 8rem auto;
    background-color: #131627;

    flex-direction: row;
    justify-content: space-between;
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    padding: ${patterns.extraDesktopPadding};
    margin: 15rem auto;
    background-color: #131627;

    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  align-self: center;
`;

export const Title = styled.h1`
  animation: ${({ fadeIn }) => fadeIn && animations.fadeInUp} 1s linear;

  font-size: ${sizes.xlarge};
  font-weight: 600;
  text-align: center;

  ${mediaQuery.tabletMediaQuery} {
    font-size: ${sizes.large};
    text-align: left;
  }
  ${mediaQuery.desktopMediaQuery} {
    font-size: ${sizes.xlarge};
    text-align: left;
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    font-size: ${sizes.xxlarge};
    text-align: left;
  }
`;

export const Description = styled.h2`
  font-weight: 400;
  text-align: center;
  font-size: ${sizes.small};

  ${mediaQuery.tabletMediaQuery} {
    font-size: ${sizes.medium};
    text-align: left;
  }
  ${mediaQuery.desktopMediaQuery} {
    font-size: ${sizes.large};
    text-align: left;
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    font-size: ${sizes.large};
    text-align: left;
  }
`;

export const Image = styled.img`
  margin: 4rem 0;
  width: 28rem;

  ${mediaQuery.tabletMediaQuery} {
    width: 40rem;
    margin: ${spacings.large};
  }
  ${mediaQuery.desktopMediaQuery} {
    width: 34rem;
    margin: ${spacings.large};
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    width: 34rem;
    margin: ${spacings.large};
  }
`;
