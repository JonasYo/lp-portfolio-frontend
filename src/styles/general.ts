import { keyframes } from 'styled-components';

export default {
  color: {
    black: '#000000',
    white: '#ffffff',
    transparent: 'transparent',
    aliceBlue: '#F6F9FC',
  },
  mediaQuery: {
    smallMobileMediaQuery: '@media only screen and (min-width: 576px)',
    mobileMediaQuery: '@media only screen and (min-width: 768px)',
    extraMobileMediaQuery: '@media only screen and (min-width: 992px)',
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
};
