import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './google-auth';

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='item'>Steamy</Link>
            <div className='right menu'>
                <Link to='/' className='item'>All Streams</Link>
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;