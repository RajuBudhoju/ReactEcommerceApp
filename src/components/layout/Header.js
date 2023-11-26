import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">STORE</Nav.Link>
            <Nav.Link href="#pricing">PRICE</Nav.Link>
          </Nav>
          <HeaderCartButton onClick={props.onShowCart} />
        </Container>
      </Navbar>
    </>
  );
}

export default Header;