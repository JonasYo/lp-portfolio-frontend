import { keyframes } from 'styled-components';

export default {
  font: {
    family: 'Poppins, sans-serif',
    sizes: {
      xsmall: '1.0rem',
      small: '1.25rem',
      medium: '1.5rem',
      large: '2rem',
      xlarge: '2.5rem',
      xxlarge: '3.5rem',
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
    xsmall: '0.5rem',
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
    xlarge: '3rem',
    xxlarge: '4rem',
  },
  border: {
    radius: '0.4rem',
  },
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
};
