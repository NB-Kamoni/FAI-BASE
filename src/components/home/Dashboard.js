import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext/AuthContext';
import { doSignOut } from '../../firebase/auth';

const Header = () => {
  return (
    <Menu inverted pointing secondary size='large'>
      <Container>
        <Menu.Item as={Link} to="/" active>
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/market">
          Market
        </Menu.Item>
        <Menu.Item as={Link} to="/information">
          Information
        </Menu.Item>
        <Menu.Item as={Link} to="/careers">
          Careers
        </Menu.Item>
        <Menu.Item position='right'>
          <Link to={'/login'} className='item'>
            <Button inverted>
              Log In
            </Button>
          </Link>
          <Link to={'/register'} className='item'>
            <Button inverted primary style={{ marginLeft: '0.5em' }}>
              Sign Up
            </Button>
          </Link>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
