import styled from 'styled-components';
import GeneralStyles from '@styles/theme';

const {
  font: { sizes },
  animations,
  mediaQuery,
  colors,
  border,
  spacings,
} = GeneralStyles;

export const Container = styled.div`
  background-color: ${colors.white};
  padding: ${spacings.medium};
  font-size: ${sizes.xsmall};
  border-radius: ${border.radius};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQuery.extraDesktopMediaQuery} {
    flex-direction: inline;
    justify-content: space-between;
  }
`;

export const Title = styled.h3`
  animation: ${({ fadeIn }) => fadeIn && animations.fadeInUp} 1s linear;

  font-size: ${sizes.medium};
  font-weight: 600;
  color: ${colors.black};

  ${mediaQuery.tabletMediaQuery} {
    font-size: ${sizes.xsmall};
    text-align: left;
    font-weight: 400;
  }
  ${mediaQuery.desktopMediaQuery} {
    font-size: ${sizes.xsmall};
    text-align: left;
    font-weight: 400;
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    font-size: ${sizes.medium};
    text-align: left;
    font-weight: 400;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  text-align: left;
  font-size: ${sizes.small};
  color: ${colors.black};
  margin-top: ${spacings.small};

  ${mediaQuery.tabletMediaQuery} {
    font-size: ${sizes.small};
    text-align: left;
  }
  ${mediaQuery.desktopMediaQuery} {
    font-size: ${sizes.small};
    text-align: left;
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    font-size: ${sizes.xsmall};
    text-align: left;
  }
`;
