import { Outlet } from "react-router";

import Container from './Container'
import Header from './Header'

const Layout = () => {
  return (
    <div className="wrapper">
      <Container>
        <Header />
        <main className="main">
          <Outlet /> {/* This renders the current page content */}
        </main>
      </Container>
    </div>
  );
};

export default Layout;
