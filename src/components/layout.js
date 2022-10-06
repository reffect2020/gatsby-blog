import * as React from 'react';
import Header from './header';
import Footer from './footer';
// import './global.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
