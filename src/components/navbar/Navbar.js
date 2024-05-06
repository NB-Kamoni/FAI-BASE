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
      
      <Menu.Item> <Link className='text' to={'/'}>Home</Link></Menu.Item>
      <Menu.Item> <Link className='text' to={'/market'}>Market</Link></Menu.Item>
      <Menu.Item> <Link className='text' to={'/information'}>Information</Link></Menu.Item>
      <Menu.Item> <Link className='text' to={'/careers'}>Careers</Link></Menu.Item>
     

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
