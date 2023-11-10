"use client";

import Container from "./Container";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header>
      <Container>
        <Navigation />
        <hr />
      </Container>
    </header>
  );
};

export default Header;
