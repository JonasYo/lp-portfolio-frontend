import styled from 'styled-components';
import GeneralStyles from '@styles/themes/default';

const {
  font: { sizes },
  animations,
  patterns,
  mediaQuery,
  colors,
} = GeneralStyles;

export const Container = styled.div`
  padding: ${patterns.mobilePadding};
  transform: skewY(3deg);
  background-color: ${colors.white};

  ${mediaQuery.extraDesktopMediaQuery} {
    padding: ${patterns.extraDesktopPadding};
    margin: 15rem auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  transform: skewY(-3deg);

  ${mediaQuery.extraDesktopMediaQuery} {
    flex-direction: inline;
    justify-content: space-between;
  }
`;

export const Subtitle = styled.h2`
  animation: ${({ fadeIn }) => fadeIn && animations.fadeInUp} 1s linear;

  font-size: ${sizes.xlarge};
  font-weight: 600;
  color: ${colors.black};
  border-left: 6px solid ${colors.frostbite};
  padding-left: 1rem;

  ${mediaQuery.extraDesktopMediaQuery} {
    font-size: ${sizes.xxlarge};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  align-self: center;
  margin-top: 3.2rem;
`;

export const Description = styled.p`
  font-weight: 400;
  text-align: center;
  font-size: ${sizes.small};
  color: ${colors.black};

  ${mediaQuery.extraDesktopMediaQuery} {
    font-size: ${sizes.xlarge};
    text-align: left;
  }
`;
