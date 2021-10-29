import React from 'react'
import { link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar">
           <div className="navbar-container">
                <link to="/" className='navbar-logo'>
                    TRVL <i className='fab.fa-typo3' />                                 
                </link>
                
           </div>

        </nav>
    )
}

export default Navbar
