import logo from '../../images/logo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header bg-[#2b3351]  text-[#5fe0e9] py-3">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo flex justify-between items-center py-1 px-2 rounded-lg">
                    <img src={logo} alt="" />
                    <h1 className='font-bold text-3xl pl-3'>Quiz <span className='text-white'>Panther</span></h1>
                </div>
                <nav>
                    <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                    <NavLink to='/statistics' >Statistics</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;