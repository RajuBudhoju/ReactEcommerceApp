import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='fixed-top' expand="lg">
        <Container>
          <Nav style={{marginLeft: "40%", font: "bold", fontSize:"20px"} } className="me-auto">
            <Nav.Link href="http://localhost:3000/home">HOME</Nav.Link>
            <Nav.Link href="http://localhost:3000/">STORE</Nav.Link>
            <Nav.Link href="http://localhost:3000/about">ABOUT</Nav.Link>
          </Nav>
          <HeaderCartButton onClick={props.onShowCart} />
        </Container>
      </Navbar>
    </>
  );
}

export default Header;