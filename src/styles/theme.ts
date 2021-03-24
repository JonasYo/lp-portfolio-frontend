import { keyframes } from 'styled-components';

export default {
  colors: {
    black: '#000000',
    white: '#ffffff',
    transparent: 'transparent',
    aliceBlue: '#F6F9FC',
    frostbite: '#f231a5',
    blackRussian: '#131627',
  },
  font: {
    family: 'Poppins, sans-serif',
    sizes: {
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '1.8rem',
      medium: '2.2rem',
      large: '2.6rem',
      xlarge: '3.4rem',
      xxlarge: '5.2rem',
    },
  },
  mediaQuery: {
    mobileMediaQuery: '@media only screen and (max-width: 768px)',
    tabletMediaQuery: '@media only screen and (min-width: 992px)',
    desktopMediaQuery: '@media only screen and (min-width: 1200px)',
    extraDesktopMediaQuery: '@media only screen and (min-width: 1900px)',
  },
  animations: {
    fadeInUp: keyframes`
        from {
            opacity: 0;
            transform: translateY(48px);
        }
        
        to {
            transition: .4s opacity,.8s transform cubic-bezier(.07,.89,.79,.95),.8s -webkit-transform cubic-bezier(.07,.89,.79,.95);
            transform: translateY(0);
            opacity: 1;
        }
    `,
  },
  patterns: {
    mobilePadding: '6rem calc(1.6rem)',
    tabletPadding: '0.5rem calc((100vw - 100px) / 8)',
    desktopPadding: '0.5rem calc((100vw - 1000px) / 3)',
    extraDesktopPadding: '0.5rem calc((100vw - 1000px) / 3)',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '6.0rem',
    xlarge: '6.4rem',
    xxlarge: '12.8rem',
  },
  border: {
    radius: '0.4rem',
  },
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
};
