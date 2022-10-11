import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='error-page'>
            <div className=' inline-block text-center p-5 border-4 bg-[#f3f5fd] border-[#2b3351] rounded-lg'>
                <FontAwesomeIcon icon={faTriangleExclamation} className='text-6xl text-red-500 pb-4'></FontAwesomeIcon>
                <h2 className='font-bold text-xl text-red-500'>There is no data on our website at this addres.</h2>
                <Link to='/home' className='inline-block w-full bg-[#2b3351] text-white rounded-lg py-1 mt-4 font-bold'> Back To Home</Link>
            </div>
        </div>
    );
};

export default NotFound;