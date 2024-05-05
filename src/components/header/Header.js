import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext/AuthContext';
import { doSignOut } from '../../firebase/auth';

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    return (


      
                <div className='right menu'>
                    {userLoggedIn ? (
                        <button
                            onClick={() => {
                                doSignOut().then(() => {
                                    navigate('/login');
                                });
                            }}
                            className='item'
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                             <Button as='a' inverted>
                      Log in
                    </Button>
                            <Link to={'/register'} className='item'>
                                Register New Account
                            </Link>
                        </>
                    )}
              
            </div>
        
    );
};

export default Header;
