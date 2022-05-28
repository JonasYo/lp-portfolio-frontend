import styled from 'styled-components';
import GeneralStyles from '@styles/themes/default';

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
  min-height: 13.5rem;

  ${mediaQuery.tabletMediaQuery} {
    margin: 0 3rem 0 0;
  }
  ${mediaQuery.desktopMediaQuery} {
    margin: 0 3rem 0 0;
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    margin: 0 3rem 0 0;
  }

  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    transform: translateY(-5%);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h3`
  animation: ${({ fadeIn }) => fadeIn && animations.fadeInUp} 1s linear;

  font-size: ${sizes.medium};
  font-weight: 600;
  color: ${colors.black};

  ${mediaQuery.tabletMediaQuery} {
    font-size: ${sizes.small};
    text-align: left;
    font-weight: 400;
  }
  ${mediaQuery.desktopMediaQuery} {
    font-size: ${sizes.small};
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

export const Icon = styled.img`
  height: 2rem;
  min-width: 2rem;
  width: 2rem;

  margin-right: 1rem;
`;
