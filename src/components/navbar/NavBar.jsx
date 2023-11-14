import React, { useContext } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';

import {Link} from 'react-router-dom'
import './NavBar.scss'
import { darkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';
function NavBar() {
    const {toggle,darkMode}=useContext(darkModeContext);
    const {currentUser}=useContext(AuthContext);

  return (
    <div className="navbar">
        <div className="left">
            <Link to={"/"} style={{textDecoration:'none'}}>
            <span>Social App</span>
            </Link>
            <HomeOutlinedIcon />
            {darkMode ?  <LightModeIcon onClick={toggle}/> : <DarkModeOutlinedIcon onClick={toggle} />}
            
            <GridViewOutlinedIcon />
            <div className="search">
                <SearchOutlined />
                <input type='text' placeholder='Search here...' />
            </div>
           
        </div>
        <div className="right">
            <PersonOutlineOutlined />
            <EmailOutlined />
            <NotificationsNoneOutlinedIcon />
            <div className="user">
                <img src={currentUser && currentUser.profilePic} alt='' />
                <span>{currentUser && currentUser.name}</span>
            </div>
        </div>

    </div>
  )
}

export default NavBar