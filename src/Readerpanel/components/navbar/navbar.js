import React from 'react';
import  './navbar.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';

const Navbar = () => {
    return(
        <div className="nav-main">
             <div className="navbar-sec">
                <h2>SYNERGY</h2>
                <button className="search-btn" ><SearchOutlinedIcon /></button>
                <button className="menu-btn"><MenuTwoToneIcon/> </button>  
            </div>
        </div>
    )
}


export default Navbar;