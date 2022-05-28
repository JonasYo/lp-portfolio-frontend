import React from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => (
  <div id="layout">
    <Header />

    <main>{children}</main>

    <footer>
      <Footer />
    </footer>
  </div>
);

export default Layout;
