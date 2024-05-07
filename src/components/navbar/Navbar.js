import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext/AuthContext';
import { doSignOut } from '../../firebase/auth';
import { Button, Menu } from 'semantic-ui-react';
import './Navbar.css'; /* Custom CSS file for additional styling */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Track if the navbar is scrolled
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll); 
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);


  const navbarStyle = {
    backgroundColor: isScrolled ? 'rgba(11, 102, 35, 0.9)' : 'transparent', 
    padding: '16px', 
    position: 'fixed',
    top: 0, 
    left: 0, 
    right: 0, 
    zIndex: 1000,
    transition: 'background-color 2s', 
  
  };

  return (
    <Menu secondary style={navbarStyle}>
      <Menu.Item className='custom-menuitem' as={Link} to="/">Home</Menu.Item>
      <Menu.Item className='custom-menuitem'  as={Link} to="/market">Market</Menu.Item>
      <Menu.Item className='custom-menuitem'  as={Link} to="/hodari">Ask Hodari</Menu.Item>
      <Menu.Item className='custom-menuitem'  as={Link} to="/services">Services</Menu.Item>

      {userLoggedIn && (
        <Menu.Menu position="right">
          <Menu.Item className='custom-menuitem'  as={Link} to="/notebooks">Notebooks</Menu.Item>
          <Menu.Item className='custom-menuitem'  as={Link} to="/analytics">Analytics</Menu.Item>
          <Menu.Item className='custom-menuitem'  as={Link} to="/account">My Account</Menu.Item>
          <Menu.Item>
            <Button
              basic
              inverted
              onClick={() => {
                doSignOut().then(() => navigate('/login'));
              }}
            >
              Logout
            </Button>
          </Menu.Item>
        </Menu.Menu>
      )}

      {!userLoggedIn && (
        <Menu.Menu position="right">
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
        </Menu.Menu>
      )}
    </Menu>
  );
};

export default Navbar;
