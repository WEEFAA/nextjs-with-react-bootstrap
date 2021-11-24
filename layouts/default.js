import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Layout = function (props) {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/default_logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            NextJS with React-Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
      { props.children }
    </>
  )
}

export default Layout
