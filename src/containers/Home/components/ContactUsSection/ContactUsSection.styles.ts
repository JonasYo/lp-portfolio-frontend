import styled from 'styled-components';
import GeneralStyles from '@styles/themes/default';

const {
  font: { sizes },
  patterns,
  mediaQuery,
  spacings,
} = GeneralStyles;

export const Container = styled.section`
  padding: ${patterns.mobilePadding};
  transform: skewY(1deg);
  background-color: var(--white);
  display: flex;
  flex-direction: column;

  ${mediaQuery.tabletMediaQuery} {
    padding: ${patterns.tabletPadding};
    flex-direction: row;
    justify-content: space-between;
  }
  ${mediaQuery.desktopMediaQuery} {
    padding: ${patterns.desktopPadding};
    flex-direction: row;
    justify-content: space-between;
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    padding: ${patterns.extraDesktopPadding};
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  transform: skewY(-1deg);

  ${mediaQuery.tabletMediaQuery} {
    margin: 8rem 0;
  }
  ${mediaQuery.desktopMediaQuery} {
    margin: 8rem 0;
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    margin: 10rem 0;
  }
`;

export const Subtitle = styled.h2`
  font-size: ${sizes.large};
  font-weight: 600;
  color: var(--black);
  border-left: 6px solid var(--red);
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
  align-self: center;
  margin-top: ${spacings.medium};
`;

export const Description = styled.p`
  font-weight: 400;
  text-align: center;
  font-size: ${sizes.small};
  color: var(--black);

  ${mediaQuery.tabletMediaQuery} {
    font-size: ${sizes.medium};
    text-align: left;
  }
  ${mediaQuery.desktopMediaQuery} {
    font-size: ${sizes.medium};
    text-align: left;
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    font-size: ${sizes.medium};
    text-align: left;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${spacings.large};
  justify-content: space-evenly;

  ${mediaQuery.tabletMediaQuery} {
    justify-content: space-evenly;
  }
  ${mediaQuery.desktopMediaQuery} {
    justify-content: left;
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    justify-content: left;
  }
`;

export const Icon = styled.img`
  width: 2rem;
  cursor: pointer;

  ${mediaQuery.tabletMediaQuery} {
    margin: 0 3rem 0 0;
  }
  ${mediaQuery.desktopMediaQuery} {
    margin: 0 3rem 0 0;
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    margin: 0 3rem 0 0;
  }
`;
