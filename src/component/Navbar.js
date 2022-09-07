import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBars() {
  return (
    <Navbar fixed="top">
      <Container>
        <Navbar.Brand className="brand" href="#home">
          QuranKu
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">IqbalRonii</Nav.Link>
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBars;
