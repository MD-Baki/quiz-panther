import logo from '../../Logo/logo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header bg-[#5fe0e9]  text-[#2b3351] py-4 border-b-4 border-[#2b3351]">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo flex justify-between items-center">
                    <img className='' src={logo} alt="" />
                    <h1 className='font-bold text-3xl pl-2'>Quiz <span className='text-[#ffffff]'>Panther</span></h1>
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