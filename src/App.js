import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Todoapp from './components/Todoapp';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function App() {
  return (
    <BrowserRouter>
      <Navbar color="light" light expand="md">
       <NavbarBrand><Link to='/'>Home</Link></NavbarBrand> 
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink> <Link to='/todoapp'>TodoApp</Link> </NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Link to="/about">About Us</Link></NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <Route path="/" exact component={Home} />
      <Route path="/todoapp" component={Todoapp} />
      <Route path="/about" component={AboutUs} />
      <Route exact path="/dashboard" render={() => {window.location.href="http://127.0.0.1:8887/"}} />
    </BrowserRouter>
  );
}

export default App;
