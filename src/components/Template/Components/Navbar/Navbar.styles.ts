import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import styled from 'styled-components';
import GeneralStyles from '@styles/theme';

const { patterns } = GeneralStyles;

export const Container = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: ${patterns.extraDesktopPadding};
  z-index: 10;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  a {
    text-decoration: none;
    padding-left: 1.25rem;
    padding-right: 1.25rem;

    &.active {
      text-decoration: none;
      color: #15cdfc;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
