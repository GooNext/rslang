import React from 'react'
import { Button, Navbar, Form, Nav } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import HeaderWrapper from './HeaderWrapper'

const links = [
  {
    id: 'team',
    title: 'О команде',
    path: 'about',
  },
]

function createLink({ id, title, path }) {
  return (
    <li key={id}>
      <HashLink to={`/${path}`}>{title}</HashLink>
    </li>
  )
}

createLink.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

const Header = () => (
  <HeaderWrapper>
    <Navbar expand="lg">
      <Navbar.Brand href="#home" className="logo">
        <img src="./assets/images/logo.png" />
      </Navbar.Brand>
      <Navbar.Toggle
        className="navbar_promo"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">{links.map(createLink)}</Nav>
        <Form inline>
          <Link to="login">
            <Button className="enter_btn" variant="primary">
              Войти
            </Button>
          </Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </HeaderWrapper>
)

export default Header
