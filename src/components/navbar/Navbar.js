import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext/AuthContext';
import { doSignOut } from '../../firebase/auth';
import { Button, Menu } from 'semantic-ui-react';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <Menu secondary className="navbar">
      {/* Main navigation links on the left */}
      <Menu.Item as={Link} to="/" content="Home" />
      <Menu.Item as={Link} to="/market" content="Market" />
      <Menu.Item as={Link} to="/information" content="Information" />
      <Menu.Item as={Link} to="/careers" content="Careers" />

      {/* Align buttons to the right */}
      <Menu.Menu position="right">
        {userLoggedIn ? (
          <Menu.Item>
            <Button
              basic
              inverted
              onClick={() => {
                doSignOut().then(() => {
                  navigate('/login');
                });
              }}
            >
              Logout
            </Button>
          </Menu.Item>
        ) : (
          <>
            <Menu.Item>
              <Button
                basic
                inverted
                as={Link}
                to="/login"
                style={{ marginRight: '0.5em' }}
              >
                Login
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button
                basic
                inverted
                as={Link}
                to="/register"
                style={{ marginLeft: '0.5em' }}
              >
                Signup
              </Button>
            </Menu.Item>
          </>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
