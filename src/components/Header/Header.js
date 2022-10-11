import logo from '../../images/logo.png';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className="header bg-[#2b3351]  text-[#5fe0e9] py-3">
            <div className="w-11/12 lg:w-9/12 mx-auto flex justify-between items-center">
                <div className="logo flex justify-between items-center py-1 px-2 rounded-lg">
                    <img src={logo} alt="" />
                    <h1 className='font-bold text-3xl pl-3'>Quiz <span className='text-white'>Panther</span></h1>
                </div>
                <ul className={`bg-[#2b3351] flex flex-col md:flex-row absolute md:static duration-100 ease-linear top-[70px] z-10 w-full md:w-auto pt-3 md:pt-0
                ${open ? 'left-0' : 'left-[-1000px]'}`}>
                    <li className='mb-4 md:mb-0'><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink></li>
                    <li className='mb-4 md:mb-0'><NavLink to='/statistics' >Statistics</NavLink></li>
                    <li className='mb-4 md:mb-0'><NavLink to='/blog'>Blog</NavLink></li>
                </ul>
                <div onClick={() => setOpen(!open)} className='text-xl md:hidden'>
                    {
                        open ? <FontAwesomeIcon icon={faSquareXmark} /> : <FontAwesomeIcon icon={faAlignRight} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;


//   left-0 top-[70px] z-20 bg-[#2b3351] pl-3 md:pl-0  pt-6 md:pt-0 w-full md:w-fit