import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component
{
    render()
    {
        return(
        <div>
            <Link to="/">Home</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            
            <Link to="/about">About</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/contact">Contact</Link>

        </div>
        )
    }
}
export default Header;