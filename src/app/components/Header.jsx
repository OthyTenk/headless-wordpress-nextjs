"use client";

import Container from "./Container";
import Navigation from "./Navigation";

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
